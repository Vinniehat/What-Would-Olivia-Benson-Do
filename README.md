# What Would Olivia Benson Do?

A humorous website celebrating the fact that Lieutenant Olivia Benson from Law & Order: SVU is inexplicably an expert in literally everything.

## Setup

1. Install dependencies:
```sh
npm install
```

2. Create a `.env` file in the root directory:
```sh
cp .env.example .env
```

3. Add your Google Gemini API key to the `.env` file:
```
GEMINI_API_KEY=your_actual_api_key_here
PORT=3001
```

4. Run both the frontend and backend:
```sh
npm run dev:full
```

Or run them separately:
```sh
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend API
npm run server
```

## Features

- **Home Page**: Overview of Olivia's omniscient expertise
- **Ask Olivia**: Ask any question and get advice from the expert-in-everything
- **About Page**: Learn about the inspiration behind the site

## Tech Stack

- Vue 3 + Vite
- Express.js Backend
- Google Gemini API
- Vue Router

## Getting a Gemini API Key

1. Go to [ai.google.dev](https://ai.google.dev/)
2. Click "Get API Key in Google AI Studio"
3. Sign in with your Google account
4. Create a new API key
5. Copy it to your `.env` file

**Note**: Gemini API has a free tier with generous limits!

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
