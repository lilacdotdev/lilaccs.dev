import React from "react";
import { useState , useEffect } from "react";


export default function Header(props){

    const [isOpen, setMenu] = useState(false);
    const[scrollPosition, setScrollPosition] = useState(0);
    
    // ScrollPosition UseEffect Method
    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener('scroll', updatePosition);
    }, [scrollPosition]);

    return (
        <nav className={scrollPosition > 600 ? "z-10 fixed top-0 w-full transition ease-in bg-background text-default shadow-2xs shadow-white" : "z-10 fixed top-0 w-full transition ease-in text-black"}>
            <div className="flex justify-between items-center px-8">
                {/* Left - Title/Logo */}
                <div>
                    <h2>LilacCS</h2>
                </div>
                {/* Right - Navigation Anchors */}
                <div>
                    <ul className="collapse lg:visible flex gap-4">
                        <li className={props.page == "Home" ? "text-tertiary underline":""}><a className="cursor-pointer">Home</a></li>
                        <li><a className="cursor-not-allowed">Blog</a></li>
                        <li><a className="cursor-not-allowed">Projects</a></li>
                        <li><a className="cursor-not-allowed">Card</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};