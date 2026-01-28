
import { useState, useEffect } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const tick = () => setNow(new Date())
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const wd = weekdays[now.getDay()]
  const day = now.getDate()
  const mon = months[now.getMonth()]
  const hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const ampm = hours < 12 ? 'AM' : 'PM'
  const h12 = hours % 12 || 12

  const finalTime = `${wd} ${day} ${mon} ${h12}:${minutes} ${ampm}`

  return (
    <div>
      {finalTime}
    </div>
  )
}

export default DateTime