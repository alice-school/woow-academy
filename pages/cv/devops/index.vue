<template>
  <div class="container">
    <div class="header">
      <div class="full-name flex flex-row justify-between items-center w-full">
        <div>
          <span class="first-name">{{ cv.student.firstName }}</span>
          <span class="last-name">{{ cv.student.lastName }}</span>
        </div>

        <div class="yui-u">
          <div class="contact-info">
            <h3
              class="bg-[#54afe4] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center p-5 cursor-pointer"
            >
              Download PDF
            </h3>
          </div>
        </div>
      </div>
      <div class="contact-info">
        <span class="email">Email: </span>
        <span class="email-val">{{ cv.student.email }}</span>
        <span class="separator"></span>
        <span class="phone">Phone: </span>
        <span class="phone-val">{{ cv.student.phone }}</span>
      </div>

      <div class="about mb-5">
        <ul class="list-none">
          <li v-for="(socialmediaLink, index) in cv.socialMedia" :key="index" class="!inline-block pr-2">
            <NuxtLink
              :to="
                socialmediaLink.socialMediaName === 'GitHub'
                  ? socialmediaLink.socialMediaLink
                  : socialmediaLink.socialMediaName === 'LinkedIn'
                  ? socialmediaLink.socialMediaLink
                  : socialmediaLink.socialMediaName === 'Stack Overflow'
                  ? socialmediaLink.socialMediaLink
                  : ''
              "
              class="cursor-pointer !inline-block text-black"
              target="_blank"
            >
              <Icon
                :name="
                  socialmediaLink.socialMediaName === 'GitHub'
                    ? 'uil:github'
                    : socialmediaLink.socialMediaName === 'LinkedIn'
                    ? 'bxl:linkedin-square'
                    : socialmediaLink.socialMediaName === 'Stack Overflow'
                    ? 'bxl:stack-overflow'
                    : ''
                "
                class="frame-icon"
                color="black"
                size="20"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="about">
        <span class="position">DevOps Engineer</span>
        <span class="desc">
          {{ cv.objective.objectiveDescription }}
        </span>
      </div>
    </div>
    <div class="details">
      <div class="section">
        <div class="section__title">Experience</div>
        <div class="section__list" v-for="work in cv.workExperience" :key="work.workExperienceID">
          <div class="section__list-item mt-5">
            <div class="left">
              <div class="font-bold">{{ work.companyName }}</div>
              <div class="font-bold">{{ work.jobTitle }}</div>
              <div class="font-medium">{{ work.jobAddress }}</div>
              <div class="duration">{{ work.startDate }} - {{ work.endDate }}</div>
              <div class="description mt-3">{{ work.jobDescription }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section__title">Education</div>
        <div class="section__list" v-for="edu in cv.education" :key="edu.educationID">
          <div class="section__list-item mt-5">
            <div class="left">
              <div class="font-bold">{{ edu.institution }}</div>
              <div class="font-medium">{{ edu.course }}</div>
              <div class="duration">{{ edu.startDate }} - {{ edu.endDate }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section__title">Projects</div>
        <div class="section__list" v-for="project in cv.projects" :key="project.projectID">
          <div class="section__list-item mt-5">
            <div class="name">{{ project.projectName }}</div>
            <div class="text">
              {{ project.projectDescription }}
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section__title">Skills</div>
        <div class="skills">
          <div class="skills__item" v-for="skill in cv.skills" :key="skill.skillID">
            <div class="left">
              <h2 class="name">{{ skill.skillName }}</h2>
            </div>
            <div class="right">
              <input id="ck1" type="checkbox" :checked="parseInt(skill.skillLevel) >= 1 ? true : false" />

              <label for="ck1"></label>
              <input id="ck2" type="checkbox" :checked="parseInt(skill.skillLevel) >= 2 ? true : false" />

              <label for="ck2"></label>
              <input id="ck3" type="checkbox" :checked="parseInt(skill.skillLevel) >= 3 ? true : false" />

              <label for="ck3"></label>
              <input id="ck4" type="checkbox" :checked="parseInt(skill.skillLevel) >= 4 ? true : false" />
              <label for="ck4"></label>
              <input id="ck5" type="checkbox" :checked="parseInt(skill.skillLevel) >= 5 ? true : false" />
              <label for="ck5"></label>
              <input id="ck6" type="checkbox" :checked="parseInt(skill.skillLevel) >= 6 ? true : false" />
              <label for="ck6"></label>
              <input id="ck7" type="checkbox" :checked="parseInt(skill.skillLevel) >= 7 ? true : false" />
              <label for="ck7"></label>
              <input id="ck8" type="checkbox" :checked="parseInt(skill.skillLevel) >= 8 ? true : false" />
              <label for="ck8"></label>
              <input id="ck9" type="checkbox" :checked="parseInt(skill.skillLevel) >= 9 ? true : false" />
              <label for="ck9"></label>
              <input id="ck10" type="checkbox" :checked="parseInt(skill.skillLevel) >= 10 ? true : false" />
              <label for="ck10"></label>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section__title">Volunteer Experience</div>
        <div class="section__list" v-for="volunteer in cv.volunteerExperience" :key="volunteer.volunteerExperienceID">
          <div class="section__list-item mt-5">
            <div class="left">
              <div class="font-bold">{{ volunteer.organizationName }}</div>
              <div class="font-bold">{{ volunteer.role }}</div>
              <div class="duration font-medium">{{ volunteer.startDate }} - {{ volunteer.endDate }}</div>
              <div class="description font-medium">{{ volunteer.volunteerDescription }}</div>
            </div>
            <!-- <div class="right">
              <div class="name">{{ volunteer.organizationName }}</div>
              <div class="addr">{{ volunteer.role }}</div>
              <div class="duration">{{ volunteer.startDate }} - {{ volunteer.endDate }}</div>
              <div class="description">{{ volunteer.volunteerDescription }}</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cv = reactive({
  student: {
    userID: '2',
    firstName: 'Madhusha',
    lastName: 'Prasad',
    email: 'madushaprasad21@gmail.com',
    phone: '987654321',
    dob: '2000-05-20',
    userPassword: 'password123',
  },
  address: {
    addressID: '2',
    lineOne: '789',
    lineTwo: 'Street Name',
    city: 'New York',
    postCode: '10001',
  },
  cvProfile: {
    cvID: '2',
    profileImg: 'https://www.example.com/profile_image',
    about: 'I am passionate about creating responsive and user-friendly mobile',
    points: 8,
    gender: 'female',
  },
  objective: {
    objectiveID: '2',
    objectiveDescription: 'I aspire to become a mobile developer and contribute to innovative projects.',
  },
  education: [
    {
      educationID: '2',
      institution: 'Stanford University',
      course: 'Computer Engineering',
      startDate: '2019-09-01',
      endDate: '2023-06-01',
    },
    {
      educationID: '2',
      institution: 'Stanford University',
      course: 'Computer Engineering',
      startDate: '2019-09-01',
      endDate: '2023-06-01',
    },
  ],
  skills: [
    {
      skillID: '2',
      skillName: 'JavaScript',
      skillLevel: '8',
    },
    {
      skillID: '3',
      skillName: 'HTML',
      skillLevel: '5',
    },
    {
      skillID: '4',
      skillName: 'CSS',
      skillLevel: '6',
    },
    {
      skillID: '5',
      skillName: 'Node.js',
      skillLevel: '8',
    },
    {
      skillID: '2',
      skillName: 'React Native',
      skillLevel: '4',
    },
    {
      skillID: '2',
      skillName: 'IOS',
      skillLevel: '4',
    },
    {
      skillID: '2',
      skillName: 'Kotlin',
      skillLevel: '4',
    },
  ],
  socialMedia: [
    {
      socialMediaID: '2',
      socialMediaName: 'GitHub',
      socialMediaLink: 'https://github.com/janesmith',
    },
  ],
  workExperience: [
    {
      workExperienceID: '3',
      companyName: 'Apple Inc.',
      jobTitle: 'Front-end Developer',
      startDate: '2020-06-01',
      endDate: '2022-12-31',
      jobDescription: 'Developed user interfaces for web applications using modern front-end frameworks.',
      jobAddress: 'Cupertino, CA',
    },
    {
      workExperienceID: '4',
      companyName: 'Facebook',
      jobTitle: 'Full-stack Developer',
      startDate: '2023-01-01',
      endDate: '2024-03-01',
      jobDescription: 'Contributed to the development of various features across the entire stack of web applications.',
      jobAddress: 'Menlo Park, CA',
    },
  ],
  volunteerExperience: [
    {
      volunteerExperienceID: '2',
      organizationName: 'Code for America',
      role: 'Web Developer Volunteer',
      startDate: '2021-03-15',
      endDate: '2022-05-30',
      volunteerDescription: 'Worked on projects aimed at using technology for social good.',
    },
    {
      volunteerExperienceID: '2',
      organizationName: 'Code for America',
      role: 'Web Developer Volunteer',
      startDate: '2021-03-15',
      endDate: '2022-05-30',
      volunteerDescription: 'Worked on projects aimed at using technology for social good.',
    },
    {
      volunteerExperienceID: '2',
      organizationName: 'Code for America',
      role: 'Web Developer Volunteer',
      startDate: '2021-03-15',
      endDate: '2022-05-30',
      volunteerDescription: 'Worked on projects aimed at using technology for social good.',
    },
  ],
  projects: [
    {
      projectID: '2',
      projectName: 'E-commerce Website',
      projectDescription:
        'Developed a fully functional e-commerce website using React.js for the front end and Node.js for the back end.',
    },
    {
      projectID: '3',
      projectName: 'Portfolio Website',
      projectDescription:
        'Designed and developed a personal portfolio website to showcase skills, projects, and experience.',
    },
  ],
})
</script>

<style scoped>
.contact-info {
  margin-top: 7px;
}

html {
  height: 100%;
}
body {
  min-height: 100%;
  background: #eee;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
  line-height: 26px;
  padding-bottom: 50px;
}
.container {
  max-width: 700px;
  background: #fff;
  margin: 0px auto 0px;
  box-shadow: 1px 1px 2px #dad7d7;
  border-radius: 3px;
  padding: 40px;
  margin-top: 50px;
}
.header {
  margin-bottom: 30px;
}
.header .full-name > div > span {
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.header .first-name {
  font-weight: 700;
}
.header .last-name {
  font-weight: 300;
}
.header .contact-info {
  margin-bottom: 20px;
}
.header .email,
.header .phone {
  color: #999;
  font-weight: 300;
}
.header .separator {
  height: 10px;
  display: inline-block;
  border-left: 2px solid #999;
  margin: 0px 10px;
}
.header .position {
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  text-decoration: underline;
}
.details {
  line-height: 20px;
}
.details .section {
  margin-bottom: 40px;
}
.details .section:last-of-type {
  margin-bottom: 0px;
}
.details .section__title {
  letter-spacing: 2px;
  color: #54afe4;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.details .section__list-item {
  margin-bottom: 40px;
}
.details .section__list-item:last-of-type {
  margin-bottom: 0;
}
.details .left,
.details .right {
  vertical-align: top;
  display: inline-block;
}
.details .left {
  width: 60%;
}
.details .right {
  tex-align: right;
  width: 39%;
}
.details .name {
  font-weight: bold;
}
.details a {
  text-decoration: none;
  color: #000;
  font-style: italic;
}
.details a:hover {
  text-decoration: underline;
  color: #000;
}
.details .skills__item {
  margin-bottom: 10px;
}
.details .skills__item .right input {
  display: none;
}
.details .skills__item .right label {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #c3def3;
  border-radius: 20px;
  margin-right: 3px;
}
.details .skills__item .right input:checked + label {
  background: #79a9ce;
}
</style>
