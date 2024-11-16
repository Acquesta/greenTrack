import BR from "../../assets/flag-brazil.png"
import USA from "../../assets/flag-usa.png"
import React from 'react';
import { useState } from 'react';


const Switch = () => {
    return (
        <>
        <div className="flex justify-between gap-1 items-center">
            <div className="w-6">
                <img src={BR} alt="Bandeira do Brasil" />
            </div>
            <label className="relative inline-block h-7 w-[48px] cursor-pointer rounded-full bg-verde transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#f15267]">
                <input type="checkbox" id="AcceptConditions" className="peer sr-only" />
                <span className="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-gray-300 ring-[5px] ring-inset ring-white transition-all duration-300 peer-checked:translate-x-5 bg-transparent ring-[5px] ring-inset peer-checked:bg-white peer-checked:ring-[5px] peer-checked:ring-inset peer-checked:bg-transparent" />
            </label>
            <div className="w-6 ">
                <img src={USA} alt="Bandeira dos Estados Unidos" />
            </div>
        </div>
        </>
    );
}

export default Switch;
