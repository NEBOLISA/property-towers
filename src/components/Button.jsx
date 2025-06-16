import React from 'react'

const Button = ({text, onclick,textcolor}) => {
  return (
    <button
      type='button'
      className={`py-[10px] px-4 bg-[#efe204] text-${textcolor || "black"} w-[110px] hover:scale-95 transition-all duration-300 cursor-pointer`}
      onClick={onclick && onclick}
    >
      {text || 'button'}
    </button>
  )
}

export default Button
