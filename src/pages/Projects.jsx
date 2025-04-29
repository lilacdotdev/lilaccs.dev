import React from "react"
import { Element } from "react-scroll";
import Button from "../components/Button";


export default function Projects (){
    return (
        <Element name="Projects" className="relative">
            <div className="bg-background flex-col py-5">
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                    <div className="proj1 flex flex-row items-center">
                        <img src="placeholder.png" alt="" className="hover:blur-sm hover:outline-2 hover:shadow-lg hover:shadow-white" />
                        <p className="text-vertical-rl pl-2 text-default">Project 001: Terminal</p>
                    </div>
                    <div className="proj2 flex flex-row items-center">
                    <p className="text-vertical-lr pr-2 text-default">Project 002: Terminal</p>
                        <img src="placeholder.png" alt="" className="hover:blur-sm hover:outline-2 hover:shadow-lg hover:shadow-white" />
                    </div>
                    <div className="proj3 flex flex-row items-center">
                        <img src="placeholder.png" alt="" className="hover:blur-sm hover:outline-2 hover:shadow-lg hover:shadow-white" />
                        <p className="text-vertical-rl pl-2 text-default">Project 003: Terminal</p>
                    </div>
                    <div className="proj4 flex flex-row items-center">
                        <p className="text-vertical-lr pr-2 text-default">Project 004: Terminal</p>
                        <img src="placeholder.png" alt="" className="hover:blur-sm hover:outline-2 hover:shadow-lg hover:shadow-white" />
                    </div>
                </div>
                <div className="w-full flex content-center justify-center py-3">
                    <Button>Learn More</Button>
                </div>
            </div>
        </Element>
    );
};