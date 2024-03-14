import axios from 'axios'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import { computed, reactive, ref, type Ref, toRaw } from 'vue'
import 'vue-toast-notification/dist/theme-sugar.css'
const BASEURL = 'http://127.0.0.1:8000/'

interface CvProfileInfo {
  addressID: string
  userID: string
  cvID: string
  dob: string
  profile_img: string
  about: string
  points: 0
  lineOne: string
  lineTwo: string
  city: string
  postCode: string
}

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

export const useCvProfileStore = defineStore('cvProfile', () => {
  const $router: any = useRouter()
  const $toast = useToast()

  const cvProfileList: Ref<CvProfileInfo[]> = ref([])
  const cvProfileDetailsList: Ref<CV[]> = ref([])
  const addressList: Ref<[]> = ref([])
  const userid: Ref<any> | null = ref('')
  const userEmail: Ref<any> | null = ref('')

  const cvProfileDetails: CvProfileInfo = reactive({
    addressID: '',
    userID: '',
    cvID: '',
    dob: '',
    profile_img: '',
    about: '',
    points: 0,
    lineOne: '',
    lineTwo: '',
    city: '',
    postCode: '',
  })

  const newAddressID = computed(() => {
    return `AD${toRaw(addressList.value).length + 1}`
  })

  const newCvProfileID = computed(() => {
    return `CV${toRaw(cvProfileList.value).length + 1}`
  })

  async function getAllCVProfiles(): Promise<void> {
    await axios.get(`${BASEURL}users/cvProfile/all`).then((res) => {
      cvProfileList.value = res.data.data
    })
  }

  async function getAllAddresses(): Promise<void> {
    await axios.get(`${BASEURL}users/address/all`).then((res) => {
      console.log(res.data.data)
      addressList.value = res.data.data
    })
  }

  async function createNewCVProfile(newProfile: CvProfileInfo): Promise<void> {
    const existingUser = localStorage.getItem('userid') ?? ''
    newProfile.userID = existingUser
    newProfile.addressID = newAddressID.value
    newProfile.cvID = newCvProfileID.value
    await axios
      .post(`${BASEURL}users/cv/create`, newProfile)
      .then((res) => {
        if (res.data.status === 201) {
          $toast.success(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
          $router.push('cvdetails')
        } else {
          $toast.error(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
        }
      })
      .catch((err) => {
        $toast.error(err, {
          position: 'top-right',
          duration: 700,
        })
      })
  }

  async function getCVProfilesDetails(): Promise<void> {
    const existingUser = localStorage.getItem('userid')
    await axios.get(`${BASEURL}users/cv/${existingUser}`).then((res) => {
      console.log(res.data.data)
      cvProfileDetailsList.value = res.data.data
    })
  }

  return {
    cvProfileList,
    cvProfileDetails,
    newAddressID,
    newCvProfileID,
    cvProfileDetailsList,
    getAllCVProfiles,
    getAllAddresses,
    createNewCVProfile,
    getCVProfilesDetails,
  }
})
