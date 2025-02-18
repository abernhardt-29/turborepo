import React from 'react'

const CustomButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <button className="custom-button">{ children }</button>
}

export default CustomButton