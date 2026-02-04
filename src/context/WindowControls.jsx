import { createContext, useState } from 'react'

export const windowContext=createContext()

const WindowControls = ({children}) => {

  const [windowStates,setWindowStates] = useState({
    github:false,
    notes:false,
    pdf:false,
    spotify:false,
    terminal:false
  })
  

  return (
    <div style={{height:"100%"}}>
      <windowContext.Provider value={{windowStates:windowStates, setWindowStates:setWindowStates}}>
      {children}
      </windowContext.Provider>
    </div>
  )
}

export default WindowControls