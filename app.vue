<template>
  <Default>
    <NuxtPage />
  </Default>
</template>
<script lang="ts" setup>
import Default from '~/layouts/default.vue'
</script>
<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: white;
  padding-right: 10px;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #8dc9f6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
}
</style>
