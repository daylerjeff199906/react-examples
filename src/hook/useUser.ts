import { useState } from 'react'

export function useUser() {
  const [count, setCount] = useState(0)

  return {
    count,
    setCount,
  }
}
