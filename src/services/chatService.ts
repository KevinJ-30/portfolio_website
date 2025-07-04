// src/services/chatService.ts

interface ChatRequest {
  message: string
}

export async function sendMessage({ message }: ChatRequest) {
  try {
    console.log('Sending request to secure backend API...')
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message
      })
    })

    console.log('Response status:', response.status)

    if (!response.ok) {
      const errorData = await response.text()
      console.error('API Error Response:', errorData)
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log('API Response:', data)
    
    if (!data.response) {
      console.error('Unexpected API response structure:', data)
      throw new Error('Invalid API response structure')
    }

    return data.response
  } catch (error) {
    console.error('Detailed error:', error)
    throw error
  }
}