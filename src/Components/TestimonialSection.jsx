import React from "react";


export const Testimonials = ({image, name}) => {

    return (

                <div className="bg-[#202A3C] px-7 pt-10 pb-7 shadow-md w-[90%]">
                    <p className="font-sm font-light mb-5">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className="flex gap-3 items-center">
                        <img src={image} className="h-8 w-76 rounded-full" />
                        <div>
                            <p className="text-sm">{name}</p>
                            <p className="text-xs font-light">Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
    )
}