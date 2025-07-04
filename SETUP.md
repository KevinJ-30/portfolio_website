# Gemini API Setup Guide

## Quick Setup

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Create Environment File

Create a file called `.env.local` in the portfolio directory with:

```
GEMINI_API_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with the API key you copied from step 1.

### 3. Test the Setup

Run the full development server:

```bash
npm run dev:full
```

This will:
1. Build your React app
2. Start the Express server on port 3000
3. Serve both the frontend and handle API calls

### 4. Test the Chatbot

1. Open your browser to `http://localhost:3000`
2. Navigate to the chatbot section
3. Try sending a message

## Troubleshooting

### "API key not configured" error
- Make sure you created the `.env.local` file
- Make sure the API key is correct
- Restart the server after adding the environment variable

### "Gemini API error" 
- Check that your API key is valid
- Make sure you have billing set up in Google AI Studio
- Check the console for detailed error messages

### CORS errors
- The server is configured to handle CORS automatically
- If you're still getting CORS errors, make sure you're using the full development server (`npm run dev:full`)

## Production Deployment

For production on Vercel:

1. Set the `GEMINI_API_KEY` environment variable in your Vercel dashboard
2. Deploy using `vercel --prod`
3. The API routes will automatically work with the Vercel serverless functions

## Security Notes

- The API key is never exposed to the frontend
- All API calls go through your secure backend
- The `.env.local` file should be in your `.gitignore` (it already is) 