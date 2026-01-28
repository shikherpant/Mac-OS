import { Rnd } from "react-rnd"
import './window.scss'
const MacWindow = ({children}) => {
  return (
    <Rnd>
        <div className="mac-window">
            <div className="window-nav">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title">shikherpant -zsh</div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow