import React from "react";
import { Element, Link } from "react-scroll"

import Button from "../components/Button.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Links from "./Links.jsx";
import About from "./About.jsx";


export default function Landing (){

    return (
    <> 
        <section className="sticky top-0 z-0 bg-[url(/herobg.jpg)] bg-cover text-black">
            <div className="px-20 py-40 container">
                <div className="">
                    <h1>LilacDotDev</h1>
                    <h2>Web Developer, Software Developer, Game Developer.</h2>
                    <h3>Jack of all Trades in Development.</h3>
                <h3>Hyper-focused on making new applications users will love.</h3>                        
                <Button type="reverse-default"><Link to="About" smooth={true} duration={500} spy={true}
                hashSpy={true} className="px-9 -mx-9 py-4 -my-4 font-bold">About</Link></Button>
                </div>
            </div>
        </section>

        <Skills/>

        <div className="bg-background text-default relative">
            <div className="mx-10 border-y-2 border-y-white py-4 flex content-center justify-center">
                <p className="px-5">Always seeking to learn. Always seeking to grow. My passion is being better than I was last. Nothing will ever stop my desire to keep going.</p>
            </div>
        </div>

        {/* <Projects/> */}

        <Links/>

        <About/>
    </>);
};