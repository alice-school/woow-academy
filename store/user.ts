import axios from 'axios'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import { computed, reactive, ref, type Ref, toRaw } from 'vue'
import 'vue-toast-notification/dist/theme-sugar.css'
const BASEURL = 'http://127.0.0.1:8000/'

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

export const useUserStore = defineStore('user', () => {
  const $router: any = useRouter()
  const $toast = useToast()

  const userList: Ref<UserInfo[]> = ref([])

  const userID: string = 'US00'

  const userDetails: UserInfo = reactive({
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
    profile_img: '',
    about: '',
    points: '',
    gender: '',
  })

  const socialMedia: Ref<object[]> = ref([])

  const linkedInData: Ref<object> = ref({})

  const newUserID = computed(() => {
    return `US${toRaw(userList.value).length + 1}`
  })

  async function createUser(newUser: UserInfo | null): Promise<void> {
    await axios
      .post(`${BASEURL}/users/create`, newUser)
      .then((res) => {
        try {
          if (res.status === 201) {
            console.log(res)
            localStorage.setItem('userid', res.data.data.userID)
            localStorage.setItem('userEmail', res.data.data.email)

            $toast.success(res.data.message, {
              position: 'top-right',
              duration: 700,
            })

            $router.push('cvprofile')
          } else {
            $toast.error(res.data.message, {
              position: 'top-right',
              duration: 700,
            })
          }
        } catch (error) {
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

  async function getAllUsers(): Promise<void> {
    await axios
      .get(`${BASEURL}/users/all`)
      .then((res) => {
        userList.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async function checkUser(email: string, userPassword: string): Promise<void> {
    await axios
      .post(`${BASEURL}users/check`, { email, userPassword })
      .then((res) => {
        try {
          if (res.status === 200) {
            console.log(res)
            localStorage.setItem('userid', res.data.data.userID)
            localStorage.setItem('userEmail', res.data.data.email)
            $toast.success(res.data.message, {
              position: 'top-right',
              duration: 700,
            })

            $router.push('courseList')
          } else {
            $toast.error(res.data.message, {
              position: 'top-right',
              duration: 700,
            })
          }
        } catch (error) {
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

  const getStudentByID = async (): Promise<void> => {
    const existingUser = localStorage.getItem('userid')
    await axios
      .get(`${BASEURL}users/profile/${existingUser}`)
      .then((res) => {
        student.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getAddressByUserID = async (): Promise<void> => {
    const existingUser = localStorage.getItem('userid')
    await axios
      .get(`${BASEURL}users/address/${existingUser}`)
      .then((res) => {
        address.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getCVProfileByUserID = async (): Promise<void> => {
    const existingUser = localStorage.getItem('userid')
    await axios
      .get(`${BASEURL}users/cv/${existingUser}`)
      .then((res) => {
        cvProfileDetails.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getSocialMediaByUserID = async (): Promise<void> => {
    const existingUser = localStorage.getItem('userid')
    await axios
      .get(`${BASEURL}users/socialMedia/${existingUser}`)
      .then((res) => {
        if (res.data.status === 200) {
          socialMedia.value = res.data.data
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          $toast.error('No social media found. Please add your social media details', {
            position: 'top-right',
            duration: 700,
          })
        }
      })
  }

  // const getLinkedIn = async (): Promise<void> => {
  //   const url = 'https://api.scrapingdog.com/linkedin/'
  //   const params = {
  //     // api_key: '65f5666036d2ad374ab32048',
  //     // api_key: '65f53ea37a9f47303bf6d368',
  //     api_key: '65f53ea37a9f47303bf6d368',
  //     type: 'profile',
  //     linkId: 'madhusha-prasad-045a82187',
  //     private: true,
  //   }
  //   // https://www.linkedin.com/in/vidusha-herath-b164a424b/
  //   const existingUser = localStorage.getItem('userid')
  //   if (existingUser !== null || existingUser !== undefined || existingUser !== '') {
  //     await axios
  //       .get(url, { params: params })
  //       .then((res) => {
  //         console.log(res.data)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }

  const getLinkedIn = async (linkedinID: string): Promise<void> => {
    console.log('heee', linkedinID)
    const params = {
      url: `https://www.linkedin.com/in/${linkedinID}`,
      skills: 'include',
    }

    console.log(params)

    await axios.get(`${BASEURL}users/linkedin-data/`, { params: params }).then((res) => {
      linkedInData.value = res.data
      console.log(res.data)
    })
  }

  const points: Ref<any> = ref(0)

  const increesePoints = (completePints: any): void => {
    points.value += completePints
  }

  const logout = (): void => {
    localStorage.removeItem('userid')
    localStorage.removeItem('userEmail')
    $router.push('/')
    console.log('Logged out')
  }

  return {
    createUser,
    getAllUsers,
    checkUser,
    logout,
    getStudentByID,
    getAddressByUserID,
    getCVProfileByUserID,
    getSocialMediaByUserID,
    getLinkedIn,
    points,
    userDetails,
    userList,
    userID,
    newUserID,
    student,
    address,
    cvProfileDetails,
    socialMedia,
    linkedInData,
    increesePoints,
  }
})
