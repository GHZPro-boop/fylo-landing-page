import React from "react";

export const Icons = ({image, title, text}) => {

    return (
        <div className="flex flex-col items-center gap-5 text-center">
            <img src={image} alt="Icon" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm font-thin">{text}</p>
        </div>
    );
}