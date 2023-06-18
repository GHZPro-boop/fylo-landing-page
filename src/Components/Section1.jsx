import React from "react";
import illustration1 from "../assets/illustration-intro.png";
import { CustomButton } from '../Components/CustomButton'

export const Section1 = () => {

    return (
        <div className="flex flex-col justify-center text-center mx-auto items-center gap-6 mt-5 w-[80%] lg:w-[60%]">
            <img src={illustration1} alt="Intro illustration" />
            <div className="flex flex-col text-center lg:w-[70%] mx-auto gap-5">
                <h3 className="text-xl lg:text-2xl font-bold">All your files in one secure location, accessible everywhere</h3>
                <p className="text-sm lg:text-lg font-thin">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            </div>
            <div className="w-2/3 mx-auto lg:w-60">
                <CustomButton text="Get Started" />
            </div>
        </div>
    )
}