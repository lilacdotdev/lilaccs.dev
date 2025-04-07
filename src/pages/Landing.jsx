import React from "react";
import { Element, Link } from "react-scroll"

import Button from "../components/Button.jsx";

export default function Landing (){
    // DESKTOP VERSION
    return (
        <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <Element name="hero">
                <div className="container mx-10">
                    <div className="relative z-2 max-w-512 max-lg:max-w-388">
                        <div className="text-mini caption small-2 uppercase">
                            Software Developer
                        </div>
                        <h1 className="mb-6 uppercase text-head 
                        max-lg:mb-7 max-lg:h2 
                        max-md:mb-4 max-md:text-5xl max-md:leading-12">
                            LilacDotDev
                        </h1>
                        <p className="text-desc max-w-440 mb-14 body-1 max-md:mb-10">
                            Creative mind with a focus on Game Development, Content Creation, and Education in a way any can understand.
                        </p>
                        <Button>More About Me</Button>
                    </div>
                </div>
            </Element>
        </section>
    );
};