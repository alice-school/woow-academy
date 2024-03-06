import validator from 'validator'

interface UserInfo {
  userID: string
  firstName: string
  lastName: string
  userName: string
  email: string
  phone: string
  dob: string
  userPassword: string
  confPassword: string
}

const validateUser = (user: UserInfo): { isInvalid: boolean; errors: any } => {
  const errors: any = {}

  const userInformation: UserInfo = user

  //   First Name Validation
  if (validator.isEmpty(userInformation.firstName) && validator.isEmpty(userInformation.firstName.trim())) {
    errors.firstName = 'First Name is required'
  } else if (!validator.isAlpha(userInformation.firstName.charAt(0)) && !validator.isAlpha(userInformation.firstName)) {
    errors.firstName = 'Start the first name with a capital letter and use only alphabets.'
  } else if (userInformation.firstName.length < 3) {
    errors.firstName = 'First Name should be more than 3 characters'
  }

  //   Last Name Validation

  if (validator.isEmpty(userInformation.lastName) && validator.isEmpty(userInformation.lastName.trim())) {
    errors.lastName = 'Last Name is required'
  } else if (!validator.isAlpha(userInformation.lastName.charAt(0)) && !validator.isAlpha(userInformation.lastName)) {
    errors.lastName = 'Start the last name with a capital letter and use only alphabets.'
  } else if (userInformation.lastName.length < 3) {
    errors.lastName = 'Last Name should be more than 3 characters'
  }

  //   User Name Validation
  if (validator.isEmpty(userInformation.userName) && validator.isEmpty(userInformation.userName.trim())) {
    errors.userName = 'User Name is required'
  } else if (userInformation.userName.length < 3) {
    errors.userName = 'User Name should be more than 3 characters'
  }

  //   Email Validation
  if (validator.isEmpty(userInformation.email) && validator.isEmpty(userInformation.email.trim())) {
    errors.email = 'Email is required'
  } else if (!validator.isEmail(userInformation.email)) {
    errors.email = 'Invalid Email'
  }

  //   Phone Number Validation
  if (validator.isEmpty(userInformation.phone) && validator.isEmpty(userInformation.phone.trim())) {
    errors.phone = 'Phone Number is required'
  } else if (!validator.isMobilePhone(userInformation.phone)) {
    errors.phone = 'Invalid Phone Number'
  }

  // //   Date of Birth Validation
  // if (validator.isEmpty(userInformation.dob) && validator.isEmpty(userInformation.dob.trim())) {
  //   errors.dob = 'Date of Birth is required'
  // } else if (!validator.isDate(userInformation.dob)) {
  //   errors.dob = 'Invalid Date of Birth'
  // }

  //   Password Validation
  if (validator.isEmpty(userInformation.userPassword) && validator.isEmpty(userInformation.userPassword.trim())) {
    errors.userPassword = 'Password is required'
  } else if (userInformation.userPassword.length < 6) {
    errors.userPassword = 'Password should be more than 6 characters'
  }

  //   Confirm Password Validation
  if (validator.isEmpty(userInformation.confPassword) && validator.isEmpty(userInformation.confPassword.trim())) {
    errors.confPassword = 'Confirm Password is required'
  } else if (userInformation.confPassword !== userInformation.userPassword) {
    errors.confPassword = 'Password does not match'
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors,
  }
}

export default validateUser
