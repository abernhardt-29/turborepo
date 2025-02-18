import React, { useCallback } from 'react'

export const useCounter = () => {
  const [count, setCount] = React.useState(0)

  console.log("count: ", count)

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  return {count, increment};
}