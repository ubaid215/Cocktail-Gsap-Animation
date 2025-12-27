import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function GsapTo() {
    // Rule no 1 Always write hooks below the function
    // TDOD:  write gsap.to() method here
    useGSAP(()=>{
        gsap.to('#blue-box', {
            x:300,
            repeat:-1,
            yoyo:true,
            rotate: 360,
            duration: 1.5,
            ease: "bounce.in"
        })
    }, [])


  return (
    <div className='px-8'>
    <h1 className='text-center py-7 font-bold text-4xl'>GSAP To Animation in react</h1>
    <div className='mt-20'>
        <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-md'></div>
    </div>
    </div>
  )
}

export default GsapTo