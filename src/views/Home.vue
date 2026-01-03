<template>
  <div class="home-page">
    <section class="hero">
      <h2>Welcome to What Would Olivia Benson Do?</h2>
      <p class="tagline">She's not just a detective—she's a therapist, doctor, lawyer, and expert in literally every field imaginable. Because apparently one job wasn't enough.</p>
    </section>

    <section class="content">

      <div class="scenarios">
        <h3>Common Scenarios</h3>
        <div class="scenario-grid">
          <div class="scenario-card">
            <h4>🩺 Need Medical Advice?</h4>
            <p>Don't call a doctor—Liv will diagnose you in the interrogation room and somehow know exactly which medications you need. Is she board certified? Who cares!</p>
          </div>
          <div class="scenario-card">
            <h4>🧠 Need Therapy?</h4>
            <p>Why see a licensed therapist when Liv can psychoanalyze your childhood trauma AND arrest the perp in under 42 minutes?</p>
          </div>
          <div class="scenario-card">
            <h4>⚖️ Legal Question?</h4>
            <p>Never mind the lawyers—Liv knows every law, statute, and loophole. She'll argue your case AND perform the arrest. Forget the DA! Multitasking queen.</p>
          </div>
          <div class="scenario-card">
            <h4>🔬 Science Problem?</h4>
            <p>Lab results taking too long? Liv will interpret the DNA evidence herself and explain complex forensics like she has three PhDs.</p>
          </div>
          <div class="scenario-card">
            <h4>🌍 Literally Anything Else?</h4>
            <p>Nuclear physics? Bomb defusial? Ancient Greek? Astronaut training? Liv's done it all and probably taught a masterclass on it.</p>
          </div>
        </div>
      </div>

      <div class="quote-section">
        <blockquote>
          "I'm a cop. And a therapist. And a doctor. And a lawyer. And somehow I've lived through every trauma but I'm still fine. Also I can speak 47 languages."
          <footer>— Olivia Benson (probably)</footer>
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
