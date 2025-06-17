import React from 'react'

const InputComponent = ({placeholder,type,leftIconPresent,mobile}) => {
    return (
      <div className={`${!mobile && "md:flex hidden"} flex items-center lg:w-max w-full`}>
           {leftIconPresent && <div className='w-9 h-10 bg-[#efe204] flex items-center justify-center'>$</div>}
          <input type={type || "text"} className={`md:w-[12rem] w-full h-10 focus:h-[42px] focus:shadow-xs focus:shadow-blue-300 bg-white pl-3 border-0 box-border   focus:outline-blue-300  focus:outline-1 placeholder:text-black/60`} placeholder={placeholder || "Search" }  />
          
      </div>

  )
}

export default InputComponent
