import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({maxWidth: 767})


    useGSAP(()=>{
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

        heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 70,
            opacity: 0,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        });

        gsap.from(paragraphSplit.lines, {
            yPercent:100,
            opacity: 0,
            duration: 1.8,
            delay: 1,
            ease: 'expo.out', 
            stagger: 0.06,
        });

         gsap.timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: 'top top', 
            end: 'bottom top',
            scrub: true,
          }
        })
        .to('.right-leaf', {y: 200}, 0)
        .to('.left-leaf', {y: -200}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger: {
                start: startValue,
                end: endValue,
                trigger: 'video',
                scrub: true,
                pin: true
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime : videoRef.current.duration,
                ease: 'none'
            })
        }
    },[])

  return (
    <>
    <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>

         <img src='/images/hero-left-leaf.png' alt='left-leaf' className='left-leaf'/>
         <img src='/images/hero-right-leaf.png' alt='right-leaf' className='right-leaf'/>


         <div className='body'>
            <div className='content'>
                <div className='hidden md:block space-y-5'>
                    <p>Cool. Crisp. Classic.</p>
                    <p className='subtitle'>Sip the Spirit <br /> of summer.</p>
                </div>

                <div className='view-cochtails'>
                    <p className='subtitle'>Every Cocktail on our menu is a blend of premium ingredients, <br /> creative flaires, and timeless recipes -- design to delight your sense.</p>
                    <a href="#cocktails">View Cocktails</a>
                </div>
            </div>
         </div>
    </section>

    <div className='video absolute  inset-0'>
        <video ref={videoRef} src='/videos/output.mp4' muted playsInline preload='auto'/>
    </div>
    </>
  )
}

export default Hero