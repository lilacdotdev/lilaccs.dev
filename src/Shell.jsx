import React, { useState } from "react";


import Header from "./components/Header";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";


export default function Shell() {
    const [currentPage, setCurrentPage] = useState("Home");
    
    return(
        // TODO: Add Mobile Tweaks
        <div className="relative">
            <Header page={currentPage}/>
            <Landing/>
            <Footer/>
        </div>
    );
};