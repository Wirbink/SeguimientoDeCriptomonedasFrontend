<template>
    <div>
      <Navbar />
      <main class="container mx-auto py-8">
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script setup>
  import Navbar from '../layout/AppNavbar.vue';
  </script>
  
  <style scoped>
  
  </style>