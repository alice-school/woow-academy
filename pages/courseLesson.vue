<script setup lang="ts"></script>
<template>
  <div class="Course-lesson-page">
    <div class="div">
      <img class="group-3" src="~/assets/images/cross.png" />

      <div class="text-wrapper-11">Introduction to Databases</div>
    </div>
    <div class="rectangle-1"></div>
    <div class="rectangle-4"></div>
    <div class="rectangle-5"></div>
    <div class="rectangle-6"></div>
    <div class="rectangle-7"></div>
    <div class="text-wrapper-14">Welcome to SQL</div>
    <p class="text-wrapper-15">
      is a collection of data that is organized in a manner that facilitates ease of access, as well as efficient
      management and updating.
    </p>
    <p class="text-wrapper-17">A database is made up of tables that store relevant information.</p>
    <p class="text-wrapper-18">
      For example, you would use a database, if you were to create a website like YouTube, which contains a lot of
      information like videos, usernames, passwords, comments.
    </p>
    <textarea class="rectangle-9" name="w3review" rows="15" cols="70"></textarea>

    <div class="overlap-2"></div>
    <div class="div-wrapper">
      <!-- Link to the next question -->

      <button type="button" class="text-wrapper-19">Continue</button>
    </div>
  </div>
</template>

<style scoped>
.Course-lesson-page {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1378px; /* Set the width */
  height: 740px; /* Set the height */
}

.Course-lesson-page .div {
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%; /* This will make the child div fill the width of the parent */
  height: 100%; /* This will make the child div fill the height of the parent */
  position: relative;
  overflow: hidden;
}

.Course-lesson-page .rectangle-1 {
  position: absolute;
  top: 38px;
  left: 430px;
  width: 567px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 14px;
  background: var(--new-mix-button-color, linear-gradient(218deg, #172554 -5.84%, #1e40af 106.73%));
}
.Course-lesson-page .rectangle-4 {
  position: absolute;
  top: 38px;
  left: 400px;
  width: 44px;
  height: 10px;
  flex-shrink: 0;
  background: var(--new-mix-button-color, linear-gradient(218deg, #172554 -5.84%, #1e40af 106.73%));
}
.Course-lesson-page .rectangle-5 {
  position: absolute;
  top: 38px;
  width: 150px;
  height: 10px;
  flex-shrink: 0;
  background: var(--new-mix-button-color, linear-gradient(218deg, #172554 -5.84%, #1e40af 106.73%));
}
.Course-lesson-page .rectangle-6 {
  position: absolute;
  top: 38px;
  width: 150px;
  height: 10px;
  flex-shrink: 0;
  background: var(--new-mix-button-color, linear-gradient(218deg, #172554 -5.84%, #1e40af 106.73%));
}
.Course-lesson-page .rectangle-7 {
  position: absolute;
  top: 38px;
  width: 150px;
  height: 10px;
  flex-shrink: 0;
  border-radius: 0px 14px 14px 0px;
  background: var(--new-mix-button-color, linear-gradient(218deg, #172554 -5.84%, #1e40af 106.73%));
}
.Course-lesson-page .group-3 {
  position: absolute;
  top: 39px;
  left: 73px;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
}

.Course-lesson-page .text-wrapper-11 {
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
.Course-lesson-page .text-wrapper-12 {
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
.Course-lesson-page .text-wrapper-13 {
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
.Course-lesson-page .text-wrapper-14 {
  position: absolute;
  top: 85px;
  left: 405px;
  color: #2d3846;
  font-family: 'Fira Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 37.5px; /* 150% */
  width: 183px;
}
.Course-lesson-page .text-wrapper-15 {
  position: absolute;
  width: 524px;
  left: 409px;
  top: 136px;
  color: #2d3846;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.Course-lesson-page .text-wrapper-17 {
  position: absolute;
  width: 524px;
  left: 409px;
  top: 205px;
  color: #2d3846;
  font-family: 'Fira Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.Course-lesson-page .text-wrapper-18 {
  position: absolute;
  width: 534px;
  left: 409px;
  top: 248px;
  color: #2d3846;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}

.Course-lesson-page .overlap-2 {
  position: absolute;
  width: 1378px;
  height: 120px;
  flex-shrink: 0;
  top: 627px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 8px #3e4f661a;
}

.Course-lesson-page .rectangle-9 {
  position: absolute;
  top: 338px;
  left: 403px;
  width: 567px;
  height: 264px;
  flex-shrink: 0;
  border-radius: 4px;
  background: rgba(217, 217, 217, 0.28);
}

.Course-lesson-page .text-wrapper-19 {
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

.Course-lesson-page .div-wrapper {
  position: absolute;
  top: 668px;
  left: 849px;
  width: 124px;
  height: 41px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--new-mix-button-color, linear-gradient(218deg, #172554 -5.84%, #1e40af 106.73%));
  box-shadow: 0px 8px 21px 0px rgba(0, 0, 0, 0.16);
}
</style>
