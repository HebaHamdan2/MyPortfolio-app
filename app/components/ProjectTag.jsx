import React from 'react'

export const ProjectTag = ({name,onClick,isSelected}) => {
  const buttonStyles = isSelected
 ? "text-white border-pink-300"
 : "text-[#ADB7BE] border-slate-600 hover:border-white";
    return (
      <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-1 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}
