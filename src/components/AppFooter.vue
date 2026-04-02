<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        🎮 GameStore
        <span>© {{ new Date().getFullYear() }}</span>
      </div>

      <div class="footer-links">
        <a href="https://rawg.io/apidocs" target="_blank"> RAWG API </a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #030712;
  border-top: 1px solid #1f2937;
  margin-top: 40px;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left {
  color: #9ca3af;
  font-size: 13px;
}

.footer-left span {
  margin-left: 8px;
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-links a {
  color: #6b7280;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #e5e7eb;
}
</style>
