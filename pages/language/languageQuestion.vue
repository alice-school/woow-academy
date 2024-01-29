<script setup lang="ts">
// Initial question count
const currentQuestion = ref(1)
const totalQuestions = ref(15) // Set the total number of questions

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

      <div class="text-wrapper-11">English Proficiency Test</div>
    </div>
    <div class="rectangle-1"></div>
    <div class="rectangle-4"></div>
    <div class="rectangle-5"></div>
    <div class="rectangle-6"></div>
    <div class="rectangle-7"></div>
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

.language-Question-page .rectangle-1 {
  position: absolute;
  top: 38px;
  left: 430px;
  width: 567px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #40bf9c;
}
.language-Question-page .rectangle-4 {
  position: absolute;
  top: 38px;
  left: 400px;
  width: 44px;
  height: 10px;
  flex-shrink: 0;
  background: var(--eden, #247158);
}
.language-Question-page .rectangle-5 {
  position: absolute;
  top: 38px;
  width: 150px;
  height: 10px;
  flex-shrink: 0;
  background: #40bf9c;
}
.language-Question-page .rectangle-6 {
  position: absolute;
  top: 38px;
  width: 150px;
  height: 10px;
  flex-shrink: 0;
  background: #40bf9c;
}
.language-Question-page .rectangle-7 {
  position: absolute;
  top: 38px;
  width: 150px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 0px 14px 14px 0px;
  background: #40bf9c;
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
