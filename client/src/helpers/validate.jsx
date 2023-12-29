import toast from 'react-hot-toast';

// This function is called to validate the username.
// It returns an object containing errors (if any).
export async function usernameValidate(values) {
  // Initialize the errors object.
  const errors = usernameVerify({}, values);

  // Return the errors object.
  return errors;
}

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
