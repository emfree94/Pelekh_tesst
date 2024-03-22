import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from '../Button'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../../hooks/useAuth'
import { ForgotPassword } from '../ForgotPassword'
import { NewPassword } from '../NewPassword'
import passwordIcon from '../../assets/icons/passwordIcon.svg'

export const FormLogin = ({ type, schemaValidation, initialValues }) => {
  const [showPassword, setShowPassword] = useState(false)
  const { handleLogin, handleNewPassword, handleForgotPassword } = useAuth()

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)
    if (type === 'forgot') {
      await handleForgotPassword(values)
    } else if (type === 'newPassword') {
      await handleNewPassword(values)
    } else {
      await handleLogin(values)
    }
    setSubmitting(false)
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={schemaValidation}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col items-center mt-[30px]">
          {type === 'forgot' && <ForgotPassword />}
          {type === 'newPassword' && (
            <NewPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          )}
          {!type && (
            <>
              <Field
                placeholder="Email"
                name="email"
                type="email"
                className="w-full py-2 px-3 border h-12 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1 w-full"
              />
              <div className="w-full relative mt-[25px]">
                <Field
                  placeholder="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full py-2 px-3 h-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <img
                  className="absolute right-[14px] top-[30%] cursor-pointer"
                  src={passwordIcon}
                  alt="Password icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1 w-full"
              />
              <Link
                to="/forgot-password"
                className=" w-full text-right text-[#316FEA] text-sm font-medium mt-[15px] cursor-pointer"
              >
                Forgot your password?
              </Link>
              <Button text="Log in to Qencode" marginTop="30px" />
              <div className="flex text-sm mt-[20px]">
                Is your company new to Qencode?
                <span className="text-[#316FEA] ml-[4px] cursor-pointer">
                  Sign up
                </span>
              </div>
            </>
          )}
        </Form>
      </Formik>
    </>
  )
}
