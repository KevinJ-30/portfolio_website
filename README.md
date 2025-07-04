# Kevin Jacob's Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite, featuring an AI-powered chatbot using Google's Gemini API.

## Features

- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **AI Chatbot**: Powered by Google's Gemini API for interactive conversations
- **Responsive Design**: Works seamlessly across all devices
- **Fast Performance**: Optimized with Vite for lightning-fast builds

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Gemini API

1. Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a `.env.local` file in the root directory with:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

### 3. Development

For development with hot reload:
```bash
npm run dev
```

For full-stack development (includes API server):
```bash
npm run dev:full
```

### 4. Production Build

```bash
npm run build
npm start
```

## API Configuration

The chatbot uses a secure backend API that keeps your Gemini API key safe. The API is implemented as:
- **Development**: Express.js server (`server.js`)
- **Production**: Vercel serverless functions (`api/chat.ts`)

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file handles routing and API configuration automatically.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
