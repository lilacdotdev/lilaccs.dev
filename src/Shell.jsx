import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Shell() {
    const [currentPage, setCurrentPage] = useState("Home");
    
    return(
        <div className="">
            <Header page={currentPage}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};