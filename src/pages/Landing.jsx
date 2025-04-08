import React from "react";
import { Element, Link } from "react-scroll"

import Button from "../components/Button.jsx";
import Image from "../components/Image.jsx";

export default function Landing (){
    // DESKTOP VERSION
    return (
    <>
        <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 bg-main-1">
            <Element name="hero">
                <div className="flex container mx-10 text-white">
                    <div className="relative z-2 max-w-512 max-lg:max-w-388">
                        <div className="text-mini uppercase">
                            Software Developer
                        </div>
                        <h1 className="mb-6 uppercase text-head 
                        max-lg:mb-7 max-lg:h2 
                        max-md:mb-4 max-md:text-5xl max-md:leading-12">
                            LilacDotDev
                        </h1>
                        <p className="max-w-440 mb-10 max-md:mb-8">
                            Creative mind with a focus on Game Development, Content Creation, and Education in a way any can understand.
                        </p>
                        <Button>More About Me</Button>
                    </div>
                    {/* <Image img="placeholder.png"></Image> */}
                </div>
            </Element>
        </section>
        <section className="flex-initial relative bg-main-3 text-white">
            <Element name="about">
                <div className="container mx-10">
                    <h3 className="text-vertical-rl">NEVERBETHEONETOFAIL</h3>
                </div>
            </Element>
        </section>
    </>);
};