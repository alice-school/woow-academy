import { defineStore } from 'pinia'
import axios from 'axios'

const BASEURL = 'http://127.0.0.1:8000/'

export const useAuthStore = defineStore('userAuthStore', {
  state: () => ({
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    async login(userLoginDetails: UserInfo) {
      const response = await axios.post(`${BASEURL}users/check`, userLoginDetails)
      if (response.status === 200) {
        this.authUser = response.data
        localStorage.setItem('userid', response.data.data.userID)
        localStorage.setItem('userEmail', response.data.data.email)
      }
    },

    async getToken() {
      const response = await axios.get('/api/token')
      return response.data
    },

    async logout() {
      await axios.post('/api/logout')
      this.authUser = null
    },
  },
})

interface UserInfo {
  email: string
  userPassword: string
}
