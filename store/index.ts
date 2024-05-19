import { defineStore } from 'pinia'
import { mande } from 'mande'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import { isProxy, toRaw } from 'vue'

const $toast = useToast()

const BASEURL = 'http://127.0.0.1:8000/'
const userAPI = mande(`${BASEURL}`)

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userList: null,

      user: null as UserInfo | null,

      userCount: 0 as number,

      responseData: null,

      cvProfileDetails: {},
    }
  },
  // optional getters
  getters: {
    getAllUserDetails: (state) => state.userList,
    getResponseData: (state) => state.responseData,
    cv_profile: (state) => {
      console.log('getter', state.cvProfileDetails)
      return toRaw(state.cvProfileDetails)
    },
  },
  // optional actions
  actions: {
    async registerUser(userDetails: UserInfo) {
      this.user = userDetails
      await userAPI
        .post('/users/create', this.user)
        .then((res: any) => {
          this.responseData = res
          if (res.status === 201) {
            this.user = res.data
            $toast.success(res.message, {
              position: 'top-right',
              duration: 500,
            })
          } else {
            $toast.error(res.message, {
              position: 'top-right',
              duration: 500,
            })
          }
        })
        .catch((err) => {
          $toast.error(err, {
            position: 'top-right',
            duration: 500,
          })
        })
    },
    async getAllUsers() {
      await userAPI
        .get('/users/all')
        .then((res: any) => {
          this.userList = res
          this.userCount = res.length
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getUserDetails(userid: string) {
      await userAPI
        .get(`/users/profile/${userid}`)
        .then((res: any) => {
          this.user = res
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getStudentCVProfile() {
      const id = localStorage.getItem('userid')
      console.log('id', id)
      await userAPI
        .get(`/users/cv/${id}`)
        .then((res: any) => {
          this.cvProfileDetails = res
          console.log(toRaw(this.cvProfileDetails))
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
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
