<template>
  <label
    class="rounded text-white font-bold py-2 px-4 cursor-pointer"
    :class="{
      btnComplete: modelValue,
      'bg-primaryDark': !modelValue,
    }"
  >
    <input type="checkbox" :value="modelValue" @input="() => $emit('update:modelValue', !modelValue)" class="hidden" />
    {{ modelValue ? 'Completed!' : 'Mark as complete' }}
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
::selection {
  display: none;
}

.btnComplete {
  background-color: #53e172;
}
</style>
