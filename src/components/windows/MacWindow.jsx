import { Rnd } from "react-rnd"
import { useContext, useRef } from "react";
import './window.scss'
import { windowContext } from "../../context/WindowControls";

const MacWindow = ({children,width="45vw",height="45vh",title="shikherpant -zsh",page=""}) => {
    
    const nodeRef = useRef(null);

    const windowData=useContext(windowContext)
    const{windowStates,setWindowStates}=windowData

  return (
    <Rnd
        nodeRef={nodeRef}
        dragHandleClassName="window-nav"
        enableUserSelectHack={false}
        
        default={{
            x:50,
            y:30,
            width:width,
            height:height,
        }
    }
    minWidth={400}
    minHeight={300}
    // bounds="window"
    >
        <div ref={nodeRef} className="mac-window">
            <div className="window-nav">
                <div className="dots">
                    <div className="dot red" onClick={()=>setWindowStates({...windowStates,[page]:false})}></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow