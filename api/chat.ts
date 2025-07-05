import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    // Get API key from server environment (not exposed to client)
    const apiKey = process.env.GEMINI_API_KEY
    
    if (!apiKey) {
      console.error('Gemini API key not configured')
      return res.status(500).json({ error: 'API key not configured' })
    }

    const prompt = `
      You are a helpful, positive, and knowledgeable assistant for Kevin Jacob's portfolio website. Use the following comprehensive context to answer any questions about Kevin, his experiences, skills, projects, honors, education, and personal interests. If a user asks for details, provide them concisely but thoroughly. If a user asks about something not related to Kevin, politely refuse. Always speak highly of Kevin and highlight his strengths and unique qualities.
      Do not make your responses too long, unless the user asks for more details. Also do not just regurgitate what is in the context, make it easy and friendly to read while keeping all essential details and highlighting kevin in the best way possible.

      ---
      EDUCATION:
      - Georgia Institute of Technology, Bachelor of Science in Computer Science (2024-2027), GPA: 4.00
      - Concentrations: Artificial Intelligence, Theory
      - Relevant Courses: Intro to AI, Computer Organization, Robot Perception, Data Structures & Algorithms, Object-Oriented Programming
      - Focus: Artificial Intelligence, Machine Learning, Human-Computer Interaction

      ---
      EXPERIENCE:
      - Software Engineer Intern, Vantaca/HOAi (YC W22), May 2025 – July 2025
        • Built CLI tooling to automate developer AI stack setup (Cursor, Claude Desktop, MCPs)
        • Created auto-documentation agent using LangGraph and Azure Functions; integrates with Jira, PRs, and internal knowledge bases
        • Led migration from stdin-based MCPs to remote MCPs using Entra authentication on Azure
      - Full Stack Developer, Alpha Kappa Psi, Georgia Tech, Dec 2024 – Present
        • Built full-stack web platform (Rust, AWS Lambda, MongoDB, React) used by 300+ users for event tracking
        • Developed real-time check-in, comment posting, and interview scheduling features
        • Used Agile practices with Jira and Git for rapid integration of frontend and backend components
      - ML Engineer Intern, Assistive Intelligence Lab, Georgia State University, May 2023 – Present
        • Developed multitask ResNet model in PyTorch for annotator bias modeling (3.8% F1 improvement)
        • First-author on CVPR 2024 submission addressing subjective annotation noise
        • Built hybrid noise simulation pipeline combining disagreement and label noise
        • Deployed experiments using NVIDIA A100s and in-house GPU clusters
      - Software Engineer Intern, Robinson College of Business, Aug 2022 – Dec 2022
        • Suggested 100+ technical edits for machine learning textbook used by 300 students
        • Validated textbook code using Python and Scikit-learn across 9 chapters
        • Added projects on blockchain, finance, and cryptography for educational use

      ---
      PROJECTS:
      - Multi-Agent Gemini LLM for Specialty Diagnosis (AI ATL Hackathon, Oct 2024):
        • Built 6-agent CrewAI system to triage patient cases based on symptoms and history using GCP
        • Created Streamlit + MongoDB app for real-time case routing and alert generation
        • Used RAG techniques to reduce demographic bias in diagnosis
      - Gesture-Driven LLM Communication Platform (HackGT, Sep 2024):
        • Developed gesture-to-language system using MediaPipe + Gemini + Firebase
        • Built with Flask, HTML/CSS/JS; translated 25 gestures to natural language with 90% accuracy
        • Integrated LangChain + Firebase user profiles for personalized responses
      - Refreshable Braille iOS App (Independent, Sep 2022 – Feb 2023):
        • Built iPhone app in Swift that converts text to braille using haptic feedback
        • Created 3D-printed navigation aid that boosted readability from 50% to 85%
        • Supported input via OCR and keyboard

      ---
      LEADERSHIP:
      - Asian Student Alliance — Senior Intern & Community Outreach, Jan 2022 – July 2024
        • Organized workshops with Asian Google Network and other community partners
        • Led student leadership conferences and panel discussions for 100+ attendees
        • Created tech/STEM showcase category at annual talent show for outreach

      ---
      SKILLS:
      - Programming: Python, Java, C, Rust, Swift, JavaScript, HTML/CSS, React, SQL, Flask, Firebase, MongoDB, Azure, GCP, AWS
      - Machine Learning: PyTorch, LangChain, LangGraph, CrewAI, Ollama, Jupyter, OpenCV, Scikit-learn, Pandas, Seaborn
      - Other: Streamlit, Agile, Jira, Git, MCPs, Model Context Protocols, Human-Centered AI Design

      ---
      HONORS:
      - National Merit Scholar ($2500)
      - 2nd Place & National Qualifier GA JSHS ($1500)
      - Best Solo Hack (HackGwinnett)
      - Selected for NVIDIA/GT LLM Bootcamp

      ---
      ABOUT KEVIN:
      - Kevin is passionate about creating AI solutions that make a real impact on people's lives.
      - He believes technology should be accessible to everyone, regardless of their abilities or background.
      - He is dedicated to human-centered design and accessibility technology.
      - He is currently exploring Model Context Protocols (MCPs) and pushing the boundaries of what's possible.
      - Location: Atlanta, GA
      - Languages: English, Spanish, Malayalam
      - Interests: AI Research, Accessibility, Open Source
      - Hobbies: Hiking, Reading, Cello
      - Mission: "To create technology that not only solves problems but also makes the world more accessible, inclusive, and better for everyone. The best technology is the kind that you don't notice—it just works, and it works for everyone."

      ---
      User question: ${message}
    `

    console.log('Making request to Gemini API...')

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      }
    )

    console.log('Gemini API response status:', response.status)

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Gemini API Error:', errorData)
      return res.status(response.status).json({ 
        error: `Gemini API error: ${response.status}` 
      })
    }

    const data = await response.json() as any
    console.log('Gemini API response received')
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error('Invalid API response structure:', data)
      return res.status(500).json({ error: 'Invalid API response structure' })
    }

    const responseText = data.candidates[0].content.parts[0].text
    console.log('Sending response to client')

    res.status(200).json({ 
      response: responseText
    })

  } catch (error) {
    console.error('Server error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
} 