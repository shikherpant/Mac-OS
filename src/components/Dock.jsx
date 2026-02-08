import { useContext } from "react"
import "./dock.scss"
import { windowContext } from "../context/WindowControls"
import githubIcon from "../assets/doc-icons/github.svg"
import noteIcon from "../assets/doc-icons/note.svg"
import pdfIcon from "../assets/doc-icons/pdf.svg"
import calenderIcon from "../assets/doc-icons/calender.svg"
import spotifyIcon from "../assets/doc-icons/spotify.svg"
import mailIcon from "../assets/doc-icons/mail.svg"
import linkIcon from "../assets/doc-icons/link.svg"
import cliIcon from "../assets/doc-icons/cli.svg"

const Dock = () => {

  const windowData=useContext(windowContext)
  const{windowStates,setWindowStates}=windowData

  return (
    <section className="dock">
        <div className="icon github" onClick={()=>setWindowStates({...windowStates,github:true})}><img src={githubIcon} alt="" /></div>
        <div className="icon note" onClick={()=>setWindowStates({...windowStates,notes:true})}><img src={noteIcon} alt="" /></div>
        <div className="icon pdf" onClick={()=>setWindowStates({...windowStates,pdf:true})}><img src={pdfIcon} alt="" /></div>
        <div className="icon calender"><img src={calenderIcon} alt="" onClick={()=>{window.open("https://calendar.google.com/calendar","_blank")}} /></div>
        <div className="icon spotify" onClick={()=>setWindowStates({...windowStates,spotify:true})}><img src={spotifyIcon} alt="" /></div>
        <div className="icon mail"><img src={mailIcon} alt="" onClick={()=>{window.open("mailto:shikherpant@gmail.com")}} /></div>
        <div className="icon link"><img src={linkIcon} alt="" onClick={()=>{window.open("https://www.linkedin.com/in/shikher-pant-275b4019a/","_blank")}} /></div>
        <div className="icon cli" onClick={()=>setWindowStates({...windowStates,terminal:true})}><img src={cliIcon} alt="" /></div>
    </section>
  )
}

export default Dock