<script setup lang="ts">
// Initial question count
const currentQuestion = ref(1)
const totalQuestions = ref(5) // Set the total number of questions

// Function to update the question counter and simulate moving to the next question
const nextQuestion = (): void => {
  if (currentQuestion.value < totalQuestions.value) {
    console.log(currentQuestion.value)
    currentQuestion.value = currentQuestion.value + 1
    // You can add additional logic to handle the link navigation here
  } else {
    alert('You have completed all questions.')
  }
}
</script>

<template>
  <div class="language-Question-page">
    <div class="div">
      <img class="group-3" src="~/assets/images/cross.png" />

      <div class="text-wrapper-1">Language Test</div>
    </div>
    <div class="rectangle-1"></div>
    <div class="rectangle-4"></div>
    <div class="rectangle-5"></div>
    <div class="rectangle-6"></div>
    <div class="rectangle-7"></div>
    <!-- Question counter -->
    <div class="text-wrapper-12">{{ currentQuestion + ' / ' + totalQuestions }}</div>
    <div class="div-wrapper">
      <!-- Link to the next question -->
      <button type="button" class="text-wrapper-19" @click="nextQuestion">Next</button>
    </div>
    <div class="text-wrapper-14">Read the following passage and answer the question .</div>
    <p class="text-wrapper-15">
      Many years ago, in a quaint village nestled between rolling hills and meandering streams, lived a wise old
      storyteller named Mr. Thompson. Every evening, children gathered around him, eager to hear tales of distant lands
      and magical adventures. Mr. Thompson's stories were not just entertainment; they were windows to imagination and
      lessons in courage.
    </p>
    <p class="text-wrapper-16">
      Reflect on the impact that storytellers like Mr. Thompson can have on the development of children's creativity and
      moral values. Provide specific examples from your own experiences or observations.
    </p>
    <textarea class="rectangle-9" name="w3review" rows="15" cols="70" placeholder="Write your answer here"></textarea>
    <div class="overlap-2"></div>
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

.language-Question-page .rectangle-1 {
  position: absolute;
  width: 567px;
  height: 10px;
  flex-shrink: 0;
  top: 38px;
  left: 360px;
  border-radius: 14px;
  background: #40bf9c;
}
.language-Question-page .rectangle-4 {
  position: absolute;
  top: 38px;
  left: 360px;
  width: 98px;
  height: 10px;
  flex-shrink: 0;
  background: var(--eden, #247158);
}
.language-Question-page .rectangle-5 {
  position: absolute;
  top: 38px;
  width: 98px;
  height: 10px;
  flex-shrink: 0;
  background: #40bf9c;
}
.language-Question-page .rectangle-6 {
  position: absolute;
  top: 38px;
  width: 98px;
  height: 10px;
  flex-shrink: 0;
  background: #40bf9c;
}
.language-Question-page .rectangle-7 {
  position: absolute;
  top: 38px;
  width: 98px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 0px 14px 14px 0px;
  background: #40bf9c;
}
.language-Question-page .group-3 {
  position: absolute;
  top: 49px;
  left: 73px;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
}
.language-Question-page .group-4 {
  position: absolute;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  top: 30px;
  right: 270px;
}
.language-Question-page .text-wrapper-1 {
  position: absolute;
  top: 48px;
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
  left: 363px;
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
  top: 87px;
  left: 300px;
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
  width: 754px;
  left: 300px;
  top: 133px;
  color: #2d3846;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.language-Question-page .text-wrapper-16 {
  position: absolute;
  top: 248px;
  left: 300px;
  width: 832px;
  color: #000;
  font-family: 'Fira Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 23.5px; /* 187.5% */
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
  left: 302px;
  width: 787px;
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
  top: 46px;
  right: 91px;
  width: 124px;
  height: 41px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--Tradewind, #6ab29b);
  box-shadow: 0px 8px 21px 0px rgba(0, 0, 0, 0.16);
}
</style>
