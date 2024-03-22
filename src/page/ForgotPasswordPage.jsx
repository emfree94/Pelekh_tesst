import React from 'react'
import { FormHeader } from '../components/FormHeader'
import { FormLogin } from '../components/Auth/FormLogin'
import * as Yup from 'yup'

export const ForgotPasswordPage = () => {
  const schemaValidation = Yup.object().shape({
    email: Yup.string()
      .min(15, 'Too short email!')
      .max(30, 'Too long email!')
      .email('Invalid email')
      .required('Email is required'),
  })

  const initialValues = { email: '' }

  return (
    <div className="w-full flex justify-center px-3.5">
      <div className="max-w-[400px] w-full flex justify-center flex-col">
        <FormHeader titleText="Forgot Password?" />
        {/* <GoogleAndGitForm /> */}
        <FormLogin
          type="forgot"
          schemaValidation={schemaValidation}
          initialValues={initialValues}
        />
      </div>
    </div>
  )
}
