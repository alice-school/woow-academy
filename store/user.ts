import axios from 'axios'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import { computed, reactive, ref, type Ref, toRaw } from 'vue'
import 'vue-toast-notification/dist/theme-sugar.css'
const BASEURL = 'http://127.0.0.1:8000/'

export const useUserStore = defineStore('user', () => {
  const $router: any = useRouter()
  const $toast = useToast()

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
        console.log(toRaw(userList.value))
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

  function logout(): void {
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
    userDetails,
    userList,
    userID,
    newUserID,
  }
})
