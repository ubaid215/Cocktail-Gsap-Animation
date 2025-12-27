import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function GsapTimeline() {
    const tl = gsap.timeline({
        repeat: -1, repeatDelay:1, yoyo: true
    })
    useGSAP(()=>{
        tl.to("#yellow-box", {
            x: 200,
            rotate: 90,
            duration: 1,
            borderRadius:"20%",
            scale: 1.2,
            ease: "back.inOut" 
        })

        tl.to("#yellow-box", {
            x: 500,
            rotate: 270,
            delay: 1,
            duration: 2,
            borderRadius: "70%",
            ease: "back.inOut"
        })

        tl.to("#yellow-box", {
            y: 360,
            borderRadius: "10%",
            duration: 2,
            rotate: 0,
            scale: 2,
            ease: "back.inOut"
        })
    }, [])

  return (
    <div className='px-8'>
        <h1 className='py-10 font-mono text-3xl'>GsapTimeline</h1>
        <div className='mt-7'>
        <button className='bg-gray-600 text-white border-2 rounded-sm p-3 cursor-pointer' onClick={()=>{
            if (tl.paused()){
                tl.play();
            } else {
                tl.pause();
            }
        }}>Play/Pause</button>
            <div id='yellow-box' className='w-20 h-20 bg-yellow-500 rounded-xl'></div>
        </div>
    </div>
  )
}

export default GsapTimeline