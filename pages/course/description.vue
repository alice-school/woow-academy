<script lang="ts" setup>
const course = useCourse()
const route = useRoute()

const title = computed(() => {
  return course.title
})
const description = computed(() => {
  return course.description
})

const courseImage = computed(() => {
  return course.courseImage
})

useHead({
  title,
})
</script>

<template>
  <div>
    <p class="mt-0 mb-1 font-bold uppercase text-2xl text-center">{{ title }}</p>
    <h2 class="my-10 text-justify">
      {{ description }}
    </h2>
    <img :src="courseImage" alt="courseImage" />
  </div>
</template>

<style scoped></style>
