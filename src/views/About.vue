<template>
  <div class="about-page">
    <section class="about-hero">
      <h2>About This Project</h2>
    </section>

    <section class="about-content">
      <div class="content-card">
        <h3>The Inspiration</h3>
        <p>
          Lieutenant Olivia Benson has been on SVU for so long that she's apparently had time to 
          get medical degrees, law degrees, therapy licenses, computer science certifications, 
          and a PhD in "somehow having personal experience with every single crime that walks 
          through that door."
        </p>
        <p>
          The writers have blessed Liv with the supernatural ability to be an expert in literally 
          everything. Need someone to defuse a bomb? Liv's got it. Complex neurosurgery explanation? 
          Liv can break it down. Obscure legal precedent from 1987? Liv memorized it during her lunch break. 
          She's not just a cop—she's a one-woman Wikipedia with a badge.
        </p>
      </div>

      <div class="content-card">
        <h3>Liv's Inexplicable Superpowers</h3>
        <div class="principles-list">
          <div class="principle-item">
            <span class="principle-icon">🎓</span>
            <div>
              <h4>Expert in Everything</h4>
              <p>Medicine, law, psychology, technology, linguistics, martial arts—if it exists, Liv is somehow certified in it.</p>
            </div>
          </div>
          <div class="principle-item">
            <span class="principle-icon">🔮</span>
            <div>
              <h4>Psychic Detective Powers</h4>
              <p>Walks into a room and immediately knows everyone's trauma, medical history, and deepest secrets. It's called "detective work" but it's basically mind reading.</p>
            </div>
          </div>
          <div class="principle-item">
            <span class="principle-icon">💪</span>
            <div>
              <h4>Unlimited Job Responsibilities</h4>
              <p>Why have specialists when Liv can do forensics, legal counsel, therapy sessions, and tactical operations all before lunch?</p>
            </div>
          </div>
          <div class="principle-item">
            <span class="principle-icon">🎭</span>
            <div>
              <h4>Lived Every Possible Experience</h4>
              <p>"I know what you're going through because I/my mother/my brother/my cousin's friend also went through this exact highly specific situation."</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content-card">
        <h3>Our Mission</h3>
        <p>
          When faced with ANY problem—medical emergency, legal crisis, tech malfunction, existential 
          dread, car trouble, tax questions, or alien invasion—just ask yourself: <em>"What would Olivia Benson do?"</em>
        </p>
        <p>
          The answer is: she'd somehow already be an expert in that exact field, have personal experience 
          with that specific issue, know the perfect person to call, AND solve it while maintaining 
          perfect hair and delivering an emotional monologue.
        </p>
      </div>

      <div class="content-card impact-card">
        <h3>But Seriously Though...</h3>
        <p>
          While we joke about Liv's omniscient superpowers, <strong>Mariska Hargitay</strong> (the actual human) 
          is genuinely amazing and founded the <strong>Joyful Heart Foundation</strong> to help survivors of 
          sexual assault, domestic violence, and child abuse. She doesn't need to be an expert in everything 
          to make a real difference.
        </p>
        <p>
          Unlike TV Liv who has apparently mastered every profession known to humanity, real change comes 
          from actual experts working together. But hey, if you're ever in a situation where you need a 
          cop-therapist-doctor-lawyer-hacker, you know who to call. 📞
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
