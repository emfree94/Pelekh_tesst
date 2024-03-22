import { Field, ErrorMessage } from 'formik'
import { Button } from './Button'

export const ForgotPassword = () => {
  return (
    <>
      <Field
        placeholder="Enter your email"
        name="email"
        type="email"
        className="w-full py-2 px-3 border h-12 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage
        name="email"
        component="div"
        className="text-red-500 text-sm mt-1 w-full"
      />
      <Button text="Forgot Password?" marginTop="25px" />
      <Button text="Cancel" marginTop="20px" type="cancel" />
    </>
  )
}