import React from "react";
import { useState } from "react";

import Social from "./Social";

export default function Header(){

    const [isOpen, setMenu] = useState(false);

    return (
        <nav className="sticky top-0 bg-main-2 p-3 text-white">
            <div className="flex justify-between items-center mx-auto container">
                <div className="">
                    <h3 className="uppercase gradient-animated bg-clip-text transition ease-in-out hover:text-transparent hover:bg-gradient-to-r from-purple-500 to-purple-300">LilacCS</h3>
                </div>
                <div className="flex space-x-2">
                    <Social link="https://github.com" icon="brand-github.svg"/>
                    <Social link="https://leetcode.com" icon="brand-leetcode.svg"/>
                    <Social link="https://youtube.com" icon="brand-youtube.svg"/>
                </div>
            </div>
        </nav>
    );
};