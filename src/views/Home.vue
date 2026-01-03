<template>
  <div class="home-page">
    <section class="hero">
      <h2>Welcome to What Would Olivia Benson Do?</h2>
      <p class="tagline">Channeling strength, compassion, and justice in everyday decisions</p>
    </section>

    <section class="content">
      <div class="intro-card">
        <h3>🎯 The Olivia Benson Approach</h3>
        <p>
          Lieutenant Olivia Benson, the iconic character from Law & Order: SVU, represents 
          unwavering dedication to justice, empathy for victims, and the courage to stand 
          up for what's right. This site helps you navigate life's challenges with her wisdom.
        </p>
      </div>

      <div class="scenarios">
        <h3>Common Scenarios</h3>
        <div class="scenario-grid">
          <div class="scenario-card">
            <h4>🤝 Workplace Conflict</h4>
            <p>Address issues directly with empathy, document everything, and advocate for fair treatment.</p>
          </div>
          <div class="scenario-card">
            <h4>💪 Standing Up for Others</h4>
            <p>Be the voice for those who can't speak up. Your support can make all the difference.</p>
          </div>
          <div class="scenario-card">
            <h4>⚖️ Ethical Dilemmas</h4>
            <p>Choose integrity over convenience. The right path isn't always the easiest.</p>
          </div>
          <div class="scenario-card">
            <h4>❤️ Self-Care</h4>
            <p>Even heroes need rest. Take care of yourself so you can help others effectively.</p>
          </div>
        </div>
      </div>

      <div class="quote-section">
        <blockquote>
          "I'm a cop. I have faith in justice."
          <footer>— Olivia Benson</footer>
        </blockquote>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  min-height: calc(100vh - 200px);
}

.hero {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
  color: #e5e5e5;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 3px solid #8b5cf6;
  box-shadow: 0 4px 30px rgba(139, 92, 246, 0.3);
}

.hero h2 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.tagline {
  font-size: 1.3rem;
  margin: 0;
  opacity: 0.95;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
}

.intro-card {
  background: #1a1a2e;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: 3rem;
  border: 1px solid #2d2d44;
}

.intro-card h3 {
  color: #a78bfa;
  margin-top: 0;
  font-size: 1.8rem;
}

.intro-card p {
  color: #d1d5db;
}

.scenarios {
  margin-bottom: 3rem;
}

.scenarios h3 {
  color: #c4b5fd;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.scenario-card {
  background: #1a1a2e;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 1px solid #2d2d44;
}

.scenario-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 30px rgba(139, 92, 246, 0.4);
  border-color: #8b5cf6;
}

.scenario-card h4 {
  color: #a78bfa;
  margin-top: 0;
  font-size: 1.3rem;
}

.scenario-card p {
  color: #d1d5db;
}

.quote-section {
  text-align: center;
  padding: 3rem 2rem;
}

blockquote {
  font-size: 1.5rem;
  font-style: italic;
  color: #e5e5e5;
  margin: 0;
  padding: 2rem;
  background: #1a1a2e;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  border-left: 5px solid #8b5cf6;
  border: 1px solid #2d2d44;
  border-left-width: 5px;
  border-left-color: #8b5cf6;
}

blockquote footer {
  margin-top: 1rem;
  font-size: 1rem;
  font-style: normal;
  color: #9ca3af;
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 2rem;
  }
  
  .tagline {
    font-size: 1.1rem;
  }
  
  .scenario-grid {
    grid-template-columns: 1fr;
  }
}
</style>
