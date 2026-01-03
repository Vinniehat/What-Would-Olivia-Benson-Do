<template>
  <header class="site-header">
    <div class="header-container">
      <div class="header-left">
        <div class="headshot-container">
          <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2024/10/mariska-hargitay-as-olivia-benson-in-law-order_-svu.jpg?w=1200&h=675&fit=crop" alt="Olivia Benson" class="headshot">
        </div>
        <div class="logo">
          <div class="law-order-text">LAW & ORDER</div>
          <div class="svu-text">WWOBD UNIT</div>
          <div class="subtitle">What Would Olivia Benson Do?</div>
        </div>
      </div>
      <nav class="navigation">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/ask" class="nav-link">Ask Olivia</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.site-header {
  background: #000000;
  color: #ffffff;
  padding: 2rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.9);
  border-bottom: 4px solid #c8102e;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.headshot-container {
  flex-shrink: 0;
}

.headshot {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #c8102e;
  object-fit: cover;
  box-shadow: 0 0 20px rgba(200, 16, 46, 0.5);
}

.logo {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.law-order-text {
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.3em;
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Arial Black', 'Arial Bold', sans-serif;
}

.svu-text {
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  color: #c8102e;
  text-transform: uppercase;
  font-family: 'Arial Black', 'Arial Bold', sans-serif;
  margin-top: -0.2rem;
}

.subtitle {
  font-size: 0.85rem;
  color: #cccccc;
  letter-spacing: 0.05em;
  margin-top: 0.3rem;
  font-style: italic;
}

.navigation {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-link:hover {
  background: #c8102e;
  border-color: #c8102e;
}

.nav-link.router-link-active {
  background: #8b0000;
  border-color: #c8102e;
  font-weight: 900;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    text-align: center;
  }
  
  .header-left {
    flex-direction: column;
    align-items: center;
  }
  
  .headshot {
    width: 80px;
    height: 80px;
  }
  
  .law-order-text {
    font-size: 1.2rem;
  }
  
  .svu-text {
    font-size: 1.3rem;
  }
  
  .navigation {
    gap: 1rem;
  }
}
</style>
