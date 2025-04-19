import React from "react"

export default function Button(props){
    switch(props.type){
        case "glow-gradient":
            return(<button className="">GLOWY:{props.children}</button>);
        case "reverse-default":
            return(<button className="my-4 px-6 py-2 min-w-[120px] text-center text-background border-2 border-background rounded 
                transition duration-100 ease-in-out 
                hover:shadow-fuchsia-400 hover:shadow-md hover:-translate-1
                active:translate-1 active:shadow-xs">
                    {props.children}</button>);
        default:
            return(<button className="my-4 px-6 py-2 min-w-[120px] text-center text-white border-2 border-white rounded 
                transition duration-100 ease-in-out 
                hover:shadow-white hover:shadow-md hover:-translate-1
                active:translate-1 active:shadow-xs">
                    {props.children}</button>);
    };
};