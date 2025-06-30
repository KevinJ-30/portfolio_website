// src/services/chatService.ts
import { API_CONFIG } from '../config/api'
import resumeText from '../data/resume.txt?raw'

interface ChatRequest {
  message: string
}

export async function sendMessage({ message }: ChatRequest) {
  // Check if API key is available
  if (!API_CONFIG.GEMINI_API_KEY) {
    console.error('Gemini API key is not configured')
    throw new Error('API key not configured. Please check your environment variables.')
  }

  const prompt = `
    You are a helpful assistant for a portfolio website. Make sure your answers are not too long. If a user asks for experiences maybe highlight a few rather than listing all unless they ask for more details. Make sure to always talk positively of Kevin. Refuse to talk about things not directly associated with Kevin or his resume. 
    Use this context to answer questions:
    
    Resume: ${resumeText}
    
    
    User question: ${message}
  `

  try {
    console.log('Sending request to Gemini API...')
    console.log('API URL:', API_CONFIG.GEMINI_API_URL)
    console.log('API Key available:', !!API_CONFIG.GEMINI_API_KEY)
    
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
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', response.headers)

    if (!response.ok) {
      const errorData = await response.text()
      console.error('API Error Response:', errorData)
      throw new Error(`API error: ${response.status} ${response.statusText} - ${errorData}`)
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