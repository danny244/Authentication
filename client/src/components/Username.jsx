import { Link } from "react-router-dom"
import { profile } from "../assets"
import styles from '../styles/username.module.css'
import { useFormik } from "formik"
import { usernameValidate } from "../helpers/validate"
import { Toaster } from 'react-hot-toast';


function Username() {

  const formik = useFormik(
    {
      initialValues: {
        username: ''
      },

      validate: usernameValidate,
      validateOnBlur: false,
      validateOnChange: false,

      onSubmit: async values => {
        console.log(values)
      }
    }
  )

  return (
    <div className="w-fit h-fit mx-auto">

      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">

        <div className={styles.glass} >
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by Connecting with us
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={profile} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
              <button type="submit" className="border bg-indigo-500 w-3/4 py-4 rounded-lg hover:bg-[#ff6a6a] duration-500 hover:duration-500 text-gray-50 text-xl shadow-sm text-center">Lets Go</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}
export default Username