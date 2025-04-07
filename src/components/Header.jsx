import React from "react";
import { useState } from "react";

import Social from "./Social";

export default function Header(){

    const [isOpen, setMenu] = useState(false);

    return (
        <nav className="sticky top-0 bg-main-secondary p-3 text-white">
            <div className="flex justify-between items-center mx-auto container">
                <div className="">
                    <h1>LilacCS</h1>
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