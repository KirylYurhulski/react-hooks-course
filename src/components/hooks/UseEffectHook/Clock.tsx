import { useEffect, useState } from 'react'

export const Clock = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(() => {
    setInterval(() => setCurrentDate( new Date() ), 1000)
  }, [])

  return <span className="fw-bold">Current Dater: {currentDate.toLocaleString()}</span>
}