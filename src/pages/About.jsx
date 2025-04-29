import React from "react"
import { Element } from "react-scroll";
import Button from "../components/Button";


export default function About (){
    return (
        <Element name="About" className="relative">
            <section className="bg-background text-default">
                <div className="flex px-10 py-5 gap-8 justify-around">
                    <div className="flex-col basis-1/2">
                        <h2>About Me</h2>
                        <p>Ever since I was a child, I was a lover of technology and science. I loved taking apart my toys to understand how they operated, and then trying to put them back together.
                            I had a fascination with how computers ran and how I could create things. Now, here I am. I've spend 4 years of my life in University studying why the 1s and 0s we type have the effects they do.
                            Coming to learn the theory, now I'm applying it into the real world with my own projects. I'm open to talking about projects and joining teams, so feel free to reach out!
                        </p>
                        <Button>Learn More</Button>
                    </div>
                    <div className="w-128 h-auto bg-[url(/about.jpg)] bg-cover bg-center">

                    </div>
                </div>

            </section>
        </Element>
    );
};