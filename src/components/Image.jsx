import React from "react";


export default function Image(props) {
    return (
        // Standard size for all photos: 640x480p
        // All pictures will be cropped by hand to this size.
        <div>
            <img src={props.img}></img>
        </div>
    );
};