<script lang="ts" setup>
import { ref } from 'vue'
import { useCvProfileStore } from '~/store/cvProfile'
import { useLocalStorage } from '@vueuse/core'
import validateCvProfile from './../utils/cvProfileValidation'
import { useToast } from 'vue-toast-notification'

definePageMeta({
  layout: 'default',
})

const $toast = useToast()
const cvProfileStore = useCvProfileStore()
const profilePicture = ref('')
const dateOfBirth = ref('')
const bio = ref('')
const addressLine1 = ref('')
const addressLine2 = ref('')
const city = ref('')
const postCode = ref('')
const gender = ref('')
const userid: Ref<any> | null = ref('')
const userEmail: Ref<any> | null = ref('')
interface CvProfileInfo {
  addressID: string
  userID: string
  cvID: string
  dob: string
  gender: string
  profile_img: string
  about: string
  points: 0
  lineOne: string
  lineTwo: string
  city: string
  postCode: string
}

let validationErrors: CvProfileInfo | any = reactive({
  addressID: '',
  userID: '',
  cvID: '',
  dob: '',
  gender: '',
  profile_img: '',
  about: '',
  points: '',
  lineOne: '',
  lineTwo: '',
  city: '',
  postCode: '',
})

const imgURL = computed(() => {
  return profilePicture.value
})

const errorMessages: any = computed(() => {
  return {
    addressID: validationErrors.addressID,
    userID: validationErrors.userID,
    cvID: validationErrors.cvID,
    dob: validationErrors.dob,
    profile_img: validationErrors.profile_img,
    about: validationErrors.about,
    points: validationErrors.points,
    lineOne: validationErrors.lineOne,
    lineTwo: validationErrors.lineTwo,
    city: validationErrors.city,
    postCode: validationErrors.postCode,
  }
})

const convertProfileImage = (e: any): void => {
  const file = e.target.files[0]
  try {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      profilePicture.value = reader.result as string

      // console.log('Profile Picture', profilePicture.value)
      if (profilePicture.value === '') {
        $toast.warning('Please upload a profile picture', {
          position: 'top-right',
          duration: 700,
        })
      } else {
        document.getElementById('dropDownDiv')?.classList.add('hidden')
        document.getElementById('img-preview')?.classList.remove('hidden')
        document.getElementById('img-preview')?.setAttribute('src', profilePicture.value)
        document.getElementById('img-preview')?.classList.add('block')
      }
    }
  } catch (e) {
    document.getElementById('dropDownDiv')?.classList.remove('hidden')
    document.getElementById('dropDownDiv')?.classList.add('block')
    document.getElementById('img-preview')?.classList.add('hidden')
    document.getElementById('img-preview')?.classList.remove('block')
    document.getElementById('img-preview')?.setAttribute('src', profilePicture.value)
  }
}

const onSubmit = async (): Promise<void> => {
  const newCVProfile: CvProfileInfo = {
    addressID: cvProfileStore.newAddressID,
    userID: userid.value,
    cvID: cvProfileStore.newCvProfileID,
    dob: dateOfBirth.value,
    gender: gender.value,
    profile_img: imgURL.value,
    about: bio.value,
    points: 0,
    lineOne: addressLine1.value,
    lineTwo: addressLine2.value,
    city: city.value,
    postCode: postCode.value,
  }

  const { isInvalid, errors } = validateCvProfile(newCVProfile)
  if (isInvalid) {
    validationErrors = errors

    $toast.warning('Please fill in all required fields', {
      position: 'top-right',
      duration: 700,
    })
  } else {
    await cvProfileStore.createNewCVProfile(newCVProfile)
    validationErrors = {}
  }
}

const changeGender = (event: any): void => {
  gender.value = event.target.value
  console.log(gender.value)
}

onBeforeMount(async () => {
  await cvProfileStore.getAllCVProfiles()
  await cvProfileStore.getAllAddresses()
})

onMounted(() => {
  if (localStorage.getItem('userid') && localStorage.getItem('userEmail')) {
    userid.value = useLocalStorage('userid', localStorage.getItem('userid'))
    userEmail.value = useLocalStorage('userEmail', localStorage.getItem('userEmail'))
  }
})
</script>

<template>
  <div class="sign-up">
    <div class="sign-up-main-div">
      <div class="right-content">
        <form @submit.prevent="onSubmit">
          <label for="GenderDiv">Gender</label>
          <div id="GenderDiv" class="flex flex-row justify-between w-3/4 pt-2">
            <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 pr-10">
              <input
                id="gender-female"
                type="radio"
                value="female"
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                @change="changeGender"
              />
              <label for="gender-female" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Female</label
              >
            </div>
            <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 pr-10">
              <input
                id="gender-male"
                type="radio"
                value="male"
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                @change="changeGender"
              />
              <label for="gender-male" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Male</label
              >
            </div>
          </div>
          <div class="profile-image">
            <div class="profile-image-div" />
            <div class="flex items-center justify-center profile-drop">
              <label
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                for="dropzone-file"
              >
                <img
                  id="img-preview"
                  class="w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hidden"
                  :src="imgURL"
                  alt="profile-image"
                />
                <div id="dropDownDiv" class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    id="profile-image-svg"
                    aria-hidden="true"
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 20 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" class="hidden" type="file" @change="convertProfileImage" />
              </label>
            </div>
          </div>
          <div class="date-of-birth">
            <div class="confirm-password-child" />
            <input
              v-model="dateOfBirth"
              class="username focus:ring-0 focus:border-none border-none"
              onfocus="(this.type='date')"
              placeholder="Date of birth"
              required
              type="text"
            />
            <Icon class="frame-icon" color="black" name="uil:clock" />
          </div>
          <!--          <div class="last-name">-->
          <!--            <div class="confirm-password-child" />-->
          <!--            <input type="text" class="username" placeholder="Last Name" required />-->
          <!--            <img class="frame-icon" alt="" src="~/assets/images/frame.svg" />-->
          <!--          </div>-->
          <div class="bio-div">
            <div class="bio" />
            <textarea
              v-model="bio"
              class="bio-text-area focus:ring-0 focus:border-none border-none"
              placeholder="Bio"
              required
            />
            <Icon class="frame-icon" color="black" name="mdi:earth" />
          </div>
          <div class="street-line01">
            <div class="confirm-password-child" />
            <input
              v-model="addressLine1"
              class="username focus:ring-0 focus:border-none border-none"
              placeholder="Street Line 01"
              required
              type="text"
            />
            <Icon class="frame-icon" color="black" name="mdi:location" />
          </div>
          <div class="street-line02">
            <div class="confirm-password-child" />
            <input
              v-model="addressLine2"
              class="username focus:ring-0 focus:border-none border-none"
              placeholder="Street Line 02"
              required
              type="text"
            />
            <Icon class="frame-icon" color="black" name="mdi:location" />
          </div>
          <div class="city">
            <div class="confirm-password-child" />
            <input
              v-model="city"
              class="username focus:ring-0 focus:border-none border-none"
              placeholder="City"
              required
              type="text"
            />
            <Icon class="frame-icon" color="black" name="mdi:location" />
          </div>
          <div class="post-code">
            <div class="confirm-password-child" />
            <input
              v-model="postCode"
              class="username focus:ring-0 focus:border-none border-none"
              placeholder="Post code2"
              required
              type="text"
            />
            <Icon class="frame-icon" color="black" name="mdi:location" />
          </div>
          <!--          <div class="email">-->
          <!--            <div class="confirm-password-child" />-->
          <!--            <input type="email" class="username" placeholder="Email" required />-->
          <!--            <img class="frame-icon" alt="" src="~/assets/images/frame-3.svg" />-->
          <!--          </div>-->
          <!--          <div class="phone-number">-->
          <!--            <div class="confirm-password-child" />-->
          <!--            <input type="text" class="username" placeholder="Phone number" required />-->
          <!--            <img class="frame-icon" alt="" src="~/assets/images/frame-4.svg" />-->
          <!--          </div>-->
          <NuxtLink to="/leaderboard">
            <button class="btn-skip">Skip</button>
          </NuxtLink>
          <button class="btn-signup">Next</button>
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
        <img alt="" class="man-and-woman-at-work" src="~/assets/images/younghappyleft%20side.png" />
        <div class="ellipse-parent">
          <img alt="" class="thunderbolt-1-icon" src="~/assets/images/thunderbolt-1@2x.png" />
        </div>
        <b class="very-good-works-container">
          <p class="very-good">Crafting</p>
          <p class="very-good">your digital</p>
          <p class="very-good">identity one</p>
          <p class="very-good">pixel at a</p>
          <p class="very-good">time ✍️✨</p>
        </b>
      </div>
    </div>
  </div>
</template>
<style scoped>
.signup-text-1 {
  margin: 0;
  width: 20.31rem;
  position: relative;
  font-size: 1.88rem;
  text-transform: uppercase;
  font-weight: 700;
  font-family: var(--font-poppins);
  color: var(--color-black);
  text-align: center;
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
  width: 23.5rem;
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
  top: 320px;
  left: 100px;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 319px;
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
  left: 140px;
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

.btn-skip {
  position: absolute;
  top: 900px;
  left: 0px;
  width: 124px;
  height: 52px;
  color: #fff;
  border-radius: 16px;
  background: linear-gradient(217.64deg, #172554, #1e40af);
  box-shadow: 0px 8px 21px rgba(0, 0, 0, 0.16);
  text-align: center;
  color: #fff;
}

.btn-signup {
  position: absolute;
  top: 900px;
  left: 235px;
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

.bio {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 16px;
  background: linear-gradient(246.75deg, rgba(23, 37, 84, 0.15), rgba(23, 37, 84, 0.08) 49.48%, rgba(23, 37, 84, 0.15));
  width: 364px;
  height: 152px;
  padding-top: 18px;
}

.frame-icon {
  position: absolute;
  top: 14px;
  left: 18px;
  width: 24px;
  height: 24px;
  overflow: hidden;
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

.bio-text-area {
  position: absolute;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs);
  background-color: transparent;
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  z-index: 1;
  width: 86%;
  height: 130px;
  left: 47px;
}

.profile-drop {
  position: absolute;
  border: none;
  outline: none;
  font-family: var(--font-poppins);
  font-size: var(--font-size-xs);
  background-color: transparent;
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  z-index: 1;
  width: 100%;
  height: 130px;
}

.street-line01 {
  position: absolute;
  top: 592px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.street-line02 {
  position: absolute;
  top: 662px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.city {
  position: absolute;
  top: 732px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.post-code {
  position: absolute;
  top: 800px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.bio-div {
  position: absolute;
  top: 421px;
  left: 0px;
  width: 364px;
  height: 52px;
  padding-top: 18px;
}

.profile-image {
  position: absolute;
  top: 82px;
  left: 0px;
  width: 364px;
  height: 152px;
}

.profile-image-div {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 16px;
  background: linear-gradient(246.75deg, rgba(23, 37, 84, 0.15), rgba(23, 37, 84, 0.08) 49.48%, rgba(23, 37, 84, 0.15));
  width: 364px;
  height: 152px;
}

.last-name {
  position: absolute;
  top: 321px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.date-of-birth {
  position: absolute;
  top: 350px;
  left: 0px;
  width: 364px;
  height: 52px;
}

.woow {
  margin: 0;
}

.woow-space {
  position: absolute;
  top: -20px;
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
