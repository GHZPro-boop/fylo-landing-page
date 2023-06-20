import React from "react";
import illustration2 from "../assets/illustration-stay-productive.png";
import iconarrow from "../assets/icon-arrow.svg"

export const Section2 = () => {

    return (
        <div className="flex flex-col lg:flex-row lg:w-[90%] lg:mx-auto gap-14 mx-5 mt-20">
            <img src={illustration2} alt="Stay Productive Illustration" className="lg:w-[50%] mx-auto" />
            <div className="flex flex-col gap-5 lg:justify-center">
                <h3 className="text-lg text-center font-semibold">Stay productive, wherever you are</h3>
                <p className="text-sm font-thin">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p className="text-sm font-thin">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <div className="flex gap-1">
                    <p className="text-sm font-thin text-green-300">See how Fylo works</p>
                    <img src={iconarrow} alt="Icon Arrow" className="h-5 w-5" />
                </div>
                <div className="w-32 h-[1px] bg-green-300">
                </div>
            </div>
        </div>
    );
}