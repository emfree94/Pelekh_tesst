import React from 'react'
import { FormHeader } from '../components/FormHeader'
import { FormLogin } from '../components/Auth/FormLogin'
import * as Yup from 'yup'
import googleIcon from '../assets/icons/google.svg'
import githubIcon from '../assets/icons/github.svg'

export const LoginPage = () => {
  
  const schemaValidation = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too short password!')
      .max(20, 'Too long password!')
      .required('Password is required'),
    email: Yup.string()
      .min(15, 'Too short email!')
      .max(30, 'Too long email!')
      .email('Invalid email')
      .required('Email is required'),
  })

  const initialValues = { email: '', password: '' }

  return (
    <div className="w-full flex justify-center px-3.5">
      <div className="max-w-[400px] w-full flex justify-center flex-col">
        <FormHeader titleText="Log in to your account" />
        {/* <GoogleAndGitForm /> */}
        <div className="flex w-full h-12 justify-between mt-10">
          <div className=" flex justify-center items-center w-48 h-full border-[1.2px] border-[#D3D8DC] rounded-md cursor-pointer">
            <img className="mr-[10px]" src={googleIcon} alt="google-icon" />
            Google
          </div>
          <div className="flex justify-center items-center w-48 h-full border-[1.2px] border-[#D3D8DC] rounded-md cursor-pointer">
            <img className="mr-[10px]" src={githubIcon} alt="github-icon" />
            Github
          </div>
        </div>
        <div className="w-full font-medium text-xs flex justify-center text-[#BEC5CC] relative mt-[30px]">
          <p className="font-medium text-xs text-[#BEC5CC pl-[5px] pr-[5px] bg-white z-10">
            OR
          </p>
          <span className="w-full h-[1px] bg-[#E3E6E9] absolute top-1/2"></span>
        </div>
        <FormLogin
          schemaValidation={schemaValidation}
          initialValues={initialValues}
        />
      </div>
    </div>
  )
}
