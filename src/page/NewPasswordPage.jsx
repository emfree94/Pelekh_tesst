import React from 'react'
import { FormHeader } from '../components/FormHeader'
import { FormLogin } from '../components/Auth/FormLogin'
import * as Yup from 'yup'

export const NewPasswordPage = () => {

  const schemaValidation = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too short password!')
      .max(20, 'Too long password!')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .min(8, 'Too short password!')
      .max(20, 'Too long password!')
      .required('Password is required'),
  })

  const initialValues = { password: '', confirmPassword: '' }

  return (
    <div className="w-full flex justify-center px-3.5">
      <div className="max-w-[400px] w-full flex justify-center flex-col">
        <FormHeader titleText="Create new Password?" />
        {/* <GoogleAndGitForm /> */}
        <FormLogin
          type="newPassword"
          schemaValidation={schemaValidation}
          initialValues={initialValues}
        />
      </div>
    </div>
  )
}
