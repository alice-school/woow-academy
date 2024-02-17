<template>
  <div class="w-full h-screen">
    <!--    profile page header start-->
    <div
      class="flex lg:flex-row md:flex-col:flex-col sm:w-full h-[400px] bg-gradient-to-r from-blue-800 to-blue-950"
    ></div>
    <div class="flex flex-col items-center w-full h-auto min-h-screen p-3 absolute top-16">
      <div class="mb-12 prose">
        <h1 class="text-white">
          <span class="font-headings text-2xl">
            Course:
            <span class="font-bold">Mastering Nuxt 3</span>
          </span>
        </h1>
      </div>

      <div class="flex flex-row justify-center flex-grow">
        <div class="prose mr-4 p-8 bg-white rounded-md min-w-[40ch] max-w-[30ch] flex flex-col shadow">
          <h3 class="text-xl font-bold">Chapters</h3>
          <div v-for="chapter in chapters" :key="chapter.slug" class="space-y-1 mb-4 flex flex-col">
            <h4 class="mt-3 font-semibold">{{ chapter.title }}</h4>
            <NuxtLink
              v-for="(lesson, index) in chapter.lessons"
              :key="lesson.slug"
              :class="{
                'text-blue-500 py-3': lesson.path === $route.fullPath,
                'text-gray-600 py-3': lesson.path !== $route.fullPath,
              }"
              :to="lesson.path"
              class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
            >
              <span class="text-gray-500">{{ index + 1 }}.</span>
              <span>{{ lesson.title }}</span>
            </NuxtLink>
          </div>
        </div>

        <div class="prose p-12 bg-white rounded-md w-[85ch] shadow">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { chapters } = useCourse()
definePageMeta({
  layout: 'user',
})
console.log(chapters)
</script>

<style scoped>
.cardShadow {
}
</style>
