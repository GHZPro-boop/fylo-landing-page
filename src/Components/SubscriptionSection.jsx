import React from "react";
import { CustomButton } from "./CustomButton";

export const Subscription = () => {

    return (
        <div className="px-8 py-10 bg-[#1b212b] shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-bold">Get early access today</h3>
            <p className="text-sm font-thin mt-4 mb-7">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className="flex flex-col gap-4 items-center justify-center lg:flex-row">
                <input className="rounded-full px-5 py-2 text-xs w-full h-11"
                    type="email" name="email" placeholder="email@example.com" required />
                <div className="w-full">
                    <CustomButton text="Get started for free" />
                </div>
            </div>
        </div>
    );
}