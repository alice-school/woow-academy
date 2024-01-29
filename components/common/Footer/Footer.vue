<script lang="ts" setup></script>

<template>
  <footer class="footer">
    <div class="social-media-section flex items-center">
      <div class="w-3/4 flex flex-row items-center">
        <div class="flex flex-row justify-between items-center text-left ml-3 mr-3">
          <img
            id="linkedin"
            alt="Frame"
            class="inline-block pl-2 pr-2"
            src="https://c.animaapp.com/tCwyjTgU/img/frame-7.svg"
          />
          <label class="inline-block pl-2 pr-2" for="linkedin">Follow us on Linkedin</label>
        </div>
        <div class="flex flex-row justify-between items-center text-left ml-3 mr-3">
          <img
            id="facebook"
            alt="Frame"
            class="inline-block pl-2 pr-2"
            src="https://c.animaapp.com/tCwyjTgU/img/frame-6.svg"
          />
          <label class="inline-block pl-2 pr-2" for="facebook">Check out our facebook</label>
        </div>
        <div class="flex flex-row justify-between items-center text-left ml-3 mr-3">
          <img
            id="twitter"
            alt="Frame"
            class="inline-block pl-2 pr-2"
            src="https://c.animaapp.com/tCwyjTgU/img/frame-5.svg"
          />
          <label class="inline-block pl-2 pr-2" for="twitter">See what we tweet about</label>
        </div>
        <div class="flex flex-row justify-between items-center text-left ml-3 mr-3">
          <img
            id="insta"
            alt="Frame"
            class="inline-block pl-2 pr-2"
            src="https://c.animaapp.com/tCwyjTgU/img/frame-4.svg"
          />
          <label class="inline-block pl-2 pr-2" for="insta">Join our instagram</label>
        </div>
        <div class="flex flex-row justify-between items-center text-left ml-3 mr-3">
          <img
            id="youtube"
            alt="Frame"
            class="inline-block pl-2 pr-2"
            src="https://c.animaapp.com/tCwyjTgU/img/frame-3.svg"
          />
          <label class="inline-block pl-2 pr-2" for="youtube">Watch our Youtube</label>
        </div>
      </div>
      <div class="w-1/4 flex flex-row justify-center items-center">
        <img alt="Frame" class="p-4" src="https://c.animaapp.com/tCwyjTgU/img/frame-2.svg" />
        <img alt="Frame" class="p-4" src="https://c.animaapp.com/tCwyjTgU/img/frame-1.svg" />
      </div>
    </div>
    <div class="navigation-section">
      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>Code Playground</li>
        <li>Top Learners</li>
        <li>Blog</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </ul>

      <div>
        <div class="flex flex-row text-white items-center mr-8">
          <img alt="Frame" class="frame-8" src="https://c.animaapp.com/tCwyjTgU/img/frame.svg" />
          <p class="pr-5">Made with by</p>
          <p class="pr-5 font-bold">
            WooW <br />
            Space
          </p>
          <p class="pr-2">| ©</p>
          <p class="pl-1">2023</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: transparent;
  height: 227px;
  left: 0;
  right: 0;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer .social-media-section {
  width: 100%;
  height: 122px;
  background-color: #1f1e28;
}

.footer .social-media-section label {
  color: #ffffff;
}

.footer .navigation-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #18171d;
  height: 105px;
  width: 100%;
}

.footer .navigation-section ul li {
  list-style: none;
  display: inline-block;
  padding: 10px;
  color: #ffffff;
}
</style>
