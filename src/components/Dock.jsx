import { useContext } from "react"
import "./dock.scss"
import { windowContext } from "../context/WindowControls"

const Dock = () => {

  const windowData=useContext(windowContext)
  const{windowStates,setWindowStates}=windowData

  return (
    <section className="dock">
        <div className="icon github" onClick={()=>setWindowStates({...windowStates,github:true})}><img src="/src/assets/doc-icons/github.svg" alt="" /></div>
        <div className="icon note" onClick={()=>setWindowStates({...windowStates,notes:true})}><img src="/src/assets/doc-icons/note.svg" alt="" /></div>
        <div className="icon pdf" onClick={()=>setWindowStates({...windowStates,pdf:true})}><img src="/src/assets/doc-icons/pdf.svg" alt="" /></div>
        <div className="icon calender"><img src="/src/assets/doc-icons/calender.svg" alt="" onClick={()=>{window.open("https://calendar.google.com/calendar","_blank")}} /></div>
        <div className="icon spotify" onClick={()=>setWindowStates({...windowStates,spotify:true})}><img src="/src/assets/doc-icons/spotify.svg" alt="" /></div>
        <div className="icon mail"><img src="/src/assets/doc-icons/mail.svg" alt="" onClick={()=>{window.open("mailto:shikherpant@gmail.com")}} /></div>
        <div className="icon link"><img src="/src/assets/doc-icons/link.svg" alt="" onClick={()=>{window.open("https://www.linkedin.com/in/shikher-pant-275b4019a/","_blank")}} /></div>
        <div className="icon cli" onClick={()=>setWindowStates({...windowStates,terminal:true})}><img src="/src/assets/doc-icons/cli.svg" alt="" /></div>
    </section>
  )
}

export default Dock