<template>
  <div class="about-page">
    <section class="about-hero">
      <h2>About This Project</h2>
    </section>

    <section class="about-content">
      <div class="content-card">
        <h3>The Inspiration</h3>
        <p>
          Lieutenant Olivia Benson, portrayed brilliantly by Mariska Hargitay on 
          <strong>Law & Order: Special Victims Unit</strong>, has become more than just 
          a TV character. She represents resilience, compassion, and unwavering commitment 
          to justice that resonates with millions of viewers worldwide.
        </p>
        <p>
          For over two decades, Olivia Benson has shown us how to lead with empathy while 
          maintaining strength, how to fight for the vulnerable, and how to never give up 
          on doing what's right—even when it's difficult.
        </p>
      </div>

      <div class="content-card">
        <h3>Core Principles</h3>
        <div class="principles-list">
          <div class="principle-item">
            <span class="principle-icon">🛡️</span>
            <div>
              <h4>Protect the Vulnerable</h4>
              <p>Always stand up for those who cannot stand up for themselves.</p>
            </div>
          </div>
          <div class="principle-item">
            <span class="principle-icon">💙</span>
            <div>
              <h4>Lead with Empathy</h4>
              <p>Understand others' perspectives and show genuine compassion.</p>
            </div>
          </div>
          <div class="principle-item">
            <span class="principle-icon">⚡</span>
            <div>
              <h4>Take Action</h4>
              <p>Don't just observe injustice—actively work to make things right.</p>
            </div>
          </div>
          <div class="principle-item">
            <span class="principle-icon">🌟</span>
            <div>
              <h4>Maintain Integrity</h4>
              <p>Do the right thing even when no one is watching.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content-card">
        <h3>Our Mission</h3>
        <p>
          This website serves as a guide to help navigate life's challenges with the same 
          courage, empathy, and determination that Olivia Benson demonstrates every day. 
          Whether you're facing a difficult decision, standing up against injustice, or 
          simply trying to be a better person, ask yourself: <em>"What would Olivia Benson do?"</em>
        </p>
      </div>

      <div class="content-card impact-card">
        <h3>Real-World Impact</h3>
        <p>
          Beyond the screen, the character has inspired real change. The <strong>Joyful Heart Foundation</strong>, 
          founded by Mariska Hargitay, works to heal, educate, and empower survivors of sexual assault, 
          domestic violence, and child abuse.
        </p>
        <p>
          This reminds us that the principles we admire in fiction can translate into meaningful 
          action in the real world.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-page {
  min-height: calc(100vh - 200px);
}

.about-hero {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
  color: #e5e5e5;
  padding: 3rem 2rem;
  text-align: center;
  border-bottom: 3px solid #8b5cf6;
  box-shadow: 0 4px 30px rgba(139, 92, 246, 0.3);
}

.about-hero h2 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.content-card {
  background: #1a1a2e;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  border: 1px solid #2d2d44;
}

.content-card h3 {
  color: #a78bfa;
  margin-top: 0;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.content-card p {
  line-height: 1.8;
  color: #d1d5db;
  margin-bottom: 1rem;
}

.content-card p:last-child {
  margin-bottom: 0;
}

.principles-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.principle-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.principle-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.principle-item h4 {
  color: #a78bfa;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.principle-item p {
  margin: 0;
  color: #9ca3af;
}

.impact-card {
  background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
  border-left: 5px solid #8b5cf6;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
}

@media (max-width: 768px) {
  .about-hero h2 {
    font-size: 2rem;
  }
  
  .principle-item {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .principle-icon {
    font-size: 2rem;
  }
}
</style>
