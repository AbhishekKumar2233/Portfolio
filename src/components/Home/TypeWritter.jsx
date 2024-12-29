import React from "react";
import Typewriter from "typewriter-effect";


const TypeWritter = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "React Js Developer",
                    "Front End Developer",
                    "Software Developer",
                    "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
            }}
        />
    )
}

export default TypeWritter;