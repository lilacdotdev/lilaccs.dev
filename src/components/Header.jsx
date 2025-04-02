import React from "react";
import { useState } from "react";

import Social from "./Social";

export default function Header(){

    const [isOpen, setMenu] = useState(false);

    return (
        <nav className="bg-slate-700 p-3 text-white">
            <div className="flex justify-between items-start mx-auto container">
                <div className="">
                    <h1>Left Side</h1>
                </div>
                <div className="flex space-x-2">
                    <h1>Right Side</h1>
                    <Social link="https://github.com" icon="brand-github.svg"/>
                </div>
            </div>
        </nav>
    )
}