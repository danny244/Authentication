import styles from '../styles/username.module.css'
import { useFormik } from "formik"
import { resetPasswordValidation } from "../helpers/validate"
import { Toaster } from 'react-hot-toast';


function Reset() {

  const formik = useFormik(
    {
      initialValues: {
        password: 'danny@24',
        confirm_pwd: ''
      },

      validate: resetPasswordValidation,
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
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter New Password
            </span>
          </div>

          <form className='py-10' onSubmit={formik.handleSubmit}>

            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='New Password' />
              <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="password" placeholder='Repeat new password' />
              <button type="submit" className="border bg-indigo-500 w-3/4 py-4 rounded-lg hover:bg-[#ff6a6a] duration-500 hover:duration-500 text-gray-50 text-xl shadow-sm text-center">Reset</button>
            </div>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Reset