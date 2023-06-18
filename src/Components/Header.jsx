import React from "react"
import logo from "../assets/logo.svg"

export const Header = () => {

    return (
        <div className="flex justify-between items-centre px-5 py-6 lg:w-5/6 lg:mx-auto">
            <img src={logo} alt="Logo" className="h-6" />
            <div>
                <ul className="flex gap-5 list-none text-sm">
                    <li className="hover:underline cursor-pointer">Features</li>
                    <li className="hover:underline cursor-pointer">Team</li>
                    <li className="hover:underline cursor-pointer">Sign In</li>
                </ul>
            </div>
        </div>
    )
}