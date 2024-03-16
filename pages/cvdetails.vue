<script lang="ts" setup>
import { onMounted, toRaw } from 'vue'
import { initFlowbite, Modal } from 'flowbite'

definePageMeta({
  layout: 'default',
})

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()

  const $modalElement: HTMLElement | null = document.querySelector('#linkedinModal')
  // const $acceptModalElement: HTMLElement | null = document.querySelector('#popup-accept-modal')
  const $btnSkipElement: HTMLElement | null = document.querySelector('#btnSkip')
  const $closeButton: HTMLElement | null = document.querySelector('#linkedinModalClose')
  const $btnAccept: HTMLElement | null = document.querySelector('#btnAccept')
  // const $btnYes: HTMLElement | null = document.querySelector('#btnYes')
  // const $btnCancel: HTMLElement | null = document.querySelector('#btnCancel')
  // const $btnClosePopupAcceptModal: HTMLElement | null = document.querySelector('#btnClosePopup-accept-modal')

  // set modal options
  const modalOptions = {
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
  }

  // create a new modal instance
  if (
    ($modalElement !== null && $btnSkipElement !== null) ||
    ($modalElement !== undefined && $btnSkipElement !== undefined)
  ) {
    const modal = new Modal($modalElement, modalOptions)

    // set event listeners for the button to show the modal
    $btnSkipElement.addEventListener('click', function () {
      modal.toggle()
    })

    $closeButton.addEventListener('click', function () {
      modal.hide()
    })

    $btnAccept.addEventListener('click', function () {
      modal.hide()
    })
  }
})

// education
const enteredEducation: any = reactive([])
let institute: any = reactive('')
let course: any = reactive('')
let startDate: any = reactive('')
let endDate: any = reactive('')

// working experence
const enteredWorkingExperience: any = reactive([])
let companyName: string = reactive('')
let jobTitle: any = reactive('')
let jobAddress: any = reactive('')
let jobDescription: any = reactive('')
let startDateOfJob: any = reactive('')
let endDateOfJob: any = reactive('')

const terms = reactive({
  linkedinID: '',
  termsAgree: false,
})

const addNewEduc = (): void => {
  const enteredEducationDetails: {
    institution: string
    education_course: string
    education_start_date: string
    education_end_date: string
  } = {
    institution: institute.value,
    education_course: course.value,
    education_start_date: startDate.value,
    education_end_date: endDate.value,
  }

  enteredEducation.push(enteredEducationDetails)

  console.log(toRaw(enteredEducation))

  clearCurrentField()
}

const removeEduc = (index: any): void => {
  console.log(index)
  enteredEducation.splice(index, 1)
}

const clearCurrentField = (): void => {
  institute.value = ''
  course.value = ''
  startDate.value = ''
  endDate.value = ''
}

const removeWork = (index: any): void => {
  console.log(index)
  enteredWorkingExperience.splice(index, 1)
}

const addNewWork = (): void => {
  const enteredWorkingExperienceDetails: {
    company_name: string
    job_title: string
    job_address: string
    job_description: string
    job_start_date: string
    job_end_date: string
  } = {
    company_name: companyName.value,
    job_title: jobTitle.value,
    job_address: jobAddress.value,
    job_description: jobDescription.value,
    job_start_date: startDateOfJob.value,
    job_end_date: endDateOfJob.value,
  }

  enteredWorkingExperience.push(enteredWorkingExperienceDetails)

  removeWorkFields()
}

const removeWorkFields = (): void => {
  companyName.value = ''
  jobTitle.value = ''
  jobAddress.value = ''
  jobDescription.value = ''
  startDateOfJob.value = ''
  endDateOfJob.value = ''
}

const acceptTerms = (): void => {
  const $acceptModalElement: HTMLElement | null = document.querySelector('#popup-accept-modal')
  const $btnCancel: HTMLElement | null = document.querySelector('#btnCencelPopup-accept-modal')
  const $btnClosePopupAcceptModal: HTMLElement | null = document.querySelector('#btnClosePopup-accept-modal')

  const modalOptions = {
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
  }

  const acceptModal = new Modal($acceptModalElement, modalOptions)

  acceptModal.toggle()

  $btnClosePopupAcceptModal.addEventListener('click', function () {
    acceptModal.hide()
  })

  $btnCancel.addEventListener('click', function () {
    acceptModal.hide()
  })
}
</script>

<template>
  <div class="sign-up">
    <div class="sign-up-main-div">
      <div class="right-content">
        <b class="woow-space text-2xl font-bold text-right">
          <p class="woow">WooW</p>
          <p class="woow">Space</p>
        </b>

        <div class="px-28 mt-20">
          <!-- linkedin userid section start -->
          <!-- Main modal -->
          <div
            id="linkedinModal"
            tabindex="-1"
            aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-full max-w-2xl max-h-full">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Terms of Service</h3>
                  <button
                    id="linkedinModalClose"
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="linkedinModal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                  <div class="mb-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="linkedin_id"
                      >Linkedin User ID</label
                    >
                    <input
                      id="linkedin_id"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your linkedin user id"
                      required
                      type="text"
                    />
                  </div>

                  <!-- input our terms and condition for linkedin id insertion and without checked it user cant continue -->
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      class="h-4 w-4 rounded-sm text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label for="terms" class="ml-2 block text-sm text-gray-900 dark:text-white">
                      I accept the
                      <a href="#" class="text-blue-600 hover:underline"> Terms of Service </a>
                    </label>
                  </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    id="btnAccept"
                    data-modal-hide="linkedinModal"
                    @click="acceptTerms"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </button>
                  <button
                    data-modal-hide="linkedinModal"
                    type="button"
                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- linkedin userid section finished -->
          <!-- confirmation button -->
          <div
            id="popup-accept-modal"
            tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  id="btnClosePopup-accept-modal"
                  type="button"
                  class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-accept-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 md:p-5 text-center">
                  <svg
                    class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to save your linkedin id?
                  </h3>
                  <button
                    id="btnYes"
                    data-modal-hide="popup-accept-modal"
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    id="btnCencelPopup-accept-modal"
                    data-modal-hide="popup-accept-modal"
                    type="button"
                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- confirmation button finished -->
          <!-- confirm modal -->
          <div
            id="popup-decline-modal"
            tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 md:p-5 text-center">
                  <svg
                    class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to save your linkedin id?
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- confirmation section done -->
          <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
              <button
                aria-controls="accordion-open-body-1"
                aria-expanded="true"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target="#accordion-open-body-1"
                type="button"
              >
                <span class="flex items-center"
                  ><svg
                    class="w-5 h-5 me-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  Education</span
                >
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 rotate-180 shrink-0"
                  data-accordion-icon
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5 5 1 1 5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </h2>
            <div id="accordion-open-body-1" aria-labelledby="accordion-open-heading-1" class="hidden">
              <!--             start  user entered details form-->
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Welcome to our Education Section! Explore the enriching educational journey that awaits you. Take a
                  step towards your academic goals with us!
                </p>

                <!--                v-for element start-->
                <div
                  v-for="(education, index) in enteredEducation"
                  :key="index"
                  class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg"
                >
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-end items-center float-end">
                      <Icon
                        class="cursor-pointer show"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeEduc(index)"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Institute</label
                      >
                      <input
                        id="institute"
                        :value="toRaw(education.institution)"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Education Course</label
                      >
                      <input
                        id="education_course"
                        :value="toRaw(education.education_course)"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >Start Date</label
                      >
                      <input
                        id="start_date"
                        :value="toRaw(education.education_start_date)"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        onfocus="(this.type='date')"
                        readonly
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >End Date</label
                      >
                      <input
                        id="start_date"
                        :placeholder="toRaw(education.education_end_date)"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        onfocus="(this.type='date')"
                        readonly
                        required
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <!--                v-for element end-->
                <!--             end  user entered details form-->
                <!--             start user input form div-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-between items-center float-end">
                      <Icon
                        class="cursor-pointer"
                        color="green"
                        name="ep:circle-plus-filled"
                        size="20px"
                        @click="addNewEduc"
                      />
                      <Icon
                        class="cursor-pointer"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="clearCurrentField"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Institute</label
                      >
                      <input
                        id="institute"
                        v-model="institute"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="SLIIT"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Education Course</label
                      >
                      <input
                        id="education_course"
                        v-model="course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Software Engineering"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >Start Date</label
                      >
                      <input
                        id="start_date"
                        v-model="startDate"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onfocus="(this.type='date')"
                        placeholder="2020-6-14"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >End Date</label
                      >
                      <input
                        id="start_date"
                        v-model="endDate"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onfocus="(this.type='date')"
                        placeholder="2020-6-14"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <!--                end user input form div-->
              </div>
            </div>
            <h2 id="accordion-open-heading-2">
              <button
                aria-controls="accordion-open-body-2"
                aria-expanded="false"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target="#accordion-open-body-2"
                type="button"
              >
                <span class="flex items-center"
                  ><svg
                    class="w-5 h-5 me-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      fill-rule="evenodd"
                    ></path></svg
                  >WorkExperience</span
                >
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 rotate-180 shrink-0"
                  data-accordion-icon
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5 5 1 1 5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </h2>
            <div id="accordion-open-body-2" aria-labelledby="accordion-open-heading-2" class="hidden">
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  We would love to learn more about your professional journey! Share details about your working
                  experience. Your insights will help us tailor our content and services to better suit your needs.
                </p>

                <!--                v-for element start-->
                <div
                  v-for="(workingExperience, index) in enteredWorkingExperience"
                  :key="index"
                  class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg"
                >
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-end items-center float-end">
                      <Icon
                        class="cursor-pointer show"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeWork(index)"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Company Name</label
                      >
                      <input
                        id="institute"
                        :value="workingExperience.company_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Job Title</label
                      >
                      <input
                        id="education_course"
                        :value="workingExperience.job_title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Job Address</label
                      >
                      <input
                        id="education_course"
                        :value="workingExperience.job_address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Job Description</label
                      >
                      <textarea
                        id="education_course"
                        :value="workingExperience.job_description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      >
                      </textarea>
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >Start Date</label
                      >
                      <input
                        id="start_date"
                        :value="workingExperience.job_start_date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        onfocus="(this.type='date')"
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >End Date</label
                      >
                      <input
                        id="start_date"
                        :value="workingExperience.job_end_date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        onfocus="(this.type='date')"
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <!--                v-for element end-->
                <!--             end  user entered details form-->
                <!--             start user input form div-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-between items-center float-end">
                      <Icon
                        class="cursor-pointer"
                        color="green"
                        name="ep:circle-plus-filled"
                        size="20px"
                        @click="addNewWork"
                      />
                      <Icon
                        class="cursor-pointer"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeWorkFeilds"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Company Name</label
                      >
                      <input
                        id="institute"
                        v-model="companyName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="IFS"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Job Title</label
                      >
                      <input
                        id="education_course"
                        v-model="jobTitle"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Software engineer"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Job Address</label
                      >
                      <input
                        id="education_course"
                        v-model="jobAddress"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Colombo"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Job Description</label
                      >
                      <textarea
                        id="education_course"
                        v-model="jobDescription"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Lorem lorem lorem lorem"
                        required
                      >
                      </textarea>
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >Start Date</label
                      >
                      <input
                        id="start_date"
                        v-model="startDateOfJob"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onfocus="(this.type='date')"
                        placeholder="2020-6-14"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >End Date</label
                      >
                      <input
                        id="start_date"
                        v-model="endDateOfJob"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onfocus="(this.type='date')"
                        placeholder="2020-6-14"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <!--                end user input form div-->
              </div>
            </div>
            <h2 id="accordion-open-heading-3">
              <button
                aria-controls="accordion-open-body-3"
                aria-expanded="false"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target="#accordion-open-body-3"
                type="button"
              >
                <span class="flex items-center"
                  ><svg
                    class="w-5 h-5 me-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  Volunteer experience</span
                >
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 rotate-180 shrink-0"
                  data-accordion-icon
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5 5 1 1 5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </h2>
            <div id="accordion-open-body-3" aria-labelledby="accordion-open-heading-3" class="hidden">
              <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  We're eager to learn more about your volunteer experience. Whether you've dedicated your time to
                  community service, charitable organizations, or any other meaningful cause, we'd love to hear about
                  it. Share the roles you've taken on, and the positive change you've contributed to. Your volunteer
                  journey is valuable, and by sharing it, you inspire others to make a difference too.
                </p>
                <!--                v-for element start-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-end items-center float-end">
                      <Icon
                        class="cursor-pointer show"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeEduc(index)"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Organization Name</label
                      >
                      <input
                        id="institute"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Role</label
                      >
                      <input
                        id="education_course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Volunteer Description</label
                      >
                      <textarea
                        id="education_course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      >
                      </textarea>
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >Start Date</label
                      >
                      <input
                        id="start_date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        onfocus="(this.type='date')"
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >End Date</label
                      >
                      <input
                        id="start_date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        onfocus="(this.type='date')"
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <!--                v-for element end-->
                <!--             end  user entered details form-->
                <!--             start user input form div-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-between items-center float-end">
                      <Icon
                        class="cursor-pointer"
                        color="green"
                        name="ep:circle-plus-filled"
                        size="20px"
                        @click="addNewEduc"
                      />
                      <Icon
                        class="cursor-pointer"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeEduc"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Organization Name</label
                      >
                      <input
                        id="institute"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="IFS"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Role</label
                      >
                      <input
                        id="education_course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Software engineer"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Volunteer Description</label
                      >
                      <textarea
                        id="education_course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Lorem lorem lorem lorem"
                        required
                      >
                      </textarea>
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >Start Date</label
                      >
                      <input
                        id="start_date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onfocus="(this.type='date')"
                        placeholder="2020-6-14"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="start_date"
                        >End Date</label
                      >
                      <input
                        id="start_date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onfocus="(this.type='date')"
                        placeholder="2020-6-14"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <!--                end user input form div-->
              </div>
            </div>
            <h2 id="accordion-open-heading-4">
              <button
                aria-controls="accordion-open-body-4"
                aria-expanded="false"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target="#accordion-open-body-4"
                type="button"
              >
                <span class="flex items-center"
                  ><svg
                    class="w-5 h-5 me-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  Project</span
                >
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 rotate-180 shrink-0"
                  data-accordion-icon
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5 5 1 1 5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </h2>
            <div id="accordion-open-body-4" aria-labelledby="accordion-open-heading-4" class="hidden">
              <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  We're excited to hear about the projects you've undertaken. This information will help us better
                  understand your requirements and tailor our services to meet your specific needs.
                </p>
                <!--                v-for element start-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-end items-center float-end">
                      <Icon
                        class="cursor-pointer show"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeEduc(index)"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Project Name</label
                      >
                      <input
                        id="institute"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Project Description</label
                      >
                      <textarea
                        id="education_course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      >
                      </textarea>
                    </div>
                  </div>
                </div>
                <!--                v-for element end-->
                <!--             end  user entered details form-->
                <!--             start user input form div-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-between items-center float-end">
                      <Icon
                        class="cursor-pointer"
                        color="green"
                        name="ep:circle-plus-filled"
                        size="20px"
                        @click="addNewEduc"
                      />
                      <Icon
                        class="cursor-pointer"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeEduc"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Project Name</label
                      >
                      <input
                        id="institute"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="IFS"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Project Description</label
                      >
                      <textarea
                        id="education_course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Lorem lorem lorem lorem"
                        required
                      >
                      </textarea>
                    </div>
                  </div>
                </div>
                <!--                end user input form div-->
              </div>
            </div>
            <h2 id="accordion-open-heading-5">
              <button
                aria-controls="accordion-open-body-5"
                aria-expanded="false"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target="#accordion-open-body-5"
                type="button"
              >
                <span class="flex items-center"
                  ><svg
                    class="w-5 h-5 me-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  Skill</span
                >
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 rotate-180 shrink-0"
                  data-accordion-icon
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5 5 1 1 5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </h2>
            <div id="accordion-open-body-5" aria-labelledby="accordion-open-heading-5" class="hidden">
              <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Share your programming prowess with us! Kindly enter your skills below, detailing the programming
                  languages you command and your proficiency level in each. Whether you're a coding maestro or just
                  getting started, we want to tailor our experience to match your expertise.
                </p>
                <!--                v-for element start-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-end items-center float-end">
                      <Icon
                        class="cursor-pointer show"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeEduc(index)"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Skill Name</label
                      >
                      <input
                        id="institute"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label
                        class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                        for="education_course"
                        >Skill Level</label
                      >
                      <div class="flex flex-wrap gap-1 text-center">
                        <div class="flex items-center me-4">
                          <input
                            id="inline-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="inline-radio"
                            >1</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-2-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="inline-2-radio"
                            >2</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >3</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >4</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >5</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >6</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >7</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >8</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >9</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >10</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--                v-for element end-->
                <!--             end  user entered details form-->
                <!--             start user input form div-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-between items-center float-end">
                      <Icon
                        class="cursor-pointer"
                        color="green"
                        name="ep:circle-plus-filled"
                        size="20px"
                        @click="addNewEduc"
                      />
                      <Icon
                        class="cursor-pointer"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeEduc"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Skill Name</label
                      >
                      <input
                        id="institute"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Java"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label
                        class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                        for="education_course"
                        >Skill Level</label
                      >
                      <div class="flex flex-wrap gap-1 text-center">
                        <div class="flex items-center me-4">
                          <input
                            id="inline-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="inline-radio"
                            >1</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-2-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="inline-2-radio"
                            >2</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >3</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >4</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >5</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >6</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            checked
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >7</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >8</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >9</label
                          >
                        </div>
                        <div class="flex items-center me-4">
                          <input
                            id="inline-checked-radio"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            name="inline-radio-group"
                            type="radio"
                            value=""
                          />
                          <label
                            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="inline-checked-radio"
                            >10</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--                end user input form div-->
              </div>
            </div>
            <h2 id="accordion-open-heading-6">
              <button
                aria-controls="accordion-open-body-6"
                aria-expanded="false"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target="#accordion-open-body-6"
                type="button"
              >
                <span class="flex items-center"
                  ><svg
                    class="w-5 h-5 me-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  Social Media</span
                >
                <svg
                  aria-hidden="true"
                  class="w-3 h-3 rotate-180 shrink-0"
                  data-accordion-icon
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5 5 1 1 5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </h2>
            <div id="accordion-open-body-6" aria-labelledby="accordion-open-heading-6" class="hidden">
              <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Enhance your CV and connect with opportunities by adding your social media links! Share your
                  professional journey beyond the resume – insert links to your LinkedIn, Twitter, and other relevant
                  platforms. Let your potential employers explore your online presence and get a holistic view of your
                  skills and interests.
                </p>
                <!--                v-for element start-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-end items-center float-end">
                      <Icon
                        class="cursor-pointer show"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeEduc(index)"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Social Media Name</label
                      >
                      <input
                        id="institute"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Social Media Link</label
                      >
                      <input
                        id="education_course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                        readonly
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <!--                v-for element end-->
                <!--             end  user entered details form-->
                <!--             start user input form div-->
                <div class="mb-3 border border-b-0 border-gray-200 py-2 px-4 pt-3 rounded-lg">
                  <div class="text-gray-500 dark:text-gray-400">
                    <div class="w-20 flex flex-row justify-between items-center float-end">
                      <Icon
                        class="cursor-pointer"
                        color="green"
                        name="ep:circle-plus-filled"
                        size="20px"
                        @click="addNewEduc"
                      />
                      <Icon
                        class="cursor-pointer"
                        color="red"
                        name="ep:remove-filled"
                        size="20px"
                        @click="removeEduc"
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="institute"
                        >Social Media Name</label
                      >
                      <input
                        id="institute"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Github"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="text-gray-500 dark:text-gray-400 mt-2">
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="education_course"
                        >Social Media Link</label
                      >
                      <input
                        id="education_course"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="https://github.com/MadhushaPrasad"
                        required
                      />
                    </div>
                  </div>
                </div>
                <!--                end user input form div-->
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between items-center mt-12 pb-10">
            <button id="btnSkip" class="btn">Skip</button>

            <NuxtLink to="/cvprofile">
              <button class="btn">Back</button>
            </NuxtLink>
            <NuxtLink to="/courseList">
              <button class="btn">Save</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="left-content">
      <div class="left-content-child" />
      <img alt="" class="left-content-item" src="../assets/images/rectangle-4@2x.png" />
      <div class="left-content-inner" />
      <img alt="" class="man-and-woman-at-work" src="../assets/images/younghappyleft%20side.png" />
      <div class="ellipse-parent">
        <img alt="" class="thunderbolt-1-icon" src="../assets/images/thunderbolt-1@2x.png" />
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
</template>
<style scoped>
.btn {
  width: 124px;
  height: 52px;
  color: #fff;
  border-radius: 16px;
  background: linear-gradient(217.64deg, #172554, #1e40af);
  box-shadow: 0px 8px 21px rgba(0, 0, 0, 0.16);
  text-align: center;
  color: #fff;
}

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
  width: 100%;
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
  top: 76px;
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

.right-content {
  position: absolute;
  top: 49px;
  left: 730px;
  width: 700px;
  height: auto;
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
