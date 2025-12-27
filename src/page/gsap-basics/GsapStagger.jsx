import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function GsapStagger(){
    useGSAP(()=>{
        gsap.to('.stagger-box', {
            y: 300,
            rotate:360,
            borderRadius:"100%",
            repeat: -1,
            yoyo: true,
            // stagger: 0.2
            stagger:{
                amount:1.5,  // Amount of time to stagger between each element.
                grid:[2, 1], // It select number of column and rows into group for animation 
                axis: 'y',
                ease: "circ.inOut",
                // from: 'center'
            }
        })
    },[])

    return (
        <div className='px-8'>
            <h1 className='py-10 font-mono text-3xl text-center'>Gsap Stagger Animation</h1>
            <p className="font-semibold text-center px-20">This is very effective and powerfull animation tool for displaying fade, or delay animation as well as movement control.</p>

            <div className="mt-5">
                <div className="flex gap-5">
                <div className="w-20 h-20 bg-orange-50 rounded-xl stagger-box"></div>
                <div className="w-20 h-20 bg-orange-100 rounded-xl stagger-box"></div>
                <div className="w-20 h-20 bg-orange-200 rounded-xl stagger-box"></div>
                <div className="w-20 h-20 bg-orange-300 rounded-xl stagger-box"></div>
                <div className="w-20 h-20 bg-orange-400 rounded-xl stagger-box"></div>
                <div className="w-20 h-20 bg-orange-500 rounded-xl stagger-box"></div>
                <div className="w-20 h-20 bg-orange-600 rounded-xl stagger-box"></div>
                <div className="w-20 h-20 bg-orange-700 rounded-xl stagger-box"></div>
                <div className="w-20 h-20 bg-orange-700 rounded-xl stagger-box"></div>
                <div className="w-20 h-20 bg-orange-900 rounded-xl stagger-box"></div>

                </div>
            </div>
        </div>
    );
};

export default GsapStagger;