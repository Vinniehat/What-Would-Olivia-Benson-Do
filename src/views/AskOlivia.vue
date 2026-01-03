<template>
  <div class="ask-olivia-page">
    <section class="ask-hero">
      <h2>Ask Olivia Benson</h2>
      <p class="tagline">She's an expert in everything. Seriously, ask her anything.</p>
    </section>

    <section class="ask-content">
      <div class="question-card">
        <h3>What's Your Situation?</h3>
        <textarea
          v-model="userQuestion"
          placeholder="Type your question here... (e.g., 'I'm having trouble at work', 'Need advice on a difficult situation', etc.)"
          class="question-input"
          rows="5"
          :disabled="isLoading"
        ></textarea>
        <button 
          @click="askOlivia" 
          class="ask-button"
          :disabled="isLoading || !userQuestion.trim()"
        >
          <span v-if="!isLoading">Ask Olivia</span>
          <span v-else>Consulting the expert in everything...</span>
        </button>
      </div>

      <div v-if="response" class="response-card">
        <div class="response-header">
          <img src="https://placehold.co/60x60/1a1a1a/white?text=OB" alt="Olivia" class="response-avatar">
          <div>
            <h4>Lieutenant Olivia Benson</h4>
            <p class="badge">Expert in Literally Everything</p>
          </div>
        </div>
        <div class="response-content">
          {{ response }}
        </div>
      </div>

      <div v-if="error" class="error-card">
        <p>{{ error }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userQuestion = ref('')
const response = ref('')
const error = ref('')
const isLoading = ref(false)

const askOlivia = async () => {
  if (!userQuestion.value.trim()) return

  isLoading.value = true
  error.value = ''
  response.value = ''

  try {
    // Note: This is a placeholder. You'll need to set up your own API endpoint
    // that calls ChatGPT with your API key for security reasons
    const res = await fetch('/api/ask-olivia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: userQuestion.value,
      }),
    })

    if (!res.ok) {
      throw new Error('Failed to get response from Olivia')
    }

    const data = await res.json()
    response.value = data.response
  } catch (err) {
    error.value = 'Even Olivia can\'t solve this one right now. Try again later! (Hint: You need to set up an API endpoint at /api/ask-olivia)'
    console.error('Error:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.ask-olivia-page {
  min-height: calc(100vh - 200px);
}

.ask-hero {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
  color: #e5e5e5;
  padding: 3rem 2rem;
  text-align: center;
  border-bottom: 3px solid #c8102e;
  box-shadow: 0 4px 30px rgba(200, 16, 46, 0.3);
}

.ask-hero h2 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.tagline {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.95;
  font-style: italic;
}

.ask-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.question-card {
  background: #1a1a2e;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  border: 1px solid #2d2d44;
}

.question-card h3 {
  color: #c8102e;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.question-input {
  width: 100%;
  padding: 1rem;
  background: #0a0a0a;
  border: 2px solid #2d2d44;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  resize: vertical;
  margin-bottom: 1rem;
  transition: border-color 0.3s ease;
}

.question-input:focus {
  outline: none;
  border-color: #c8102e;
}

.question-input::placeholder {
  color: #666;
}

.question-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.ask-button {
  width: 100%;
  padding: 1rem 2rem;
  background: #c8102e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ask-button:hover:not(:disabled) {
  background: #a00d25;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(200, 16, 46, 0.4);
}

.ask-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.response-card {
  background: #1a1a2e;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border: 2px solid #c8102e;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.response-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #2d2d44;
}

.response-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #c8102e;
  box-shadow: 0 0 15px rgba(200, 16, 46, 0.5);
}

.response-header h4 {
  margin: 0;
  color: #ffffff;
  font-size: 1.3rem;
}

.badge {
  margin: 0.25rem 0 0 0;
  color: #c8102e;
  font-size: 0.9rem;
  font-style: italic;
}

.response-content {
  color: #e5e5e5;
  line-height: 1.8;
  font-size: 1.05rem;
  white-space: pre-wrap;
}

.error-card {
  background: #2e1a1a;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #c8102e;
  color: #ff6b6b;
  text-align: center;
}

@media (max-width: 768px) {
  .ask-hero h2 {
    font-size: 2rem;
  }

  .tagline {
    font-size: 1rem;
  }

  .question-card,
  .response-card {
    padding: 1.5rem;
  }

  .response-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>
