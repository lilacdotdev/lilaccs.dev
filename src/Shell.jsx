import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Shell() {
    return(
        <div className="bg-main-primary text-white">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};