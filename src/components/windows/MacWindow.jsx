import { Rnd } from "react-rnd"
import { useRef } from "react";
import './window.scss'
const MacWindow = ({children}) => {
    const nodeRef = useRef(null);
  return (
    <Rnd
        nodeRef={nodeRef}
        dragHandleClassName="window-nav"
        enableUserSelectHack={false}
        
        default={{
            x:50,
            y:30,
            width:"45vw",
            height:"45vh",
        }
    }
    minWidth={400}
    minHeight={300}
    // bounds="window"
    >
        <div ref={nodeRef} className="mac-window">
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