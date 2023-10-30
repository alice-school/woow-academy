<script lang="ts" setup></script>

<template>
  <div class="main-header-div w-full lg:flex items-center justify-between">
    <div class="logo-section">
      <p class="font-bold text-xl text-white p-4">
        WooW <br />
        Space
      </p>
    </div>
    <div class="navigation-section">
      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>Code Playground</li>
        <li>Top Learners</li>
        <li>Blog</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <div class="pr-8 lg:flex items-center">
      <div class="p-4">
        <img alt="profile image" class="inline-block" src="~/assets/images/Group.jpg" />
        <p class="p-4 inline-block text-white text-center">46467</p>
      </div>
      <div class="main-profile">
        <img
          alt="profile image"
          class="profile-image"
          src="https://avatars.githubusercontent.com/u/50085447?s=96&v=4"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-header-div {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/rectangle-113.svg);
  background-repeat: no-repeat;
  background-position: 80% 90%;
  background-size: cover;
}

.navigation-section ul li {
  display: inline-block;
  padding: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
}

.main-profile {
  background-color: bisque;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 2px solid #ffffff;
}

.profile-image {
  width: fit-content;
  height: fit-content;
  border-radius: 100%;
  background-position: 50% 50%;
  background-size: cover;
}
</style>
