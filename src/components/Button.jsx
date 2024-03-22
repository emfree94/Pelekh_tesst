import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Button = ({ type, text, marginTop }) => {
  const navigate = useNavigate()

  return (
    <>
      {type === 'cancel' ? (
        <button
          onClick={() => navigate('/')}
          className={`w-full h-12 cursor-pointer text-[#060E1E]	bg-white  text-base	font-medium rounded-lg mt-[${marginTop}] border-[#D3D8DC] border-[1.2px]`}
        >
          Cancel
        </button>
      ) : (
        <button
          type="submit"
          className={`w-full h-12 cursor-pointer	 bg-[#316FEA] text-white text-base	font-medium rounded-lg mt-[${marginTop}]`}
        >
          {text}
        </button>
      )}
    </>
  )
}
