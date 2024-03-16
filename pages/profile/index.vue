<script lang="ts" setup>
import CoursesProgress from '~/components/profile/CoursesProgress.vue'
import RecentAchievements from '~/components/profile/RecentAchievements.vue'
import Certificates from '~/components/profile/Certificates.vue'
import { onMounted } from 'vue'
import { useCvProfileStore } from '~/store/cvProfile'
import { useUserStore } from '~/store/user'
import { useToast } from 'vue-toast-notification'
import { initFlowbite, Modal } from 'flowbite'

definePageMeta({
  layout: 'user',
})

interface CV {
  student: object
  address: object
  cvProfile: object
  objective: object
  education: object[]
  skill: object[]
  socialMedia: object[]
  workExperience: object[]
  volunteerExperience: object[]
  project: object[]
}

interface StudentInfo {
  userID: string
  firstName: string
  lastName: string
  userName: string
  email: string
  phone: string
  dob: string
  userPassword: string
}

interface AddressInfo {
  addressID: string
  userID: string
  lineOne: string
  lineTwo: string
  city: string
  postCode: string
}

interface CvProfileInfo {
  cvID: string
  userID: string
  profile_img: string
  about: string
  points: string
  gender: string
}

const student: Ref<StudentInfo> = ref({
  userID: '',
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  phone: '',
  dob: '',
  userPassword: '',
})

const address: Ref<AddressInfo> = ref({
  addressID: '',
  userID: '',
  lineOne: '',
  lineTwo: '',
  city: '',
  postCode: '',
})
const cvProfileDetails: Ref<CvProfileInfo> = ref({
  cvID: '',
  userID: '',
  profile_img: 'https://thumb.ac-illust.com/3b/3bd59727c4473fc4ee9c0f13123bec8a_t.jpeg',
  about: '',
  points: '0',
  gender: '',
})

const userCvProfileStore = useCvProfileStore()
const userStore = useUserStore()
const socialMediaDetails: Ref<any[]> = ref([])
const $toast = useToast()
const router: any = useRouter()
const cvDetails: Ref<CV[]> = ref([])
const userid: Ref<any> | null = ref('')
const userEmail: Ref<any> | null = ref('')

onBeforeMount(async () => {
  if (localStorage.getItem('userid') && localStorage.getItem('userEmail')) {
    userid.value = localStorage.getItem('userid')
    userEmail.value = localStorage.getItem('userEmail')
  }

  await userCvProfileStore.getCVProfilesDetails()
  await userStore.getStudentByID()
  await userStore.getAddressByUserID()
  await userStore.getCVProfileByUserID()
  await userStore.getSocialMediaByUserID()
})

onMounted(() => {
  userCvProfileStore.cvProfileDetailsList = cvDetails.value

  // console.log('cvProfileDetailsList', userCvProfileStore.cvProfileDetailsList)
})

watch(userid, async () => {
  initFlowbite()
  if (!(userid.value && userEmail.value)) {
    $toast.error('Please login to continue', {
      position: 'top-right',
      duration: 2000,
    })
    router.push('/')
  }
  await userStore.getStudentByID()
  await userStore.getAddressByUserID()
  await userStore.getCVProfileByUserID()
  await userStore.getSocialMediaByUserID()
  // await userStore.getLinkedIn('suraif-muhammad/')
  student.value = userStore.student
  address.value = userStore.address
  cvProfileDetails.value = userStore.cvProfileDetails
  socialMediaDetails.value = userStore.socialMedia
})
</script>

<template>
  <div class="w-full h-screen">
    <!--    profile page header start-->
    <div class="flex lg:flex-row md:flex-col:flex-col sm:w-full h-[400px] bg-gradient-to-r from-blue-800 to-blue-950">
      <!--      image section end-->
      <div class="flex w-full lg:w-1/2 md:w-full sm:w-full h-full p-5 justify-end items-center lg:pr-0 md:p-5 sm:p-5">
        <img
          :src="cvProfileDetails.profile_img"
          alt="Profile Image"
          class="object-cover rounded-md w-[175px] lg:w-[300px] md:w-[250px] sm:w-[100px] aspect-square"
        />
      </div>
      <!--      image section end-->
      <!--      profile details section start-->
      <div
        class="flex flex-col w-full lg:w-1/2 md:w-full sm:w-full h-full p-5 justify-center items-start lg:pl-10 md:p-5 sm:p-5 text-white font-normal"
      >
        <div
          class="flex flex-col justify-around rounded-md w-[175px] lg:w-[300px] md:w-[250px] sm:w-[100px] h-[175px] lg:h-[300px] md:h-[250px] sm:h-[100px]"
        >
          <h1 class="text-lg lg:text-2xl md:text-xl sm:text-lg font-400">
            {{ student.firstName }} {{ student.lastName }}
          </h1>
          <span>{{ cvProfileDetails.about }}</span>
          <span>{{ address.city }} · Lvl {{ parseInt(cvProfileDetails.points) / 100 }}</span>
          <ul class="list-none">
            <li v-for="(socialmediaLink, index) in socialMediaDetails" :key="index" class="!inline-block pr-2">
              <NuxtLink
                :to="
                  socialmediaLink.socialMedia_name === 'GitHub'
                    ? socialmediaLink.socialMedia_link
                    : socialmediaLink.socialMedia_name === 'LinkedIn'
                    ? socialmediaLink.socialMedia_link
                    : socialmediaLink.socialMedia_name === 'Stack Overflow'
                    ? socialmediaLink.socialMedia_link
                    : ''
                "
                class="cursor-pointer !inline-block"
                target="_blank"
              >
                <Icon
                  :name="
                    socialmediaLink.socialMedia_name === 'GitHub'
                      ? 'uil:github'
                      : socialmediaLink.socialMedia_name === 'LinkedIn'
                      ? 'bxl:linkedin-square'
                      : socialmediaLink.socialMedia_name === 'Stack Overflow'
                      ? 'bxl:stack-overflow'
                      : ''
                  "
                  class="frame-icon"
                  color="white"
                  size="20"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!--      profile details section end-->
    </div>
    <!--    profile page header end-->
    <!--    profile page course content start-->
    <div
      class="flex-wrap lg:flex-row md:flex-col:flex-col w-full h-full px-10 lg:px-28 md:px-16 sm:px-16 py-16 justify-center items-start"
    >
      <!--      content header start -->
      <div
        class="w-full flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center bg-black text-white rounded-xl"
      >
        <div class="lg:absolute lg:left-40 font-normal text-2xl pt-3 lg:pt-0">
          Woow <br />
          Space
        </div>
        <img class="vector" src="../../assets/images/profilebg-img.png" />
        <div class="lg:absolute lg:right-40 flex flex-row justify-between pb-3 lg:pb-0">
          <NuxtLink to="/courseList">
            <button class="px-4 py-4 rounded-[10px] bg-gradient-to-r from-blue-800 to-blue-950 mr-2" type="button">
              Start Today
            </button>
          </NuxtLink>

          <NuxtLink to="cv">
            <button class="px-4 py-4 rounded-[10px] bg-gradient-to-r from-blue-800 to-blue-950 ml-2" type="button">
              Generate CV
            </button>
          </NuxtLink>
        </div>
      </div>
      <!--      content header end-->
      <!--      content start -->
      <div class="flex justify-around items-start mt-12">
        <CoursesProgress />
        <RecentAchievements />
      </div>

      <div class="flex justify-left items-start mt-2 pl-10 pr-10">
        <Certificates />
      </div>
      <!--      content end-->
    </div>
    <!--    profile page course content end-->
  </div>
</template>
<style scoped></style>
