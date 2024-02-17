<template>
  <div>
    <div class="flex flex-row">
      <div class="w-1/2 flex justify-start items-center">
        <div class="flex justify-center items-center">
          <p class="mt-0 mb-1 font-bold uppercase text-slate-400">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
        </div>
      </div>
      <div class="w-1/2 flex justify-end items-end">
        <div class="flex justify-center items-center">
          <h5 class="text-black pr-10">3 min</h5>
          <img alt="point image" class="mr-3 h-6 sm:h-5" src="~/assets/images/points-icon.png" />
          <h5 class="text-black">10</h5>
        </div>
      </div>
    </div>
    <h2 class="mt-4">{{ lesson.title }}</h2>
    <!--    <div class="flex mt-2 mb-8 space-x-4">-->
    <!--      <NuxtLink-->
    <!--        v-if="lesson.sourceUrl"-->
    <!--        class="font-normal text-gray-500 text-md"-->
    <!--        :to="lesson.sourceUrl"-->
    <!--      >-->
    <!--        Download Source Code-->
    <!--      </NuxtLink>-->
    <!--      <NuxtLink-->
    <!--        v-if="lesson.downloadUrl"-->
    <!--        class="font-normal text-gray-500 text-md"-->
    <!--        :to="lesson.downloadUrl"-->
    <!--      >-->
    <!--        Download Video-->
    <!--      </NuxtLink>-->
    <!--    </div>-->
    <VideoPlayer v-if="lesson.videoId" :video-id="lesson.videoId" />
    <p>{{ lesson.text }}</p>

    <div class="mt-9">
      <LessonCompleteButton :model-value="isLessonComplete" @update:model-value="toggleComplete" />
    </div>
  </div>
</template>

<script setup>
import { useLocalStorage } from '@vueuse/core'

const course = useCourse()
const route = useRoute()

const chapter = computed(() => {
  return course.chapters.find((chapter) => chapter.slug === route.params.chapterSlug)
})

const lesson = computed(() => {
  return chapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug)
})

const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`
})

useHead({
  title,
})

const progress = useLocalStorage('progress', [])

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false
  }

  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false
  }

  return progress.value[chapter.value.number - 1][lesson.value.number - 1]
})

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = []
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value
}
</script>
