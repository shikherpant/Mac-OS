import DateTime from "./DateTime"
import "./nav.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <div className="icon"><img src="src/assets/navbar-icons/apple.svg" alt="" /></div>
            <div className="user">Shikher Pant</div>
            <div className="user">File</div>
            <div className="terminal">Terminal</div>
        </div>
        <div className="right">
            <div className="wifi"><img src="src/assets/navbar-icons/wifi.svg" alt="" /></div>
            <div className="date-time">
                <DateTime/>
            </div>
        </div>
    </div>
  )
}

export default Navbar