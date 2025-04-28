import React from "react";
import { Element, Link } from "react-scroll"

import Button from "../components/Button.jsx";
import Skills from "./Skills.jsx";

export default function Landing (){

    return (
    <> 
        {/* TODO: Tweak mobile using the max-sm: protocol */}
        <section className="sticky top-0 flex-initial bg-[url(/herobg.jpg)] text-black">
            <Element name="Hero">
                <div className="px-20 py-40 container">
                    <div className="">
                        <h1>LilacDotDev</h1>
                        <h2>Web Developer, Software Developer, Game Developer.</h2>
                        <h3>Jack of all Trades in Development.</h3>
                        <h3>Hyper-focused on making new applications users will love.</h3>
                        <Button type="reverse-default">Learn More</Button>
                    </div>
                </div>
            </Element>
        </section>
        <Skills/>
    </>);
};