import React, { useCallback } from 'react'

export const useCounter = (initialValue: number) => {
  const [count, setCount] = React.useState(initialValue)

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  return {count, increment};
}