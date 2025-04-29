import React from "react";
import { useState , useEffect } from "react";
import { Element, Link } from "react-scroll"

import Button from "../components/Button";

export default function Skills (){

    // Variables
    const skills = [
        (<div className="my-4 mx-6 flex-col">
            <h2>Languages</h2>
            <p className="mb-2">Having experimented far and wide with languages, I have a variety of languages I can program in at least with a basic understanding.
                I'm always open to learning more, though! I find that understanding the <b className="underline">Logic</b> is truly what matters when it comes to programming.</p>
                <table className="w-full bg-background rounded-3xl shadow-md text-default">
                    <thead>
                        <tr className=" border-b-2 border-white text-left">
                            <th className="py-3 px-6">Language</th>
                            <th className="py-3 px-6">Experience</th>
                            <th className="py-3 px-6">Proficiency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Java</td>
                            <td className="py-4 px-6">5 Years</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f38ba8]">Advanced</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Python</td>
                            <td className="py-4 px-6">3 Years</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f38ba8]">Advanced</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">GDScript</td>
                            <td className="py-4 px-6">2 Years</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">C#</td>
                            <td className="py-4 px-6">2 Years</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">C++</td>
                            <td className="py-4 px-6">1 Year</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">C</td>
                            <td className="py-4 px-6">&lt; 1 Year</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">JavaScript</td>
                            <td className="py-4 px-6">&lt; 1 Year</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">HTML5/CSS3</td>
                            <td className="py-4 px-6">&lt; 1 Year</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                    </tbody>
                </table>
        </div>),
        (<div className="my-4 mx-6 flex-col">
            <h2>Frameworks/Libraries</h2>
            <p className="mb-2">I'm relatively new to Frameworks, having only recently come to understand the very building blocks of the site you currently visit, React.
                Nonetheless, I've come to learn with time that once you understand one programming language, all its frameworks come easy as you know its shortcomings and its annoying points. 
                As for Libraries, I've dabbled quite a bit due to my appreciation for Data Analytics.
            </p>
                <table className="w-full bg-background rounded-3xl shadow-md text-default">
                    <thead>
                        <tr className=" border-b-2 border-white text-left">
                            <th className="py-3 px-6">Framework/Library</th>
                            <th className="py-3 px-6">Language</th>
                            <th className="py-3 px-6">Proficiency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Matplotlib</td>
                            <td className="py-4 px-6">Python</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Seaborn</td>
                            <td className="py-4 px-6">Python</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Pandas</td>
                            <td className="py-4 px-6">Python</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">NumPy</td>
                            <td className="py-4 px-6">Python</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">OpenGL</td>
                            <td className="py-4 px-6">C++</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">NPM</td>
                            <td className="py-4 px-6">JavaScript</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Node.js</td>
                            <td className="py-4 px-6">JavaScript</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">React</td>
                            <td className="py-4 px-6">JavaScript</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">TailwindCSS</td>
                            <td className="py-4 px-6">JavaScript</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                    </tbody>
                </table>
        </div>),
        (<div className="my-4 mx-6 flex-col">
            <h2>Applications</h2>
            <p className="mb-2">I've been always been the type of person who wants to find the "best way" to solve a problem.
                Because of this, I've been through my fair share of applications in search of my favorite options.
                These apps range from Creative Apps, to Wireframing and even Game Engines.
            </p>
                <table className="w-full bg-background rounded-3xl shadow-md text-default">
                    <thead>
                        <tr className=" border-b-2 border-white text-left">
                            <th className="py-3 px-6">Application</th>
                            <th className="py-3 px-6">Purpose</th>
                            <th className="py-3 px-6">Proficiency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Visual Studio Code</td>
                            <td className="py-4 px-6">IDE/Development Environment</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f38ba8]">Advanced</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Blender</td>
                            <td className="py-4 px-6">3D-Modeling</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Github</td>
                            <td className="py-4 px-6">Project Management, CI/CD</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Git</td>
                            <td className="py-4 px-6">Version Control</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Godot</td>
                            <td className="py-4 px-6">Game Development</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Jetbrains</td>
                            <td className="py-4 px-6">IDE Suite</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Figma</td>
                            <td className="py-4 px-6">Wireframing</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Docker</td>
                            <td className="py-4 px-6">Containerization</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                    </tbody>
                </table>
        </div>),
        (<div className="my-4 mx-6 flex-col">
            <h2>Operating Systems</h2>
            <p className="mb-2">Due to my work experience in IT, I've been exposed to countless Operating Systems. 
                I understand and love the concepts in Virtualization and love testing things in my Proxmox-based Home Lab!</p>
                <table className="w-full bg-background rounded-3xl shadow-md text-default">
                    <thead>
                        <tr className=" border-b-2 border-white text-left">
                            <th className="py-3 px-6">Language</th>
                            <th className="py-3 px-6">Use</th>
                            <th className="py-3 px-6">Proficiency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Windows</td>
                            <td className="py-4 px-6">Used at Work Daily</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f38ba8]">Advanced</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Arch Linux</td>
                            <td className="py-4 px-6">Current Daily Driver</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f38ba8]">Advanced</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Debian</td>
                            <td className="py-4 px-6">Used in all LXCs on Home Lab</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Ubuntu</td>
                            <td className="py-4 px-6">Used in VMs on Home Lab</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Linux Mint</td>
                            <td className="py-4 px-6">Previous Daily Driver</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#f9e2af]">Intermediate</td>
                        </tr>
                        <tr className="text-left">
                            <td className="py-4 px-6 font-bold transition ease-in-out hover:text-primary">Kali Linux</td>
                            <td className="py-4 px-6">Dabbled for Pen. Testing</td>
                            <td className="py-4 px-6 transition ease-in-out hover:text-[#a6e3a1]">Beginner</td>
                        </tr>
                    </tbody>
                </table>
        </div>),
    ]

    // States
    const [skillText, setSkillText] = useState(skills[0]);
    const [idx, setidx] = useState(0);

    // Effects
    // useEffect()

    //Methods
    const switchSkills = (i) => {
        setidx(i);
        setSkillText(skills[i]);
    }

    return (
    <Element name="Skills" className="relative">
        <section className="flex-initial relative bg-background text-default pb-20">
            <div className="flex flex-col justify-center">
                <div className="">
                    <div className="py-2 flex justify-center content-center shadow-2xs shadow-white">
                        <h3>▼ read.more(); ▼</h3>
                    </div>
                    <div className="2xl:mx-50 lg:mx-20 md:mx-0 sm:mx-0">
                        <div className="mx-10 pt-5 flex content-center shadow-2xs shadow-white">
                            <h1>Skills</h1>
                        </div>
                        <div className="mx-10 my-5 flex flex-row bg-gradient-to-b from-grad-1 to-grad-2 text-default rounded-2xl shadow-2xl shadow-grad-1">
                            <div className="flex flex-col shrink-0 basis-1/7 border-r-1 mr-5 justify-items-center my-4">
                                <button onClick={() => switchSkills(0)}><h2 className={idx == 0 ? "transition ease-in-out duration-500 text-default underline" : "transition ease-in-out duration-500 hover:text-secondary text-black"}>Languages</h2></button>
                                <button onClick={() => switchSkills(1)}><h2 className={idx == 1 ? "transition ease-in-out duration-500 text-default underline" : "transition ease-in-out duration-500 hover:text-secondary text-black"}>Frameworks</h2></button>
                                <button onClick={() => switchSkills(2)}><h2 className={idx == 2 ? "transition ease-in-out duration-500 text-default underline" : "transition ease-in-out duration-500 hover:text-secondary text-black"}>Applications</h2></button>
                                <button onClick={() => switchSkills(3)}><h2 className={idx == 3 ? "transition ease-in-out duration-500 text-default underline" : "transition ease-in-out duration-500 hover:text-secondary text-black"}>O.S.es</h2></button>
                            </div>
                            <div className="">
                                {skillText}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Element>
    );
};