import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// API route for chat
app.post('/api/chat', async (req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get API key from environment
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('Gemini API key not configured');
      return res.status(500).json({ error: 'API key not configured' });
    }

    const prompt = `
      You are Kevin-Bot, a helpful AI assistant for Kevin Jacob's portfolio website. Keep your answers concise and friendly. Always talk positively about Kevin and his work. Only answer questions related to Kevin, his background, skills, projects, or experiences.

      Here's Kevin's current information:

      EDUCATION:
      - Georgia Institute of Technology, Bachelor of Science in Computer Science (May 2027)
      - GPA: 4.00, Concentrations: Artificial Intelligence and Theory
      - Relevant courses: Intro to AI, Computer Organization, Robotics and Perception, Data Structures and Algorithms, OOP

      CURRENT EXPERIENCE:
      - Software Engineer Intern at Vantaca + HOAi (YC W22) - May 2025 to July 2025
        * Developed LangGraph-powered agent for auto-generating documentation from Jira updates and PRs
        * Built TypeScript CLI for AI stack onboarding, preventing misconfigurations for 40+ engineers
        * Deploying hosted MCPs via Azure App Services with custom OAuth for 200+ staff

      - Software Development Project Manager at Alpha Kappa Psi Business Fraternity - Dec 2024 to Present
        * Leading 9-engineer team building full-stack web app (Rust, AWS Lambda, React, MongoDB)
        * Developed real-time attendance tracking and interview scheduling for 300+ users
        * Managing Agile workflows and cross-team collaboration

      - ML Research Intern at Assistive Intelligence Lab, Georgia State University - May 2023 to Present
        * Developed NRA-Embed method for noise-robust annotator embeddings, improving NLP classification by 12% F1
        * Leading EMNLP '25 submission on subjective annotation noise and disagreement separation
        * Deployed scalable ML pipelines across 1-12 GPU setups, reducing training time by 80%

      - Senior Intern & Community Outreach at Asian Student Alliance - Jan 2022 to Jul 2024
        * Expanded community partnerships by 50% through educational workshops with Asian Google Network
        * Led leadership conferences and secured expert panel participants for 100+ students

      KEY PROJECTS:
      - MedMap.ai: 6-agent CrewAI system for medical diagnosis, routing cases to 3 specialties in <10s with 95% accuracy
      - Gesture Driven LLM: MediaPipe-Gemini pipeline translating 25 hand gestures to natural language with 90% accuracy
      - Portfolio Website: React/TypeScript portfolio with AI chatbot (this website!)

      TECHNICAL SKILLS:
      - Programming: Python (90%), Java (80%), Rust, Swift, JavaScript, React, SQL, Flask, Firebase, MongoDB
      - Cloud & Platforms: Azure, GCP, AWS
      - Machine Learning: PyTorch, LangChain, LangGraph, CrewAI, Ollama, Jupyter, OpenCV, Scikit-learn, Pandas, Seaborn
      - Leadership: 95% proficiency

      HONORS & AWARDS:
      - National Merit Scholar ($2500)
      - 2nd Place ($1500) & National Qualifier, GA JSHS
      - Best Solo Hack, HackGwinnett
      - Selected for NVIDIA/GT LLM Bootcamp

      PERSONAL INFO:
      - Location: Atlanta, GA
      - Languages: English, Spanish, Malayalam
      - Hobbies: Hiking, Reading, Cello
      - Passion: AI research, accessibility technology, human-centered design

      User question: ${message}
    `;

    console.log('Making request to Gemini API...');

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
    );

    console.log('Gemini API response status:', response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API Error:', errorData);
      return res.status(response.status).json({ 
        error: `Gemini API error: ${response.status}` 
      });
    }

    const data = await response.json();
    console.log('Gemini API response received');
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error('Invalid API response structure:', data);
      return res.status(500).json({ error: 'Invalid API response structure' });
    }

    const responseText = data.candidates[0].content.parts[0].text;
    console.log('Sending response to client');

    res.status(200).json({ 
      response: responseText
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Make sure to set your GEMINI_API_KEY in .env.local');
}); 