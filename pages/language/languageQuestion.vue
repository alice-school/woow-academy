<script setup lang="ts">
const totalTime = 60 * 60 * 1000 // 1 hour in milliseconds
let remainingTime = totalTime

const updateTimer = (): void => {
  remainingTime -= 1000
  // Display timer on the webpage
  const timerElement = document.getElementById('timer')
  if (timerElement) {
    timerElement.innerText = formatTime(remainingTime)
  }

  if (remainingTime <= 0) {
    // Handle timeout logic, e.g., show a message, redirect, etc.
    alert('Time is up! Your test has ended.')
  }
}

setInterval(updateTimer, 1000)
// Update the timer every second

// Initial question count
const currentQuestion = ref(1)
const totalQuestions = ref(15) // Set the total number of questions
const answeredQuestions = ref(0)

// Function to update the question counter and simulate moving to the next question
const nextQuestion = (): void => {
  if (currentQuestion.value < totalQuestions.value) {
    console.log(currentQuestion.value)
    currentQuestion.value = currentQuestion.value + 1
    answeredQuestions.value = answeredQuestions.value + 1
    // You can add additional logic to handle the link navigation here

    // Reset the timer for the next question
    remainingTime = totalTime
  } else {
    alert('You have completed all questions.')
  }
}

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / (60 * 1000))
  const seconds = Math.floor((time % (60 * 1000)) / 1000)
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

// Computed property to calculate the progress bar width
computed(() => {
  const progressPercentage = (answeredQuestions.value / totalQuestions.value) * 100
  return `${progressPercentage}%`
})

// Computed property to calculate the inner progress bar width
const innerProgressBarWidth = computed(() => {
  const innerProgressPercentage = (currentQuestion.value / totalQuestions.value) * 100
  return `${innerProgressPercentage}%`
})

// Computed property to check if all questions are done
const isAllQuestionsDone = computed(() => answeredQuestions.value === totalQuestions.value)
</script>
<template>
  <div class="language-Question-page">
    <div class="div">
      <img class="group-2" src="~/assets/images/timer.png" />
      <NuxtLink to="/language">
        <img class="group-3" src="~/assets/images/cross.png" />
      </NuxtLink>

      <!-- Timer display -->
      <div class="timer-container">
        <span id="timer">{{ formatTime(remainingTime) }}</span>
      </div>

      <div class="text-wrapper-11">English Proficiency Test</div>
    </div>
    <!-- Panel -->
    <div class="panel" :class="{ 'panel-done': isAllQuestionsDone }">
      <!-- Inner progress bar -->
      <div class="inner-progress-bar" :style="{ width: innerProgressBarWidth }"></div>
    </div>
    <!-- Question counter -->
    <div class="text-wrapper-12">{{ currentQuestion + ' / ' + totalQuestions }}</div>
    <div class="text-wrapper-14">Read the following passage and answer the question .</div>
    <p class="text-wrapper-15">
      "The importance of effective communication in the workplace cannot be overstated. Clear and concise communication
      leads to better teamwork and higher productivity. How can employees improve their communication skills?"
    </p>
    <div class="text-wrapper-16">Why is effective communication important in the workplace?</div>
    <textarea class="rectangle-9" name="w3review" rows="15" cols="70" placeholder="Write your answer here"></textarea>

    <div class="overlap-2"></div>
    <div class="div-wrapper">
      <!-- Link to the next question -->

      <button type="button" class="text-wrapper-19" @click="nextQuestion">Next</button>
    </div>
  </div>
</template>

<style scoped>
.language-Question-page {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1378px; /* Set the width */
  height: 740px; /* Set the height */
}

.language-Question-page .div {
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%; /* This will make the child div fill the width of the parent */
  height: 100%; /* This will make the child div fill the height of the parent */
  position: relative;
  overflow: hidden;
}
.timer-container {
  position: absolute;
  top: 40px;
  right: 80px;
  font-size: 20px;
  /* Add additional styles if needed */
}
.panel {
  position: absolute;
  top: 38px;
  left: 400px;
  width: 567px;
  height: 10px;
  flex-shrink: 0;
  background: #40bf9c;
}
.inner-progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--eden, #247158); /* Inner progress bar color */
}

.overall-progress-bar {
  position: absolute;
  top: 38px;
  left: 430px;
  width: 44px;
  height: 10px;
  flex-shrink: 0;
  background: var(--eden, #247158);
}

.language-Question-page .group-2 {
  position: absolute;
  top: 40px;
  right: 140px;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.language-Question-page .group-3 {
  position: absolute;
  top: 39px;
  left: 73px;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
}

.language-Question-page .text-wrapper-11 {
  position: absolute;
  top: 38px;
  left: 103px;
  letter-spacing: 0;
  line-height: 15.6px;
  white-space: nowrap;
  color: #6b7f99;
  font-family: 'Fira Sans';
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.6px; /* 120% */
}
.language-Question-page .text-wrapper-12 {
  position: absolute;
  top: 51px;
  left: 400px;
  width: 213px;
  color: #6b7f99;
  font-family: 'Fira Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.6px; /* 120% */
}
.language-Question-page .text-wrapper-13 {
  position: absolute;
  width: 213px;
  top: 34px;
  right: 20px;
  color: #6b7f99;
  font-family: 'Fira Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21.6px; /* 120% */
}
.language-Question-page .text-wrapper-14 {
  position: absolute;
  top: 107px;
  left: 405px;
  color: #2d3846;
  font-family: 'Fira Sans';
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 37.5px; /* 150% */
  width: 632px;
}
.language-Question-page .text-wrapper-15 {
  position: absolute;
  width: 454px;
  left: 409px;
  top: 153px;
  color: #2d3846;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.language-Question-page .text-wrapper-16 {
  position: absolute;
  top: 268px;
  left: 405px;
  width: 632px;
  color: #000;
  font-family: 'Fira Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 37.5px; /* 187.5% */
}

.language-Question-page .overlap-2 {
  position: absolute;
  width: 1378px;
  height: 120px;
  flex-shrink: 0;
  top: 627px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px #3e4f661a;
}

.language-Question-page .rectangle-9 {
  position: absolute;
  top: 308px;
  left: 403px;
  width: 567px;
  height: 264px;
  flex-shrink: 0;
  border-radius: 4px;
  background: rgba(217, 217, 217, 0.28);
}

.language-Question-page .text-wrapper-19 {
  position: absolute;
  width: 76px;
  top: 12px;
  right: 20px;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
}

.language-Question-page .div-wrapper {
  position: absolute;
  top: 668px;
  left: 1056px;
  width: 124px;
  height: 41px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--new-mix-button-color, linear-gradient(218deg, #172554 -5.84%, #1e40af 106.73%));
  box-shadow: 0px 8px 21px 0px rgba(0, 0, 0, 0.16);
}
</style>
