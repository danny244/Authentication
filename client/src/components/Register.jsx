import { Link } from "react-router-dom"
import { profile } from "../assets"
import styles from '../styles/username.module.css'
import { useFormik } from "formik"
import { registerValidation } from "../helpers/validate"
import { Toaster } from 'react-hot-toast';
import { useState } from "react"
import convertToBase64 from "../helpers/convert"


function Register() {

  const [file, setFile] = useState()

  const formik = useFormik(
    {
      initialValues: {
        email: "danny@gmail.com",
        username: "Divine",
        password: 'danny@24'
      },

      validate: registerValidation,
      validateOnBlur: false,
      validateOnChange: false,

      onSubmit: async values => {
        // added a new value into the formik values
        values = await Object.assign(values, { profile: file || "" }),
          console.log(values)
      }
    }
  )

  // formik dosent support file upload so we locally made ours
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64)
  }

  return (
    <div className="w-fit h-fit mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass} style={{ width: "49%" }} >
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happy to join you!
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>

            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile" className=' flex justify-center'>
                <img src={file || profile} className={styles.profile_img} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" name="profile" id="profile" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
              <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='Email' />
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
              <button type="submit" className="border bg-indigo-500 w-3/4 py-4 rounded-lg hover:bg-[#ff6a6a] duration-500 hover:duration-500 text-gray-50 text-xl shadow-sm text-center">Sign up</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Already Registered? <Link className='text-red-500' to="/">Login Now</Link></span>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default Register