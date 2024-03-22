import { Field, ErrorMessage } from 'formik'
import passwordIcon from '../assets/icons/passwordIcon.svg'
import { Button } from './Button'

export const NewPassword = ({ showPassword, setShowPassword }) => {
  return (
    <>
      <div className="w-full relative mt-[25px]">
        <label htmlFor="password">Password</label>
        <Field
          id="password"
          placeholder="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          className="w-full py-2 px-3 h-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <img
          className="absolute right-[14px] top-[53%] cursor-pointer"
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

      <div className="w-full relative mt-[25px]">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field
          id="confirmPassword"
          placeholder="Confirm Password"
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          className="w-full py-2 px-3 h-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <img
          className="absolute right-[14px] top-[53%] cursor-pointer"
          src={passwordIcon}
          alt="Password icon"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <ErrorMessage
        name="confirmPassword"
        component="div"
        className="text-red-500 text-sm mt-1 w-full"
      />
      <Button text="Reset Password" marginTop="25px" />
    </>
  )
}
