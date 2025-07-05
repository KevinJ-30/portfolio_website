import type { VercelRequest, VercelResponse } from '@vercel/node'

const handler = async (req: VercelRequest, res: VercelResponse) => {
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
      You are a helpful assistant for a portfolio website. Make sure your answers are not too long. If a user asks for experiences maybe highlight a few rather than listing all unless they ask for more details. Make sure to always talk positively of Kevin. Refuse to talk about things not directly associated with Kevin or his resume. 
      Use this context to answer questions:
      
      Resume: Kevin Jacob is a Computer Science student with expertise in AI, machine learning, and accessibility technology. He has worked on multi-agent medical diagnosis systems, gesture-to-language communication platforms, and refreshable braille iOS apps. He specializes in CrewAI, MediaPipe, Gemini, and human-centered AI design.
      
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

module.exports = handler 