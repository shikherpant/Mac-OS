import { Rnd } from "react-rnd"
import { useContext, useRef, useState } from "react";
import './window.scss'
import { windowContext } from "../../context/WindowControls";

const MacWindow = ({children,width="45vw",height="45vh",initX="30", initY="20", title="shikherpant -zsh",page=""}) => {

    const nodeRef = useRef(null);

    const windowData=useContext(windowContext)
    const{windowStates,setWindowStates}=windowData

    const [windowHeight,setWindowHeight]=useState(height)
    const [windowWidth,setWindowWidth]=useState(width)
    const [positionX,setPositionX]=useState(initX)
    const [positionY,setPositionY]=useState(initY)

    const handleWindowSize =()=>{
        console.log(windowWidth)
        if(windowHeight!="100vh"){
            setWindowHeight("100vh")
            setWindowWidth("100vw")
            setPositionX(0)
            setPositionY(-27)
        }
        else{
            setWindowHeight(height)
            setWindowWidth(width)
            setPositionX(initX)
            setPositionY(initY)
        }
    }

  return (
    <Rnd
        nodeRef={nodeRef}
        dragHandleClassName="window-nav"
        enableUserSelectHack={false}
        
        default={{
            x:initX,
            y:initY,
            width:width,
            height:height,
        }}
        
        size={{
            height:windowHeight,
            width:windowWidth
        }}

        position={{
            x:positionX,
            y:positionY
        }}

        onDragStop={(e, d) => {
        setPositionX(d.x);
        setPositionY(d.y)
        }}

        onResizeStop={(e, direction, ref, delta, newPosition) => {
            setWindowHeight(ref.style.height)
            setWindowWidth(ref.style.width)
            setPositionX(newPosition.x)
            setPositionY(newPosition.y)
        }}

    minWidth={400}
    minHeight={300}
    // bounds="window"
    >
        <div ref={nodeRef} className="mac-window">
            <div className="window-nav">
                <div className="dots">
                    <div className="dot red" onClick={()=>setWindowStates({...windowStates,[page]:false})}></div>
                    <div className="dot yellow"></div>
                    <div className="dot green" onClick={handleWindowSize}></div>
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