import React from 'react'
import useWindowsStore from '../store/window'

const WindowControls = ({target}) => {
    const { closeWindow, toggleMaximize } = useWindowsStore();
  return (
    <div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)}></div>
        <div className="minimize" onClick={() => closeWindow(target)}></div>
        <div className="maximize" onClick={() => toggleMaximize(target)}></div>
    </div>
  )
}

export default WindowControls