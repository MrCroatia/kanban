<script setup lang="ts">
import Header from './components/Header.vue';
import KanbanBoard from './components/KanbanBoard.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow p-4 md:p-6">
      <KanbanBoard />
    </main>
    <Footer />
  </div>
</template>
