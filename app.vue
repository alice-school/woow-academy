<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup></script>
<style>
:root {
  --darkgreen: rgba(24, 96, 73, 1);
  --eden: rgba(36, 113, 88, 1);
  --tradewind: rgba(106, 178, 155, 1);
  --dawnpink: rgba(228, 213, 199, 0.5);
  --almondfrost: rgba(149, 135, 122, 1);
  --gold: rgba(255, 214, 0, 1);
  --gulfblue: rgba(54, 58, 89, 1);
  --selectiveyellow: rgba(255, 188, 0, 1);
  --high-light-text-yellow: rgba(246, 233, 200, 0.41);
  --oceanBlue-input: linear-gradient(180deg, rgba(30, 64, 175, 0.71) 50.99%, rgb(23, 37, 84) 100%);

  --font-poppins: Poppins;

  /* font sizes */
  --font-size-xs: 0.75rem;
  --font-size-base: 1rem;

  /* Colors */
  --color-white: #fff;
  --color-black: #000;
  --color-gray-100: #1c1c1c;
  --color-gray-200: rgba(255, 255, 255, 0.52);
  --color-gray-300: rgba(255, 255, 255, 0.21);
  --color-lavender-100: #f0edff;
  --color-lavender-200: #d6d4e6;
  --color-lavender-300: rgba(214, 212, 230, 0.09);
  --color-dimgray: #525252;

  /* Gaps */
  --gap-mid: 1.06rem;
  --gap-7xs: 0.38rem;

  /* Paddings */
  --padding-xl: 1.25rem;
  --padding-2xs: 0.69rem;
  --padding-8xs: 0.31rem;
  --padding-mid: 1.06rem;
  --padding-sm: 0.88rem;
  --padding-lg: 1.13rem;
  --padding-103xl: 7.63rem;

  /* Border radiuses */
  --br-base: 16px;
  --br-27xl: 46px;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: white;
  padding-right: 10px;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: linear-gradient(to left, #172554 -5.84%, #1e40af 106.73%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  font-family: var(--font-poppins) !important;
  font-style: normal;
  line-height: normal;
}
</style>
