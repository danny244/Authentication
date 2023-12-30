import { Link } from "react-router-dom"
import { profile } from "../assets"
import styles from '../styles/username.module.css'
import extend from '../styles/profile.module.css'
import { useFormik } from "formik"
import { profileValidation } from "../helpers/validate"
import { Toaster } from 'react-hot-toast';
import { useState } from "react"
import convertToBase64 from "../helpers/convert"


function Profile() {

  const [file, setFile] = useState()

  const formik = useFormik(
    {
      initialValues: {
        firstName: "",
        lastName: "",
        mobile: "",
        address: "",
        email: "danny@gmail.com",
      },

      validate: profileValidation,
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
        <div className={`${styles.glass} ${extend.glass}`} style={{ width: "20%" }} >
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Profiles</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can update the details
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>

            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile" className=' flex justify-center'>
                <img src={file || profile} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar" />
              </label>
              <input onChange={onUpload} type="file" name="profile" id="profile" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input {...formik.getFieldProps('firstName')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='First name' />
                <input {...formik.getFieldProps('lastName')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Last name' />
              </div>

              <div className="name flex w-3/4 gap-10">
                <input {...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Mobile No.' />
                <input {...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type="email" placeholder='Email' />
              </div>

              <input {...formik.getFieldProps('address')} className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Address' />
              <button type="submit" className="border bg-indigo-500 w-3/4 py-4 rounded-lg hover:bg-[#ff6a6a] duration-500 hover:duration-500 text-gray-50 text-xl shadow-sm text-center">Update</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>come back later <Link className='text-red-500' to="/">Log out</Link></span>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default Profile