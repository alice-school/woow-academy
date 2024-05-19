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

  const objectiveList: Ref<[]> = ref([])
  const educationList: Ref<[]> = ref([])

  const predictedIndustry: Ref<string> = ref('')

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

  const newObjectiveID = computed(() => {
    return `OBJ${toRaw(objectiveList.value).length + 1}`
  })

  const newEducationID = computed(() => {
    return `EDU${toRaw(educationList.value).length + 1}`
  })

  const newSkillsID = computed(() => {
    return `OB${toRaw(educationList.value).length + 1}`
  })

  const newSocialMediaID = computed(() => {
    return `OB${toRaw(educationList.value).length + 1}`
  })

  const newWorkExperienceID = computed(() => {
    return `OB${toRaw(educationList.value).length + 1}`
  })

  const newVolunteerExperienceID = computed(() => {
    return `OB${toRaw(educationList.value).length + 1}`
  })

  const newProjectsID = computed(() => {
    return `OB${toRaw(educationList.value).length + 1}`
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

  const getAllObjectives = async (): Promise<void> => {
    await axios.get(`${BASEURL}users/objective/all`).then((res) => {
      console.log(res.data.data)
      objectiveList.value = res.data.data
    })
  }

  const getAllEducations = async (): Promise<void> => {
    await axios.get(`${BASEURL}users/education/all`).then((res) => {
      console.log(res.data.data)
      educationList.value = res.data.data
    })
  }

  const getAllSkills = async (): Promise<void> => {
    await axios.get(`${BASEURL}users/skill/all`).then((res) => {
      console.log(res.data.data)
    })
  }

  const getAllSocialMedia = async (): Promise<void> => {
    await axios.get(`${BASEURL}users/socialMedia/all`).then((res) => {
      console.log(res.data.data)
    })
  }

  const getAllWorkExperience = async (): Promise<void> => {
    await axios.get(`${BASEURL}users/workExperience/all`).then((res) => {
      console.log(res.data.data)
    })
  }

  const getAllVolunteerExperience = async (): Promise<void> => {
    await axios.get(`${BASEURL}users/volunteerExperience/all`).then((res) => {
      console.log(res.data.data)
    })
  }

  const getAllProjects = async (): Promise<void> => {
    await axios.get(`${BASEURL}users/project/all`).then((res) => {
      console.log(res.data.data)
    })
  }

  async function createNewCVProfile(newProfile: CvProfileInfo): Promise<void> {
    const existingUser = localStorage.getItem('userid') ?? ''
    newProfile.userID = existingUser
    newProfile.addressID = newAddressID.value
    newProfile.cvID = newCvProfileID.value
    localStorage.setItem('cvID', newCvProfileID.value)
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
      cvProfileDetailsList.value = res.data
    })
  }

  const createNewObjective = async (newObjective: any): Promise<void> => {
    const existingCvProfile = localStorage.getItem('cvID')
    newObjective.cvID = existingCvProfile
    await axios
      .post(`${BASEURL}users/objective/create`, newObjective)
      .then((res) => {
        if (res.data.status === 201) {
          $toast.success(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
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

  const createNewEducations = async (newEducation: any): Promise<void> => {
    const existingCvProfile = localStorage.getItem('cvID')
    newEducation.cvID = existingCvProfile
    await axios
      .post(`${BASEURL}users/education/create`, newEducation)
      .then((res) => {
        if (res.data.status === 201) {
          $toast.success(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
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

  const createNewWorkingExperience = async (newWorkExperience: any): Promise<void> => {
    const existingCvProfile = localStorage.getItem('cvID')
    newWorkExperience.cvID = existingCvProfile
    await axios
      .post(`${BASEURL}users/workExperience/create`, newWorkExperience)
      .then((res) => {
        if (res.data.status === 201) {
          $toast.success(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
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

  const createNewVolunteerExperience = async (newVolunteerExperience: any): Promise<void> => {
    const existingCvProfile = localStorage.getItem('cvID')
    newVolunteerExperience.cvID = existingCvProfile
    await axios
      .post(`${BASEURL}users/volunteerExperience/create`, newVolunteerExperience)
      .then((res) => {
        if (res.data.status === 201) {
          $toast.success(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
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

  const createNewProjects = async (newProjects: any): Promise<void> => {
    const existingCvProfile = localStorage.getItem('cvID')
    newProjects.cvID = existingCvProfile
    await axios
      .post(`${BASEURL}users/project/create`, newProjects)
      .then((res) => {
        if (res.data.status === 201) {
          $toast.success(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
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

  const createNewSkills = async (newSkills: any): Promise<void> => {
    const existingCvProfile = localStorage.getItem('cvID')
    newSkills.cvID = existingCvProfile
    await axios
      .post(`${BASEURL}users/skill/create`, newSkills)
      .then((res) => {
        if (res.data.status === 201) {
          $toast.success(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
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

  const createNewSocialMedia = async (newSocialMedia: any): Promise<void> => {
    const existingCvProfile = localStorage.getItem('cvID')
    newSocialMedia.cvID = existingCvProfile
    await axios
      .post(`${BASEURL}users/socialMedia/create`, newSocialMedia)
      .then((res) => {
        if (res.data.status === 201) {
          $toast.success(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
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

  const createResumeAtOnce = async (newResume: any): Promise<void> => {
    const existingCvProfile = localStorage.getItem('cvID')
    newResume.cvID = existingCvProfile
    console.log('Resume data', newResume)
    await axios
      .post(`${BASEURL}users/cv/create/full`, newResume)
      .then((res) => {
        if (res.data.status === 201) {
          $toast.success(res.data.message, {
            position: 'top-right',
            duration: 700,
          })
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

  async function getCVPredictedIndustry(): Promise<void> {
    await axios.post(`${BASEURL}/industry/predict-industry/`, cv).then((res) => {
      predictedIndustry.value = res.data.predicted_industry
    })
  }

  return {
    cvProfileList,
    cvProfileDetails,
    newAddressID,
    newCvProfileID,
    newObjectiveID,
    newSkillsID,
    newSocialMediaID,
    newWorkExperienceID,
    newVolunteerExperienceID,
    newProjectsID,
    cvProfileDetailsList,
    objectiveList,
    newEducationID,
    educationList,
    predictedIndustry,
    getAllSkills,
    getAllSocialMedia,
    getAllWorkExperience,
    getAllVolunteerExperience,
    getAllProjects,
    getAllObjectives,
    getAllCVProfiles,
    getAllAddresses,
    createNewCVProfile,
    getCVProfilesDetails,
    getAllEducations,
    createResumeAtOnce,
    getCVPredictedIndustry,
  }
})
