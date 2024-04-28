<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <div class="dynamic-routing">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <router-view name="leftSidebar"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
