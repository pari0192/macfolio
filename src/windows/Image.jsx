import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import { WindowControls } from '../components'
import useWindowsStore from '../store/window'

const Image = () => {
    const { windows } = useWindowsStore();
    const data = windows.imgfile?.data || windows.imagefile?.data;

    if (!data) return null;

    const { name } = data;
    const imageUrl = data.imageUrl || data.image;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <p className="w-full text-center">{name}</p>
            </div>

            <div className="preview">
                {imageUrl && (
                    <img src={imageUrl} alt={name || "Preview"} />
                )}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
