import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import { WindowControls } from '../components'
import useWindowsStore from '../store/window'

const Text = () => {
    const { windows } = useWindowsStore();
    const data = windows.txtfile?.data || windows.textfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto text-gray-800 text-sm leading-relaxed">
                {image && (
                    <div className="w-full overflow-hidden rounded-lg border border-gray-200">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-auto object-cover max-h-60"
                        />
                    </div>
                )}

                {subtitle && (
                    <h3 className="text-base font-semibold text-gray-900 tracking-tight">
                        {subtitle}
                    </h3>
                )}

                {Array.isArray(description) ? (
                    <div className="space-y-3 text-gray-800">
                        {description.map((paragraph, index) => (
                            <p key={index} className="leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                ) : description ? (
                    <p className="leading-relaxed text-gray-600">{description}</p>
                ) : null}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
