import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function GsapText(){
    useGSAP(()=>{
        gsap.to('#text', {
            ease:'power2.inOut',
            opacity: 1,
            y: 0,
        })
    }, [])
    return(
        <div className="py-7">
            <h1 id="text" className="text-4xl opacity-0 translate-y-4">This Gsap Text Animation.</h1>
        </div>
    )
};

export default GsapText;