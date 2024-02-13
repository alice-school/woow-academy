<script lang="ts" setup>
import { useRouter } from 'vue-router'
import eye from '../assets/icons/eye.png'
import eyeSlash from '../assets/icons/eye-slash.png'
const router = useRouter()
const showPassword = ref(false)

definePageMeta({
  layout: 'default',
})

const userLoginForm = reactive({
  email: '',
  password: '',
})
const onSubmitLogin = () => {
  if (userLoginForm.email || userLoginForm.password) {
    console.log(userLoginForm)
    router.push('/profile')
  } else {
    console.log(userLoginForm)
    alert('Please input your user credentials')
  }
}
</script>

<template>
  <div class="login">
    <div class="rectangle-parent">
      <div class="frame-child" />
      <img alt="" class="frame-item" src="~/assets/images/rectangle-4@2x.png" />
      <div class="rectangle-group">
        <div class="frame-inner" />
        <h1 class="very-good-works-container">
          <p class="very-good">Very good</p>
          <p class="works-are">works are</p>
          <p class="waiting-for">waiting for</p>
          <p class="you-login">you Login</p>
          <p class="now">Now!!!</p>
        </h1>
        <img
          alt=""
          class="little-children-reading-a-book"
          loading="eager"
          src="~/assets/images/little-children-reading-a-book@2x.png"
        />
      </div>
      <button class="subtract-frame-wrapper">
        <div class="subtract-frame">
          <div class="subtract-frame-child" />
          <img alt="" class="thunderbolt-1-icon" src="~/assets/images/thunderbolt-1@2x.png" />
        </div>
      </button>
    </div>
    <img alt="" class="subtract-icon" loading="eager" src="~/assets/images/subtract.svg" />
    <form class="google-frame" @submit.prevent="onSubmitLogin" novalidate>
      <div class="create-account-prompt">
        <h1 class="login1">Login</h1>
        <div class="how-to-i">How to i get started lorem ipsum dolor at?</div>
      </div>
      <div class="login-frames">
        <div class="rectangle-container">
          <div class="rectangle-div" />
          <img alt="" class="google-login-icon" src="~/assets/images/google-login.svg" />
          <input class="username" placeholder="email" type="email" required v-model="userLoginForm.email" />
        </div>
        <div class="group-div">
          <div class="frame-child1" />
          <img alt="" class="frame-content-icon" src="~/assets/images/frame-1.svg" />
          <input
            class="password"
            placeholder="Password"
            :type="showPassword ? 'text' : 'password'"
            required
            v-model="userLoginForm.password"
          />
          <img
            alt="passwordView"
            class="frame-content-icon cursor-pointer"
            :src="showPassword ? eye : eyeSlash"
            @click="showPassword = !showPassword"
          />
        </div>
      </div>
      <div class="social-login-group">
        <button class="group-button">
          <span class="frame-child2" />
          <b class="login-now">Login Now</b>
        </button>
      </div>
      <div class="other-login-options">
        <div class="login-with-others-container">
          <b class="login2">Login</b>
          <span class="with-others"> with Others</span>
        </div>
      </div>
      <div class="login-frames1">
        <button class="rectangle-parent1">
          <div class="frame-child3" />
          <img alt="" class="google-1-icon" src="~/assets/images/google-1@2x.png" />
          <div class="login-with-google-container">
            <span class="login-with">Login with </span>
            <b class="google">google</b>
          </div>
        </button>
        <button class="rectangle-parent2">
          <div class="frame-child4" />
          <img alt="" class="facebook-1-icon" src="~/assets/images/facebook-1@2x.png" />
          <div class="login-with-facebook-container">
            <span class="login-with1">Login with </span>
            <b class="facebook">Facebook</b>
          </div>
        </button>
      </div>
      <div class="new-to-woow-container">
        <span class="new-to-woow">new to WooW Space? </span>
        <NuxtLink to="/signup" class="create-an-account">Create an account</NuxtLink>
      </div>
    </form>
    <h1 class="woow-space">
      <p class="woow">WooW</p>
      <p class="space">Space</p>
    </h1>
  </div>
</template>

<style scoped>
.frame-child {
  width: 42.69rem;
  position: relative;
  background: linear-gradient(246.75deg, rgba(30, 64, 175, 0.71) 50.99%, #172554);
  height: 48rem;
  display: none;
  max-width: 100%;
  z-index: 0;
}

.frame-item {
  width: 100%;
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
}

.frame-inner {
  height: 32.75rem;
  width: 25.75rem;
  position: relative;
  border-radius: var(--br-27xl);
  background-color: var(--color-gray-300);
  backdrop-filter: blur(13.6px);
  border: 1px solid var(--color-gray-200);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 0;
}

.very-good {
  margin: 0;
}

.works-are {
  margin: 0;
}

.waiting-for {
  margin: 0;
}

.you-login {
  margin: 0;
}

.now {
  margin: 0;
}

.very-good-works-container {
  margin: 0;
  height: 14.38rem;
  position: relative;
  font-size: inherit;
  line-height: 2.88rem;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  z-index: 3;
}

.little-children-reading-a-book {
  width: 24.44rem;
  position: absolute;
  margin: 0 !important;
  right: -6.37rem;
  bottom: 3.75rem;
  height: 14.63rem;
  object-fit: cover;
  z-index: 4;
}

.rectangle-group {
  width: 25.75rem;
  flex: 1;
  border-radius: var(--br-27xl);
  background-color: var(--color-gray-300);
  backdrop-filter: blur(13.6px);
  border: 1px solid var(--color-gray-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.63rem 1.94rem;
  position: relative;
  max-width: 100%;
  z-index: 2;
}

.subtract-frame-child {
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 50%;
  background-color: var(--color-white);
  width: 100%;
  height: 100%;
}

.thunderbolt-1-icon {
  position: absolute;
  top: 1.13rem;
  left: 1.19rem;
  width: 2.63rem;
  height: 2.63rem;
  object-fit: cover;
  z-index: 1;
}

.subtract-frame {
  height: 4.94rem;
  flex: 1;
  position: relative;
}

.subtract-frame-wrapper {
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  width: 4.94rem;
  margin: 0 !important;
  position: absolute;
  bottom: 13.75rem;
  left: 7.56rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.rectangle-parent {
  position: absolute;
  top: 0rem;
  right: 0;
  background: linear-gradient(246.75deg, rgba(30, 64, 175, 0.71) 50.99%, #172554);
  width: 50%;
  height: 48rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-103xl) var(--padding-xl) var(--padding-103xl) 1.31rem;
  box-sizing: border-box;
  max-width: 100%;
}

.subtract-icon {
  position: absolute;
  top: 30.63rem;
  left: 10rem;
  width: 22.75rem;
  height: 0.06rem;
  z-index: 1;
}

.login1 {
  margin: 0;
  width: 8.31rem;
  position: relative;
  font-size: 1.88rem;
  text-transform: uppercase;
  font-weight: 700;
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  padding-left: var(--padding-xl);
  padding-right: var(--padding-xl);
}

.how-to-i {
  position: relative;
  font-size: var(--font-size-base);
  font-family: var(--font-poppins);
  color: var(--color-dimgray);
  text-align: left;
}

.create-account-prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-sm);
  box-sizing: border-box;
  gap: 0.63rem;
  min-height: 3.75rem;
}

.rectangle-div {
  height: 3.25rem;
  width: 22.75rem;
  position: relative;
  border-radius: var(--br-base);
  background: linear-gradient(246.75deg, rgba(23, 37, 84, 0.15), rgba(23, 37, 84, 0.08) 49.48%, rgba(23, 37, 84, 0.15));
  display: none;
  max-width: 100%;
}

.google-login-icon {
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
}

.username {
  width: 100%;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs);
  background-color: transparent;
  height: 1.13rem;
  position: relative;
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  z-index: 1;
}

.rectangle-container {
  align-self: stretch;
  border-radius: var(--br-base);
  background: linear-gradient(246.75deg, rgba(23, 37, 84, 0.15), rgba(23, 37, 84, 0.08) 49.48%, rgba(23, 37, 84, 0.15));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-lg);
  box-sizing: border-box;
  gap: var(--gap-7xs);
  max-width: 100%;
}

.frame-child1 {
  height: 3.25rem;
  width: 22.75rem;
  position: relative;
  border-radius: var(--br-base);
  background: linear-gradient(246.75deg, rgba(23, 37, 84, 0.15), rgba(23, 37, 84, 0.08) 49.48%, rgba(23, 37, 84, 0.15));
  display: none;
  max-width: 100%;
}

.frame-content-icon {
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
}

.password {
  width: 100%;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs);
  background-color: transparent;
  height: 1.13rem;
  position: relative;
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  z-index: 1;
}

.group-div {
  align-self: stretch;
  border-radius: var(--br-base);
  background: linear-gradient(246.75deg, rgba(23, 37, 84, 0.15), rgba(23, 37, 84, 0.08) 49.48%, rgba(23, 37, 84, 0.15));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-lg);
  box-sizing: border-box;
  gap: var(--gap-7xs);
  max-width: 100%;
}

.login-frames {
  align-self: stretch;
  height: 7.94rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.13rem;
  max-width: 100%;
}

.frame-child2 {
  height: 3.25rem;
  width: 7.75rem;
  position: relative;
  border-radius: var(--br-base);
  background: linear-gradient(217.64deg, #172554, #1e40af);
  box-shadow: 0px 8px 21px rgba(0, 0, 0, 0.16);
  display: none;
}

.login-now {
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-poppins);
  color: var(--color-white);
  text-align: left;
  z-index: 1;
}

.group-button {
  cursor: pointer;
  border: none;
  padding: var(--padding-mid) 1.75rem var(--padding-mid) 1.88rem;
  background-color: transparent;
  border-radius: var(--br-base);
  background: linear-gradient(217.64deg, #172554, #1e40af);
  box-shadow: 0px 8px 21px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.social-login-group {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl) var(--padding-8xs);
}

.login2 {
  font-family: var(--font-poppins);
  color: var(--color-gray-100);
}

.with-others {
  font-family: var(--font-poppins);
  color: var(--color-dimgray);
}

.login-with-others-container {
  position: relative;
  font-size: var(--font-size-base);
  text-align: left;
}

.other-login-options {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl) var(--padding-8xs);
}

.frame-child3 {
  height: 3.25rem;
  width: 22.75rem;
  position: relative;
  border-radius: var(--br-base);
  border: 1px solid var(--color-lavender-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
}

.google-1-icon {
  height: 1.88rem;
  width: 1.88rem;
  position: relative;
  object-fit: cover;
  z-index: 1;
}

.login-with {
  font-family: var(--font-poppins);
}

.google {
  font-family: var(--font-poppins);
}

.login-with-google-container {
  position: relative;
  font-size: var(--font-size-xs);
  color: var(--color-gray-100);
  text-align: left;
  z-index: 1;
}

.rectangle-parent1 {
  width: 362px;
  cursor: pointer;
  border: 1px solid var(--color-lavender-100);
  padding: var(--padding-2xs) 6.88rem var(--padding-2xs) 6.31rem;
  background-color: transparent;
  border-radius: var(--br-base);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-mid);
  /* max-width: 100%; */
  white-space: nowrap;
}

.rectangle-parent1:hover {
  background-color: var(--color-lavender-300);
  border: 1px solid var(--color-lavender-200);
  box-sizing: border-box;
}

.frame-child4 {
  height: 3.25rem;
  width: 22.75rem;
  position: relative;
  border-radius: var(--br-base);
  border: 1px solid var(--color-lavender-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
}

.facebook-1-icon {
  height: 1.88rem;
  width: 1.88rem;
  position: relative;
  object-fit: cover;
  z-index: 1;
}

.login-with1 {
  font-family: var(--font-poppins);
}

.facebook {
  font-family: var(--font-poppins);
}

.login-with-facebook-container {
  position: relative;
  font-size: var(--font-size-xs);
  color: var(--color-gray-100);
  text-align: left;
  z-index: 1;
}

.rectangle-parent2 {
  width: 362px;
  cursor: pointer;
  border: 1px solid var(--color-lavender-100);
  padding: var(--padding-2xs) var(--padding-xl) var(--padding-2xs) 1.81rem;
  background-color: transparent;
  align-self: stretch;
  border-radius: var(--br-base);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-mid);
  /* max-width: 100%; */
  white-space: nowrap;
}

.rectangle-parent2:hover {
  background-color: var(--color-lavender-300);
  border: 1px solid var(--color-lavender-200);
  box-sizing: border-box;
}

.login-frames1 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  max-width: 100%;
}

.new-to-woow {
  font-family: var(--font-poppins);
  color: var(--color-gray-100);
}

.create-an-account {
  font-family: var(--font-poppins);
  color: #5d8bf4;
}

.new-to-woow-container {
  width: 18rem;
  position: relative;
  font-size: var(--font-size-xs);
  text-align: left;
  display: inline-block;
  padding-left: var(--padding-xl);
  padding-right: var(--padding-xl);
}

.google-frame {
  margin: 0;
  position: absolute;
  top: 11.13rem;
  left: 10rem;
  width: 22.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.19rem;
  max-width: 100%;
}

.woow {
  margin: 0;
}

.space {
  margin: 0;
}

.woow-space {
  margin: 0;
  position: absolute;
  top: 2.69rem;
  left: 3.63rem;
  font-size: 1.56rem;
  font-weight: 700;
  font-family: inherit;
  color: var(--color-black);
}

.login {
  width: 100%;
  height: 46.2rem;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  letter-spacing: normal;
  text-align: left;
  font-size: 2rem;
  color: var(--color-white);
  font-family: var(--font-poppins);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

@media screen and (max-width: 750px) {
  .very-good-works-container {
    font-size: 1.63rem;
    line-height: 2.31rem;
  }

  .login1 {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 450px) {
  .very-good-works-container {
    font-size: 1.19rem;
    line-height: 1.75rem;
  }

  .login1 {
    font-size: 1.13rem;
  }

  .login-frames {
    height: 7.94rem;
  }

  .woow-space {
    font-size: 1.25rem;
  }
}
</style>
