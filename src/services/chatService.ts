// src/services/chatService.ts
import { API_CONFIG } from '../config/api'
import resumeText from '../data/resume.txt?raw'

interface ChatRequest {
  message: string
}

export async function sendMessage({ message }: ChatRequest) {
  const prompt = `
    You are a helpful assistant for a portfolio website. Make sure your answers are not too long. If a user asks for experiences maybe highlight a few rather than listing all unless they ask for more details. Make sure to always talk positively of Kevin. Refuse to talk about things not directly associated with Kevin or his resume. 
    Use this context to answer questions:
    
    Resume: ${resumeText}
    
    
    User question: ${message}
  `

  try {
    console.log('Sending request to Gemini API...')
    const response = await fetch(`${API_CONFIG.GEMINI_API_URL}?key=${API_CONFIG.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('API Error:', errorData)
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log('API Response:', data)
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error('Unexpected API response structure:', data)
      throw new Error('Invalid API response structure')
    }

    return data.candidates[0].content.parts[0].text
  } catch (error) {
    console.error('Detailed error:', error)
    throw error
  }
}