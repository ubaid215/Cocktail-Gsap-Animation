import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

function GsapScrolltrigger(){
    const ScrollRef = useRef();
    useGSAP(()=>{
        const boxes = gsap.utils.toArray(ScrollRef.current.children);
        boxes.forEach((box) =>{
            gsap.to(box, {
                x: 500,
                rotate: 720,
                scale: 2,
                scrollTrigger: {
                    trigger: box,
                    // scroller: "body",
                    markers: true,
                    start: 'bottom bottom',
                    end: "top 30%",
                    scrub: true,
                },
                ease: "power3.inOut"
            })
        })
        // gsap.to('#pink-box', {
        //     x: 500,
        //     scale: 1.5,
        //     rotate: 720,
        //     borderRadius: "70%",
        //     scrollTrigger: {
        //         trigger: "#pink-box",
        //         scroller: "body",
        //         markers: true,
        //         start: "top 50%",
        //         end: "top 20%",
        //         scrub: true,

        //     }
        // })
    }, {scope:ScrollRef})


    return(
        <div className="py-10 px-8">
            <h1 className="font-serif text=center h-screen">GSAP ScrollTrigger Learning</h1>
            <div className="h-screen flex flex-col gap-5" ref={ScrollRef}>
                <div id="pink-box" className="w-20 h-20 bg-pink-500 rounded-sm"></div>
                <div id="orange-box" className="w-20 h-20 bg-amber-500 rounded-sm"></div>
            </div>
        </div>
    )
};

export default GsapScrolltrigger