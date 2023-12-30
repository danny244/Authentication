import toast from 'react-hot-toast';

// VALIDATE USERNAME
// This function is called to validate the username.
// It returns an object containing errors (if any).
export async function usernameValidate(values) {
  // Initialize the errors object.
  const errors = usernameVerify({}, values);

  // Return the errors object.
  return errors;
}


// VALIDATE USERNAME
// This function performs the actual validation of the username.
// It takes an error object and the input values as parameters.
function usernameVerify(error = {}, values) {
  // Check if the username is not provided (empty or undefined).
  if (!values.username) {
    // If the username is not provided, set an error message using toast.
    error.username = toast.error("Username is Required...!");

    // Check if the username contains whitespace characters.
  } else if (values.username.includes(" ")) {
    // If the username contains whitespace characters, set an error message using toast.
    error.username = toast.error("Invalid username. No spaces allowed!");
  }

  // Return the error object.
  return error;
}





// VALIDATE PASSWORD
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values)

  return errors
}


// VALIDATE PASSWORD
function passwordVerify(errors = {}, values) {

  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  }
  else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!")
  }
  else if (values.password.length < 4) {
    errors.password = toast.error("Password must be more that 4 characters")
  }
  else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special characters")

  }

  return errors
}





// VALIDATE RESET PASSWORD
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("passwoed not match")
  }

  return errors
}





//VALIDATE REGISTER FORM
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors
}





// VALIDATE EMAIL
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!")
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!")
  }

  return error;
}




// VALIDATE PROFILE PAGE
export async function profileValidation(values) {
  const errors = emailVerify({}, values);

  return errors
}
