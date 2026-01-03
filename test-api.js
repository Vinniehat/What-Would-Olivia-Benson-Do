import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function testKey() {
  try {
    // List available models
    console.log('Fetching available models...')
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + process.env.GEMINI_API_KEY)
    const data = await response.json()
    
    if (data.models) {
      console.log('✅ Available models:')
      data.models.forEach(model => {
        console.log(`  - ${model.name}`)
      })
      
      // Try the first available model
      const modelToTest = 'gemini-2.5-flash'
      console.log(`\nTrying model: ${modelToTest}`)
      const model = genAI.getGenerativeModel({ model: modelToTest })
      const result = await model.generateContent('Say hello')
      console.log('✅ API Key is valid!')
      console.log('Response:', result.response.text())
    } else {
      console.error('❌ Error:', data)
    }
  } catch (error) {
    console.error('❌ API Key test failed:', error.message)
    console.error('Full error:', error)
  }
}

testKey()
