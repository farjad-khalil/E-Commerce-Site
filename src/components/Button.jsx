import React from 'react'

function Button({text,E_classes,onClick}) {
  return (
      <button className={`transition-all  hover:bg-black hover:text-white hover:border-neutral-700 border  text-center duration-300 p-1.5 rounded-lg bg-white text-black hover:cursor-pointer ${E_classes}`} onClick={onClick}>{text}</button>

  )
}

export default Button
