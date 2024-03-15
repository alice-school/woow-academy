<script lang="ts" setup>
import eye from '../assets/icons/eye.png'
import eyeSlash from '../assets/icons/eye-slash.png'
import { reactive, ref, onMounted, onBeforeMount } from 'vue'
import { useUserStore } from '~/store/user'
import { useToast } from 'vue-toast-notification'
import validateUser from './../utils/userValidation'

definePageMeta({
  layout: 'default',
})

interface UserInfo {
  userID: string
  firstName: string
  lastName: string
  userName: string
  email: string
  phone: string
  dob: string
  userPassword: string
  confPassword: string
}

const router: any = useRouter()
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const userStore = useUserStore()
const $toast = useToast()
let validationErrors: UserInfo | any = reactive({
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  phone: '',
  userPassword: '',
  confPassword: '',
})
const userid: Ref<any> | null = ref('')
const userEmail: Ref<any> | null = ref('')
const signupForm = reactive({
  userID: '',
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  phone: '',
  dob: '',
  userPassword: '',
  confPassword: '',
})

const newUserAssignedID = computed(() => {
  return userStore.newUserID
})

const confirmedPassword = computed(() => {
  return signupForm.userPassword === signupForm.confPassword
})

const errorMessages: any = computed(() => {
  return {
    firstName: validationErrors.firstName,
    lastName: validationErrors.lastName,
    userName: validationErrors.userName,
    email: validationErrors.email,
    phone: validationErrors.phone,
    userPassword: validationErrors.userPassword,
    confPassword: validationErrors.confPassword,
  }
})

const onSubmit = async (): Promise<void> => {
  signupForm.userID = newUserAssignedID.value
  if (!confirmedPassword.value) {
    $toast.warning('Confirm password does not match', {
      position: 'top-right',
      duration: 700,
    })
    return
  }

  const { isInvalid, errors } = validateUser(signupForm)

  if (isInvalid) {
    validationErrors.firstName = errors.firstName
    validationErrors.lastName = errors.lastName
    validationErrors.userName = errors.userName
    validationErrors.email = errors.email
    validationErrors.phone = errors.phone
    validationErrors.userPassword = errors.userPassword
    validationErrors.confPassword = errors.confPassword

    $toast.warning('Please fill in all required fields', {
      position: 'top-right',
      duration: 700,
    })
  } else {
    await userStore.createUser(signupForm)
    validationErrors = {}
  }
}

onBeforeMount(async () => {
  await userStore.getAllUsers()

  if (localStorage.getItem('userid') && localStorage.getItem('userEmail')) {
    userid.value = localStorage.getItem('userid')
    userEmail.value = localStorage.getItem('userEmail')
  }
})

onMounted(() => {
  signupForm.userID = newUserAssignedID.value
  if (userid.value && userEmail.value) {
    router.push('/courseList')
  }
})
</script>
<template>
  <div class="sign-up">
    <div class="sign-up-main-div">
      <div class="right-content">
        <div class="signup-with-others">
          <div class="signup-with-others-container">
            <b>Signup</b>
            <span class="with-others"> with Others</span>
          </div>
          <img alt="" class="subtract-icon" src="~/assets/images/subtract.svg" />
        </div>
        <div class="login-link">
          <div class="have-an-account-container">
            <span>Have an account? </span>
            <NuxtLink class="login" to="/">Login</NuxtLink>
          </div>
        </div>
        <div class="google-signup">
          <button class="rectangle-parent">
            <span class="group-child" />
            <span class="signup-with-google-parent">
              <span class="signup-with-google-container">
                <span>Signup with</span>
                <b>google</b>
              </span>
              <img alt="" class="google-1-icon" src="~/assets/images/google-1@2x.png" />
            </span>
          </button>
          <button class="rectangle-group">
            <span class="group-child" />
            <span class="signup-with-facebook-parent">
              <span class="signup-with-google-container">
                <span>Signup with </span>
                <b>Facebook</b>
              </span>
              <img alt="" class="google-1-icon" src="~/assets/images/facebook-1@2x.png" />
            </span>
          </button>
        </div>
        <form novalidate @submit.prevent="onSubmit">
          <div class="first-name">
            <div class="confirm-password-child" />
            <input
              v-model="signupForm.firstName"
              class="username focus:ring-0 focus:border-none border-none"
              placeholder="First Name"
              required
              type="text"
            />
            <img alt="" class="frame-icon" src="~/assets/images/frame.svg" />
            <span
              :class="
                errorMessages.firstName !== undefined ||
                errorMessages.firstName !== '' ||
                errorMessages.firstName !== null
                  ? 'absolute !block mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
                  : 'absolute hidden mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
              "
            >
              {{ errorMessages.firstName }}
            </span>
          </div>
          <div class="last-name">
            <div class="confirm-password-child" />
            <input
              v-model="signupForm.lastName"
              class="username focus:ring-0 focus:border-none border-none"
              placeholder="Last Name"
              required
              type="text"
            />
            <img alt="" class="frame-icon" src="~/assets/images/frame.svg" />
            <span
              :class="
                errorMessages.lastName
                  ? 'absolute show mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
                  : 'absolute hidden mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
              "
            >
              {{ errorMessages.lastName }}
            </span>
          </div>
          <div class="user-name">
            <div class="confirm-password-child" />
            <input
              v-model="signupForm.userName"
              class="username focus:ring-0 focus:border-none border-none"
              placeholder="Username"
              required
              type="text"
            />
            <img alt="" class="frame-icon" src="~/assets/images/frame.svg" />
            <span
              :class="
                errorMessages.userName
                  ? 'absolute show mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
                  : 'absolute hidden mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
              "
            >
              {{ errorMessages.userName }}
            </span>
          </div>
          <div class="email">
            <div class="confirm-password-child" />
            <input
              v-model="signupForm.email"
              class="username focus:ring-0 focus:border-none border-none"
              placeholder="Email"
              required
              type="email"
            />
            <img alt="" class="frame-icon" src="~/assets/images/frame-3.svg" />
            <span
              :class="
                errorMessages.email
                  ? 'absolute show mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
                  : 'absolute hidden mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
              "
            >
              {{ errorMessages.email }}
            </span>
          </div>
          <div class="phone-number">
            <div class="confirm-password-child" />
            <input
              v-model="signupForm.phone"
              class="username focus:ring-0 focus:border-none border-none"
              placeholder="Phone number"
              required
              type="text"
            />
            <img alt="" class="frame-icon" src="~/assets/images/frame-4.svg" />
            <span
              :class="
                errorMessages.phone
                  ? 'absolute show mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
                  : 'absolute hidden mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
              "
            >
              {{ errorMessages.phone }}
            </span>
          </div>
          <div class="password">
            <div class="confirm-password-child" />
            <input
              v-model="signupForm.userPassword"
              :type="showPassword ? 'text' : 'password'"
              class="password-field focus:ring-0 focus:border-none border-none"
              placeholder="Password"
              required
            />
            <img alt="" class="frame-icon" src="~/assets/images/frame-1.svg" />
            <img
              :src="showPassword ? eye : eyeSlash"
              alt=""
              class="frame-icon-eye cursor-pointer"
              @click="showPassword = !showPassword"
            />
            <span
              :class="
                errorMessages.userPassword
                  ? 'absolute show mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
                  : 'absolute hidden mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
              "
            >
              {{ errorMessages.userPassword }}
            </span>
          </div>
          <div class="confirm-password">
            <div class="confirm-password-child" />
            <input
              v-model="signupForm.confPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              class="password-field focus:ring-0 focus:border-none border-none"
              placeholder="Confirm Password"
            />
            <img alt="" class="frame-icon" src="~/assets/images/frame-1.svg" />
            <img
              :src="showConfirmPassword ? eye : eyeSlash"
              alt=""
              class="frame-icon-eye cursor-pointer"
              @click="showConfirmPassword = !showConfirmPassword"
            />
            <span
              :class="
                errorMessages.confPassword
                  ? 'absolute show mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
                  : 'absolute hidden mt-12 ml-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'
              "
            >
              {{ errorMessages.confPassword }}
            </span>
          </div>
          <button class="btn-signup">Signup</button>
        </form>
        <div class="create-account-prompt">
          <h1 class="signup-text-1">SignUp</h1>
          <p class="how-to-i">How to i get started lorem ipsum dolor at?</p>
        </div>
        <b class="woow-space">
          <p class="woow">WooW</p>
          <p class="woow">Space</p>
        </b>
      </div>
      <div class="left-content">
        <div class="left-content-child" />
        <img alt="" class="left-content-item" src="~/assets/images/rectangle-4@2x.png" />
        <div class="left-content-inner" />
        <img alt="" class="man-and-woman-at-work" src="~/assets/images/man-and-woman-at-work@2x.png" />
        <div class="ellipse-parent">
          <img alt="" class="thunderbolt-1-icon" src="~/assets/images/thunderbolt-1@2x.png" />
        </div>
        <b class="very-good-works-container">
          <p class="very-good">Very good</p>
          <p class="very-good">works are</p>
          <p class="very-good">waiting for</p>
          <p class="very-good">you Signup</p>
          <p class="very-good">Now!!!</p>
        </b>
      </div>
    </div>
  </div>
</template>
<style scoped>
.signup-text-1 {
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
  position: absolute;
  top: 12%;
  left: 0;
  right: 22%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-sm);
  box-sizing: border-box;
  gap: 0.63rem;
  min-height: 3.75rem;
  text-align: center;
}

.left-content-child {
  position: absolute;
  top: 0px;
  background: linear-gradient(246.75deg, rgba(30, 64, 175, 0.71) 50.99%, #172554);
  width: 683px;
  height: 1198px;
  left: 0;
}

.left-content-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.left-content-inner {
  position: absolute;
  top: calc(50% - 278px);
  left: calc(50% - 259.5px);
  border-radius: 46px;
  background-color: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(13.6px);
  border: 1px solid rgba(255, 255, 255, 0.52);
  box-sizing: border-box;
  width: 445px;
  height: 559px;
}

.man-and-woman-at-work {
  position: absolute;
  top: 170px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 309px;
  height: 358px;
  object-fit: cover;
}

.thunderbolt-1-icon {
  position: absolute;
  top: 19.2px;
  left: 20.5px;
  width: 45.3px;
  height: 44.8px;
  object-fit: cover;
}

.ellipse-parent {
  position: absolute;
  top: 300px;
  left: 0;
  right: 500px;
  bottom: 0;
  margin: auto;
  width: 85.2px;
  height: 84.3px;
  border-radius: 50%;
  background-color: #fff;
}

.very-good {
  margin: 0;
}

.very-good-works-container {
  position: absolute;
  top: 120px;
  left: 130px;
  line-height: 46px;
  display: inline-block;
  width: 198px;
  height: 245px;
}

.left-content {
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  text-align: left;
  font-size: 32px;
  color: #fff;
  font-family: Poppins;
}

.with-others {
  color: #525252;
}

.signup-with-others-container {
  position: absolute;
  top: -10px;
  left: 120px;
}

.subtract-icon {
  position: relative;
  width: 364px;
  height: 1px;
}

.signup-with-others {
  position: absolute;
  top: 856px;
  left: 0px;
  width: 364px;
  height: 24px;
  font-size: 16px;
}

.login {
  color: #5d8bf4;
}

.have-an-account-container {
  position: absolute;
  top: 0px;
  left: 0px;
}

.login-link {
  position: absolute;
  top: 1044px;
  left: 118px;
  width: 146px;
  height: 18px;
}

.group-child {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 16px;
  border: 1px solid #f0edff;
  box-sizing: border-box;
  width: 364px;
  height: 52px;
}

.signup-with-google-container {
  position: absolute;
  top: 6px;
  left: 47px;
}

.google-1-icon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  object-fit: cover;
}

.signup-with-google-parent {
  position: absolute;
  top: 11px;
  left: 101px;
  width: 163px;
  height: 30px;
}

.rectangle-parent {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.rectangle-parent:hover {
  background-color: var(--color-lavender-300);
  border: 1px solid var(--color-lavender-200);
  box-sizing: border-box;
  border-radius: 16px;
}

.signup-with-facebook-parent {
  position: absolute;
  top: 11px;
  left: 101px;
  width: 181px;
  height: 30px;
}

.rectangle-group {
  position: absolute;
  top: 68px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.rectangle-group:hover {
  background-color: var(--color-lavender-300);
  border: 1px solid var(--color-lavender-200);
  box-sizing: border-box;
  border-radius: 16px;
}

.google-signup {
  position: absolute;
  top: 905px;
  left: 0px;
  width: 364px;
  height: 120px;
}

.btn-signup {
  position: absolute;
  top: 760px;
  left: 120px;
  width: 124px;
  height: 52px;
  color: #fff;
  border-radius: 16px;
  background: linear-gradient(217.64deg, #172554, #1e40af);
  box-shadow: 0px 8px 21px rgba(0, 0, 0, 0.16);
  text-align: center;
  color: #fff;
}

.confirm-password-child {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 16px;
  background: linear-gradient(246.75deg, rgba(23, 37, 84, 0.15), rgba(23, 37, 84, 0.08) 49.48%, rgba(23, 37, 84, 0.15));
  width: 364px;
  height: 52px;
}

.frame-icon {
  position: absolute;
  top: 14px;
  left: 18px;
  width: 24px;
  height: 24px;
  overflow: hidden;
}

.frame-icon-eye {
  position: absolute;
  top: 14px;
  right: 18px;
  width: 24px;
  height: 24px;
  overflow: hidden;
}

.confirm-password {
  position: absolute;
  top: 676px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.password {
  position: absolute;
  top: 606px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.phone-number {
  position: absolute;
  top: 536px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.email {
  position: absolute;
  top: 465px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.username {
  position: absolute;
  left: 48px;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs);
  background-color: transparent;
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  z-index: 1;
  width: 308px;
  height: 52px;
}

.password-field {
  position: absolute;
  left: 48px;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs);
  background-color: transparent;
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  z-index: 1;
  width: 265px;
  height: 52px;
}

.user-name {
  position: absolute;
  top: 392px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.last-name {
  position: absolute;
  top: 321px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.first-name {
  position: absolute;
  top: 250px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.woow {
  margin: 0;
}

.woow-space {
  position: absolute;
  top: 0px;
  left: 460px;
  font-size: 25px;
  color: #000;
}

.right-content {
  position: absolute;
  top: 49px;
  left: 852px;
  width: 454px;
  height: 1062px;
}

.sign-up-main-div {
  position: absolute;
  top: -3px;
  left: -1px;
  width: 1306px;
  height: 1198px;
}

.sign-up {
  width: 1366px;
  border-radius: 24px;
  background-color: #fff;
  height: 1195px;
  overflow: hidden;
  text-align: left;
  font-size: 12px;
  color: #1c1c1c;
  font-family: Poppins;
}
</style>
