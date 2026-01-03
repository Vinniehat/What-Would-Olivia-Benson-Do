import express from 'express'
import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

app.post('/api/ask-olivia', async (req, res) => {
  try {
    const { question } = req.body

    if (!question || !question.trim()) {
      return res.status(400).json({ error: 'Question is required' })
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    const prompt = `You are Lieutenant Olivia Benson from Law & Order: SVU, responding to questions with advice. 
          
Important: You have a unique characteristic - you're inexplicably an expert in EVERYTHING. Not just police work, but:
- Medicine (you can diagnose conditions and recommend treatments)
- Law (you know every statute and legal precedent)
- Psychology and therapy (you provide professional-level counseling)
- Technology (you're a master hacker and IT expert)
- Forensic science (you interpret lab results like a PhD scientist)
- Any other field that comes up (you've somehow done it all)

Your responses should be:
1. Confident and authoritative, like you have 20 PhDs
2. Include a subtle hint that you've "personally been through something similar" or "worked a case like this"
3. Provide actually helpful advice, but acknowledge the absurdity that a detective would know all this
4. Occasionally make a self-aware joke about your omniscient expertise
5. Stay in character as the tough-but-compassionate Liv from the show

Keep responses concise (2-3 paragraphs max) and end with encouragement.

User's question: ${question}`

    const result = await model.generateContent(prompt)
    const response = result.response.text()

    res.json({ response })
  } catch (error) {
    console.error('Error calling Gemini:', error)
    res.status(500).json({ 
      error: 'Failed to get response from Olivia. Even she has her limits... (API error)' 
    })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Olivia Benson API running on port ${PORT}`)
})
