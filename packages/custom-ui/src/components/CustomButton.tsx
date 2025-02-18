import React from 'react'

const CustomButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return <button>{ children }</button>
}

export default CustomButton