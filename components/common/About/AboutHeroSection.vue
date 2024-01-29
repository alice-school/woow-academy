<script lang="ts" setup></script>

<template>
  <div class="absolute top-20 about-hero-section w-full">
    <div class="about-hero-section-content w-full lg:flex items-center">
      <div class="ml-60 rounded-lg w-64 h-64">
        <img alt="profile image" class="profile-image" src="https://avatars.githubusercontent.com/u/50085447?v=4" />
      </div>
      <div class="m-5 about-hero-section-details-sec text-white lg:flex lg:flex-col justify-center">
        <h1 class="font-bold text-xl">Madhusha Prasad Silva</h1>
        <p>20 Following 17 Followers</p>
        <p>* 456464656 XP</p>
        <p>Software Developer & Public speaker</p>
        <p>Iran · Lvl 16</p>
        <div>
          <ul>
            <li class="list-none inline-block pl-2 pr-4">Github</li>
            <li class="list-none inline-block p-4">Linkedin</li>
            <li class="list-none inline-block p-4">stackoverflow</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-hero-section {
  width: 100%;
  height: 300px;
  background-color: #707ef8;
}

.about-hero-section-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  justify-content: left;
  height: 90%;
}

.about-hero-section-content > .about-hero-section-details-sec p,
h1 {
  padding: 10px;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-position: 50% 50%;
  background-size: cover;
}
</style>
