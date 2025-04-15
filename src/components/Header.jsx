import React from "react";
import { useState } from "react";

import Social from "./Social";

export default function Header(){

    const [isOpen, setMenu] = useState(false);

    return (
        <nav className="sticky top-0 bg-background text-default z-10">
            <div className="container sticky mx-10">
                {/* left */}
                <div>
                    <h2>LilacCS</h2>
                </div>

                {/* right */}
                

            </div>
        </nav>
    );
};