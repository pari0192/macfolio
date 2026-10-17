import React from 'react'
import useWindowsStore from '../store/window'

const WindowControls = ({target}) => {
    const { closeWindow } = useWindowsStore();
  return (
    <div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)}></div>
        <div className="minimize"></div>
        <div className="maximize"></div>
    </div>
  )
}

export default WindowControls