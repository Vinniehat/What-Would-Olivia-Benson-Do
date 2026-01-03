<template>
  <header class="site-header">
    <div class="header-container">
      <div class="logo">
        <h1>What Would Olivia Benson Do?</h1>
      </div>
      <nav class="navigation">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.site-header {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  color: #e5e5e5;
  padding: 1.5rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid #16213e;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.logo h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.navigation {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #e5e5e5;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.nav-link:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: #8b5cf6;
}

.nav-link.router-link-active {
  background: rgba(139, 92, 246, 0.3);
  border-color: #8b5cf6;
  font-weight: 600;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    text-align: center;
  }
  
  .logo h1 {
    font-size: 1.5rem;
  }
  
  .navigation {
    gap: 1rem;
  }
}
</style>
