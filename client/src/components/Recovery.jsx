import styles from '../styles/username.module.css'
import { Toaster } from 'react-hot-toast';


function Recovery() {



  return (
    <div className="w-fit h-fit mx-auto">

      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">

        <div className={styles.glass} >
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recover password
            </span>
          </div>

          <form className='pt-10 flex flex-col items-center justify-center '>

            <div className="input text-center flex flex-col justify-center items-center gap-6">
              <span className='py-4 text-sm text-center text-gray-500'>Enter 6 digit OTP sent to your email address</span>
              <input className={styles.textbox} type="number" placeholder='OTP' />
            </div>

            <div className="textbox mt-6 w-full flex flex-col items-center justify-center">
              <button type="submit" className="border bg-indigo-500 w-3/4 py-4 rounded-lg hover:bg-[#ff6a6a] duration-500 hover:duration-500 text-gray-50 text-xl shadow-sm text-center">Sign in</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Can&apos;t get OTP? <button type='button' className='text-red-500'>Resend</button></span>
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}
export default Recovery