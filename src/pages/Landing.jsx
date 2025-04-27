import React from "react";
import { Element, Link } from "react-scroll"

import Button from "../components/Button.jsx";
import Image from "../components/Image.jsx";

export default function Landing (){
    return (
    <> 
        {/* TODO: Tweak mobile using the max-sm: protocol */}
        <section className="sticky top-15 flex-initial bg-[url(/herobg.jpg)] text-black">
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
        <section className="flex-initial relative bg-background text-default">
            <Element name="Skills">
                {/* Wrapper for elem */}
                <div className="flex flex-col justify-center">
                    {/* Skills-Readmore */}
                    {/* <h3>Read More</h3>
                    <hr class="h-px my-2 bg-gray-200 border-0"></hr> */}
                    {/* Skills-BG */}
                    <div className="bg-background h-[2000px]">
                        <h1>Skills</h1>
                        
                    </div>
                </div>
            </Element>
        </section>
    </>);
};