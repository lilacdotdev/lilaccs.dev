import React from "react";
import { Element, Link } from "react-scroll"

import Button from "../components/Button.jsx";
import Image from "../components/Image.jsx";

export default function Landing (){
    // DESKTOP VERSION
    return (
    <>
        <section>
            <Element name="Hero">
                <div className="mx-20 my-40 container">
                    <div className="fixed">
                        <h1>LilacDotDev</h1>
                        <h2>Web Developer, Software Developer, Game Developer.</h2>
                        <h3>Jack of all Trades in Development.</h3>
                        <h3>Hyper-focused on making new applications users will love.</h3>
                    </div>
                </div>
            </Element>
        </section>
        <section className="flex-initial relative bg-background text-default">
            <Element name="Skills">
                <h2>Skills</h2>
                <div className="bg-background h-[2000px]">Testing</div>
            </Element>
        </section>
    </>);
};