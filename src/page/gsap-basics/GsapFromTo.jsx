import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function GsapFromTo() {

    useGSAP(()=>{
        gsap.fromTo('#red-box', {
            x: 0,
            rotate: 0,
            borderRadius: "0%",
        },{
            x: 500,
            borderRadius: "70%",
            repeat: -1,
            delay: 1,
            duration: 2,
            rotate: 360,
            yoyo: true,
            ease: "bounce.out"
        })
    },)
  return (
    <div className='p-20'>
        <h1 className='text-center font-semibold text-2xl'>GSAP FromTo animation</h1>
        <p className='text-center font-medium '>This animation helps to apply both new and current state of element.</p>

        <div className='mt-12'>
            <div id='red-box' className='w-20 h-20 bg-red-500 rounded-sm'></div>
        </div>
    </div>
  )
}

export default GsapFromTo