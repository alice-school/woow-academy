import validator from 'validator'

interface CvProfileInfo {
  addressID: string
  userID: string
  cvID: string
  dob: string
  gender: string
  profile_img: string
  about: string
  points: 0
  lineOne: string
  lineTwo: string
  city: string
  postCode: string
}

const validateCvProfile = (cvProfile: CvProfileInfo): { isInvalid: boolean; errors: any } => {
  const errors: any = {}

  const cvProfileInformation: CvProfileInfo = cvProfile

  //   Date of Birth Validation
  if (validator.isEmpty(cvProfileInformation.dob) && validator.isEmpty(cvProfileInformation.dob.trim())) {
    errors.dob = 'Date of Birth is required'
  } else if (!validator.isDate(cvProfileInformation.dob)) {
    errors.dob = 'Invalid Date of Birth'
  }

  //   Address Validation
  if (validator.isEmpty(cvProfileInformation.lineOne) && validator.isEmpty(cvProfileInformation.lineOne.trim())) {
    errors.lineOne = 'Address is required'
  } else if (cvProfileInformation.lineOne.length < 3) {
    errors.lineOne = 'Address should be more than 3 characters'
  }

  //   City Validation
  if (validator.isEmpty(cvProfileInformation.city) && validator.isEmpty(cvProfileInformation.city.trim())) {
    errors.city = 'City is required'
  } else if (cvProfileInformation.city.length < 3) {
    errors.city = 'City should be more than 3 characters'
  }

  //   Post Code Validation
  if (validator.isEmpty(cvProfileInformation.postCode) && validator.isEmpty(cvProfileInformation.postCode.trim())) {
    errors.postCode = 'Post Code is required'
  } else if (cvProfileInformation.postCode.length < 3) {
    errors.postCode = 'Post Code should be more than 3 characters'
  }

  // profile_img Validation
  if (
    validator.isEmpty(cvProfileInformation.profile_img) &&
    validator.isEmpty(cvProfileInformation.profile_img.trim())
  ) {
    errors.profile_img = 'Profile Image is required'
  }

  //   about Validation
  if (validator.isEmpty(cvProfileInformation.about) && validator.isEmpty(cvProfileInformation.about.trim())) {
    errors.about = 'About is required'
  } else if (cvProfileInformation.about.length < 3) {
    errors.about = 'About should be more than 3 characters'
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors,
  }
}

export default validateCvProfile
