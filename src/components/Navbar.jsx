import DateTime from "./DateTime"
import "./nav.scss"
import appleIcon from "../assets/navbar-icons/apple.svg"
import wifiIcon from "../assets/navbar-icons/wifi.svg"


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <div className="icon"><img src={appleIcon} alt="" /></div>
            <div className="user">Shikher Pant</div>
            <div className="user">File</div>
            <div className="terminal">Terminal</div>
        </div>
        <div className="right">
            <div className="wifi"><img src={wifiIcon} alt="" /></div>
            <div className="date-time">
                <DateTime/>
            </div>
        </div>
    </div>
  )
}

export default Navbar