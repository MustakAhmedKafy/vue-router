<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <router-view name="leftSidebar"></router-view>
  </div>
</template>

<style scoped></style>
