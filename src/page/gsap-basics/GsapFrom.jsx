import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function GsapFrom() {
    useGSAP(()=>{
        gsap.from('#green-box', {
            x: 360,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            rotate: 360,
            ease: "power2.in"
        })
    }, [])

  return (
    <div className='px-10 py-8'>
        <h1 className='text-3xl font-mono text-center'>GSAP From Animation</h1>
        <div className='mt-12'>
            <div id='green-box' className='w-20 h-20 bg-green-600 rounded-sm'></div>
        </div>
    </div>

  )
}

export default GsapFrom