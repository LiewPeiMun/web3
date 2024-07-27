<template>
  <header>
    <div class="header-content">
      <a href="/" class="logo">EDUCHAINAID</a>
      <div class="hamburger-menu" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav :class="{ 'show-nav': isNavVisible }">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/causes">Causes</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div class="justify-right">
      <button class="donate-button">Donate Now</button>
      <img :src="'src/assets/images/login.png'" alt="login" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isNavVisible = ref(false)

const toggleNav = () => {
  isNavVisible.value = !isNavVisible.value
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.justify-right {
  display: flex;
  align-items: center; /* Align items vertically center */
  gap: 10px; /* Optional: Add some space between button and icon */
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

img{
  width: 30px;
  height: 30px
}

.justify-right{
  justify-content: flex-end !important; 
}

nav {
  display: none;
}

nav.show-nav {
  display: block;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}

nav.show-nav ul {
  transform: translateY(0);
}

nav li {
  margin: 10px 0;
  text-align: center;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px 20px;
  display: block;
}

.donate-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.donate-button:hover {
  background-color: #0056b3;
}

.hamburger-menu {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.hamburger-menu span {
  display: block;
  width: 30px;
  height: 4px;
  background-color: #333;
  margin: 4px 0;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.hamburger-menu.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-menu.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 890px) {
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hamburger-menu {
    display: flex;
  }

  nav ul {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  nav.show-nav ul {
    transform: translateY(0);
  }

  .donate-button {
    display: none;
  }
}

@media (min-width: 891px) {
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: block;
  }

  nav ul {
    flex-direction: row;
    position: static;
    background-color: transparent;
    box-shadow: none;
    transform: none;
    transition: none;
  }

  nav li {
    margin: 0 10px;
  }

  .hamburger-menu {
    display: none;
  }

  .donate-button {
    display: inline-block;
  }
}
</style>
