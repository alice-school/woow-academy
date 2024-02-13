<script lang="ts" setup>
definePageMeta({
  layout: 'user',
})
</script>

<template>
  <div class="learn-page">
    <div class="div">
      <NuxtLink to="/courseDetails">
        <div class="overlap">
          <img class="IMAGE" src="~/assets/images/IMAGE.png" />
          <div class="text-wrapper">JavaScript</div>
        </div>
      </NuxtLink>
      <div class="overlap-group">
        <img class="IMAGE" src="~/assets/images/cr-python.png" />
        <div class="text-wrapper-2">Python for Data Science</div>
      </div>
      <div class="overlap-2">
        <img class="img" src="~/assets/images/cr-python.png" />
        <div class="text-wrapper-3">Intermediate Python</div>
      </div>
      <div class="overlap-3">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-4">SQL</div>
      </div>
      <div class="overlap-4">
        <img class="IMAGE" src="~/assets/images/cr-python.png" />
        <div class="text-wrapper-5">Python for Beginners</div>
      </div>
      <div class="overlap-5">
        <img class="img" src="~/assets/images/cr-c.png" />
        <div class="text-wrapper-6">C#</div>
      </div>
      <div class="overlap-6">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-7">Angular + NestJS</div>
      </div>
      <div class="overlap-7">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-8">Swift 4</div>
      </div>
      <div class="overlap-8">
        <img class="img" src="~/assets/images/cr-python.png" />
        <div class="text-wrapper-9">Python for Finance</div>
      </div>
      <div class="overlap-9">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-10">Java</div>
      </div>
      <div class="overlap-10">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-11">C++</div>
      </div>
      <div class="overlap-11">
        <img class="img" src="~/assets/images/html.png" />
        <div class="text-wrapper-12">Python Core</div>
      </div>
      <div class="overlap-12">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-13">React + Redux</div>
      </div>
      <div class="overlap-13">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-14">CSS</div>
      </div>
      <div class="overlap-14">
        <img class="img" src="~/assets/images/html.png" />
        <div class="text-wrapper-15">Coding for Marketers</div>
      </div>
      <div class="overlap-15">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-16">PHP</div>
      </div>
      <div class="overlap-16">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-17">Kotlin</div>
      </div>
      <div class="overlap-17">
        <img class="img" src="~/assets/images/cr-python.png" />
        <div class="text-wrapper-18">Python Data Structures</div>
      </div>
      <div class="overlap-18">
        <img class="IMAGE-2" src="~/assets/images/html.png" />
        <div class="text-wrapper-19">Game Development with JS</div>
      </div>
      <div class="overlap-19">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-20">Ruby</div>
      </div>
      <div class="overlap-20">
        <img class="img" src="~/assets/images/html.png" />
        <div class="text-wrapper-21">Go</div>
      </div>
      <div class="overlap-21">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-22">Data Science</div>
      </div>
      <div class="overlap-22">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-23">R</div>
      </div>
      <div class="overlap-23">
        <img class="img" src="~/assets/images/html.png" />
        <div class="text-wrapper-24">Machine Learning</div>
      </div>
      <div class="overlap-24">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-25">Responsive Web Design</div>
      </div>
      <div class="overlap-25">
        <img class="IMAGE-2" src="~/assets/images/html.png" />
        <div class="text-wrapper-26">Web Development Fundamentals</div>
      </div>
      <div class="overlap-26">
        <img class="img" src="~/assets/images/html.png" />
        <div class="text-wrapper-27">jQuery</div>
      </div>
      <div class="overlap-27">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-28">C</div>
      </div>
      <div class="overlap-28">
        <img class="IMAGE" src="~/assets/images/html.png" />
        <div class="text-wrapper-29">JavaScript</div>
      </div>
      <div class="text-wrapper-30">My Courses</div>
    </div>
  </div>
</template>

<style scoped>
.learn-page {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.learn-page .div {
  background-color: #ffffff;
  overflow: hidden;
  width: 1366px;
  height: 3025px;
  position: relative;
}

.learn-page .overlap {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 240px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .IMAGE {
  top: 49px;
  left: 96px;
  position: absolute;
  width: 88px;
  height: 88px;
  object-fit: cover;
}

.learn-page .text-wrapper {
  position: absolute;
  width: 50px;
  top: 145px;
  left: 113px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-group {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 240px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-2 {
  position: absolute;
  width: 217px;
  top: 145px;
  left: 29px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-2 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 240px;
  left: 841px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .img {
  top: 49px;
  left: 97px;
  position: absolute;
  width: 88px;
  height: 88px;
  object-fit: cover;
}

.learn-page .text-wrapper-3 {
  position: absolute;
  width: 188px;
  top: 145px;
  left: 44px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-3 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 488px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-4 {
  position: absolute;
  width: 35px;
  top: 145px;
  left: 120px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-4 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 488px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-5 {
  width: 192px;
  left: 41px;
  position: absolute;
  top: 145px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-5 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 488px;
  left: 841px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-6 {
  width: 22px;
  left: 126px;
  position: absolute;
  top: 145px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-6 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 736px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-7 {
  position: absolute;
  width: 150px;
  top: 145px;
  left: 63px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-7 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 736px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-8 {
  position: absolute;
  width: 62px;
  top: 145px;
  left: 106px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-8 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 736px;
  left: 841px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-9 {
  width: 170px;
  left: 53px;
  position: absolute;
  top: 145px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-9 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 984px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-10 {
  width: 38px;
  left: 119px;
  position: absolute;
  top: 145px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-10 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 984px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-11 {
  width: 31px;
  left: 122px;
  position: absolute;
  top: 145px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-11 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 984px;
  left: 841px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-12 {
  position: absolute;
  width: 110px;
  top: 145px;
  left: 82px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-12 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1232px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-13 {
  position: absolute;
  width: 128px;
  top: 145px;
  left: 73px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-13 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1232px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-14 {
  position: absolute;
  width: 34px;
  top: 145px;
  left: 120px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-14 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1232px;
  left: 841px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-15 {
  position: absolute;
  width: 191px;
  top: 145px;
  left: 42px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-15 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1480px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-16 {
  width: 37px;
  left: 119px;
  position: absolute;
  top: 145px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-16 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1480px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-17 {
  width: 54px;
  top: 145px;
  left: 110px;
  font-family: 'Poppins-Regular', Helvetica;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  line-height: 22px;
  position: absolute;
  font-weight: 400;
  letter-spacing: 0;
}

.learn-page .overlap-17 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1480px;
  left: 841px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-18 {
  position: absolute;
  width: 211px;
  top: 145px;
  left: 32px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-18 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1728px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .IMAGE-2 {
  top: 38px;
  left: 96px;
  position: absolute;
  width: 88px;
  height: 88px;
  object-fit: cover;
}

.learn-page .text-wrapper-19 {
  position: absolute;
  width: 223px;
  top: 134px;
  left: 26px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-19 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1728px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-20 {
  position: absolute;
  width: 46px;
  top: 145px;
  left: 114px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-20 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1728px;
  left: 841px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-21 {
  position: absolute;
  width: 25px;
  top: 145px;
  left: 125px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-21 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1976px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-22 {
  position: absolute;
  width: 116px;
  top: 145px;
  left: 79px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-22 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1976px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-23 {
  width: 12px;
  left: 131px;
  position: absolute;
  top: 145px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-23 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 1976px;
  left: 841px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-24 {
  position: absolute;
  width: 160px;
  top: 145px;
  left: 58px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-24 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 2224px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-25 {
  position: absolute;
  width: 215px;
  top: 145px;
  left: 30px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-25 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 2224px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-26 {
  position: absolute;
  width: 166px;
  top: 134px;
  left: 54px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-26 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 2224px;
  left: 841px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-27 {
  position: absolute;
  width: 60px;
  top: 145px;
  left: 108px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-27 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 2472px;
  left: 244px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-28 {
  width: 11px;
  left: 132px;
  position: absolute;
  top: 145px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .overlap-28 {
  position: absolute;
  width: 275px;
  height: 224px;
  top: 2472px;
  left: 543px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px -1px #00000040;
}

.learn-page .text-wrapper-29 {
  width: 92px;
  left: 91px;
  position: absolute;
  top: 145px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #2d3846;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
}

.learn-page .text-wrapper-30 {
  position: absolute;
  width: 194px;
  top: 151px;
  left: 583px;
  font-family: 'Poppins-Regular', Helvetica;
  font-weight: 400;
  color: #222222;
  font-size: 30px;
  text-align: center;
  letter-spacing: 1.2px;
  line-height: 48px;
}

.learn-page .header {
  width: 1446px;
  top: -188px;
  left: -14px;
  position: absolute;
  height: 278px;
}

.learn-page .overlap-29 {
  position: relative;
  width: 1444px;
  height: 278px;
}

.learn-page .overlap-group-wrapper {
  width: 1444px;
  top: 0;
  left: 0;
  position: absolute;
  height: 278px;
}

.learn-page .overlap-group-2 {
  position: relative;
  width: 1366px;
  height: 85px;
  top: 188px;
  left: 14px;
  background-size: 100% 100%;
}

.learn-page .rectangle {
  width: 1366px;
  height: 85px;
  position: absolute;
  top: 0;
  left: 0;
}

.learn-page .mask-group {
  position: absolute;
  width: 46px;
  height: 48px;
  top: 19px;
  left: 1300px;
}

.learn-page .group {
  width: 59px;
  top: 25px;
  left: 1180px;
  position: absolute;
  height: 20px;
}

.learn-page .group-2 {
  width: 16px;
  top: 0;
  left: 0;
  position: absolute;
  height: 20px;
}

.learn-page .text-wrapper-31 {
  top: 1px;
  left: 24px;
  text-align: center;
  line-height: normal;
  position: absolute;
  width: 33px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
}

.learn-page .woow-space {
  position: absolute;
  top: 194px;
  left: 117px;
  font-family: 'Poppins-Bold', Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 0;
  line-height: normal;
}

.learn-page .navbar {
  position: absolute;
  width: 740px;
  height: 20px;
  top: 219px;
  left: 336px;
}

.learn-page .text-wrapper-32 {
  width: 42px;
  left: 0;
  font-size: 15px;
  position: absolute;
  top: 0;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-33 {
  width: 58px;
  left: 54px;
  font-size: 16px;
  position: absolute;
  top: 0;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-34 {
  position: absolute;
  width: 123px;
  top: 0;
  left: 124px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-35 {
  position: absolute;
  width: 94px;
  top: 0;
  left: 259px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-36 {
  width: 33px;
  left: 365px;
  font-size: 16px;
  position: absolute;
  top: 0;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-37 {
  width: 27px;
  left: 409px;
  font-size: 15px;
  position: absolute;
  top: 0;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-38 {
  position: absolute;
  width: 56px;
  top: 0;
  left: 448px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-39 {
  position: absolute;
  width: 94px;
  top: 0;
  left: 517px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-40 {
  position: absolute;
  width: 100px;
  top: 0;
  left: 622px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .footer {
  position: absolute;
  width: 1404px;
  height: 227px;
  top: 2798px;
  left: 0;
  background-color: transparent;
}

.learn-page .rectangle-2 {
  width: 1361px;
  height: 1px;
  background-color: #6c7f9933;
  position: absolute;
  top: 0;
  left: 0;
}

.learn-page .overlap-30 {
  position: absolute;
  width: 1366px;
  height: 121px;
  top: 1px;
  left: 0;
  background-color: #1f1e28;
}

.learn-page .frame {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 45px;
  left: 25px;
}

.learn-page .frame-2 {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 45px;
  left: 237px;
}

.learn-page .frame-3 {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 45px;
  left: 448px;
}

.learn-page .frame-4 {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 45px;
  left: 660px;
}

.learn-page .frame-5 {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 45px;
  left: 871px;
}

.learn-page .frame-6 {
  position: absolute;
  width: 130px;
  height: 40px;
  top: 41px;
  left: 1076px;
}

.learn-page .frame-7 {
  position: absolute;
  width: 130px;
  height: 40px;
  top: 41px;
  left: 1216px;
}

.learn-page .text-wrapper-41 {
  position: absolute;
  width: 90px;
  top: 42px;
  left: 75px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-42 {
  position: absolute;
  width: 101px;
  top: 42px;
  left: 287px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .p {
  position: absolute;
  width: 91px;
  top: 42px;
  left: 498px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-43 {
  position: absolute;
  width: 73px;
  top: 42px;
  left: 710px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-44 {
  position: absolute;
  width: 73px;
  top: 42px;
  left: 921px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .overlap-31 {
  position: absolute;
  width: 1366px;
  height: 105px;
  top: 122px;
  left: 0;
  background-color: #18171d;
}

.learn-page .overlap-group-3 {
  position: absolute;
  width: 75px;
  height: 22px;
  top: 40px;
  left: 1099px;
}

.learn-page .frame-8 {
  position: absolute;
  width: 22px;
  height: 22px;
  top: 0;
  left: 51px;
}

.learn-page .text-wrapper-45 {
  position: absolute;
  width: 75px;
  top: 3px;
  left: 0;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 16px;
}

.learn-page .text-wrapper-46 {
  width: 42px;
  top: 43px;
  left: 25px;
  font-family: 'Fira Sans-Regular', Helvetica;
  color: #ffffff;
  font-size: 15px;
  line-height: 19.2px;
  position: absolute;
  font-weight: 400;
  letter-spacing: 0;
}

.learn-page .text-wrapper-47 {
  position: absolute;
  width: 58px;
  top: 43px;
  left: 79px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-48 {
  position: absolute;
  width: 123px;
  top: 43px;
  left: 149px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-49 {
  position: absolute;
  width: 94px;
  top: 43px;
  left: 284px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-50 {
  position: absolute;
  width: 33px;
  top: 43px;
  left: 390px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-51 {
  position: absolute;
  width: 27px;
  top: 43px;
  left: 434px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-52 {
  width: 56px;
  top: 43px;
  left: 473px;
  font-family: 'Fira Sans-Regular', Helvetica;
  color: #ffffff;
  font-size: 16px;
  line-height: 19.2px;
  position: absolute;
  font-weight: 400;
  letter-spacing: 0;
}

.learn-page .text-wrapper-53 {
  position: absolute;
  width: 94px;
  top: 43px;
  left: 542px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-54 {
  position: absolute;
  width: 100px;
  top: 43px;
  left: 647px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
}

.learn-page .text-wrapper-55 {
  position: absolute;
  width: 26px;
  top: 43px;
  left: 1180px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 16px;
}

.learn-page .woow-space-2 {
  position: absolute;
  top: 27px;
  left: 1211px;
  font-family: 'Poppins-Bold', Helvetica;
  font-weight: 700;
  color: #ffffff;
  font-size: 15px;
  letter-spacing: 0;
  line-height: normal;
}

.learn-page .text-wrapper-56 {
  position: absolute;
  width: 28px;
  top: 43px;
  left: 1276px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 16px;
}

.learn-page .text-wrapper-57 {
  top: 43px;
  left: 1304px;
  line-height: 16px;
  position: absolute;
  width: 33px;
  font-family: 'Fira Sans-Regular', Helvetica;
  font-weight: 400;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
}
</style>
