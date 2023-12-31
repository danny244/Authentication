import UserModel from '../model/User.model.js'
import bcrypt from 'bcrypt'


/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
export default async function register(req, res) {
  try {

    const { username, password, profile, email } = req.body;

    await existUsername(username);

    // checking if the user  name exists

    //check for existing email
    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email }, function (err, email) {
        if (err) reject(new Error(err));
        if (user) reject({ error: "please use a unique Email" });

        // else if email dosent exist
        resolve();
      })
    })

    Promise.all(existUsername, existEmail)
      .then(() => {
        if (password) {
          bcrypt.hash(password, 10)
            .then(hashedPassword => {

              const user = new UserModel({
                username,
                password: hashedPassword,
                profile: profile || '',
                email
              })

              // return saved result as a response
              user.save()
                .then(result => res.status(201).send({ msg: 'user registered successfully' }))
                .catch(error => res.status(500).send({ error }))

            })
            .catch(error => {
              return res.status(500).send({
                error: "Unabe to hash password"
              })
            })
        }
      })
      .catch(error => {
        return res.status(500).send({ error })
      })

  } catch (error) {
    return res.status(500).send(error)
  }
}

const existUsername = (username) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ username }, (err, user) => {
      if (err) reject(new Error(err));
      if (user) reject({ error: "please use a unique username" });

      // else if username dosent exist
      resolve();
    })
  })
}


/** POST: http://localhost:8080/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
export async function login(req, res) {
  response.json("login route")
}

/** GET: http://localhost:8080/api/user/example123 */
export async function getUser(req, res) {
  res.json("getUser route")
}


/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export async function updateUser(req, res) {
  res.json("updateUser route")
}


/** GET: http://localhost:8080/api/generateOTP */
export async function generateOtp(req, res) {
  res.json("generateOtp route")
}


/** GET: http://localhost:8080/api/verifyOTP */
export async function verifyOtp(req, res) {
  res.json("verifyOtp route")
}


// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res) {
  res.json("createResetSession route")
}



// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res) {
  res.json("resetPassword route")
}