import { Router } from "express";

// initializing it
const router = Router();


// importing all controllers
import * as controller from '../controllers/appController.js'


// POST method
router.route("/register").post(controller.default) //register user
// router.route("/registerMail").post(); //send the email
router.route("/authenticate").post((req, res) => res.end); //authenticate theuser
router.route("/login").post(controller.login); //login into ap

//  GET method
router.route("/user/:username").get(controller.getUser); //get user with the user name
router.route("/generateOTP").get(controller.generateOtp); // generate random OTP
router.route("/verifyOTP").get(controller.verifyOtp); // verify generated OTP
router.route("/createResetSession").get(); // rest all the variables


// PUT method
router.route("/updateuser").put(controller.updateUser); // will be used to update the user profile
router.route("/resetPassword").put(controller.resetPassword); // will be used to reset password

export default router;