"use client"

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Orbit = () => {

  useEffect(()=>{
    gsap.to(".orbit",{
      ease:'none',
      scrollTrigger:{
        trigger:".orbit",
        start:"top bottom",
        end:"bottom top",
        scrub:true,
        onUpdate: (self)=>{
          const scrollAmount = (60 - self.progress * 150)%360;
          gsap.to(".orbit",{
            rotation:scrollAmount,
            ease:'none'
          })

        }
      }
    })
  },[])
  return (
      <div className='orbit top-0 w-[1411px] h-[1411px] flex items-center justify-center rounded-full border-[2px] border-primary/10'>
        <div className='w-[1015px] h-[1015px] flex items-center justify-center rounded-full border-[2px] border-primary/15'>
          <div className='relative w-[755px] h-[755px] flex items-center justify-center rounded-full border-[2px] border-primary/15'>
            <div className='absolute top-[283px] -left-[10px] w-[38px] h-[38px] rounded-full bg-primary/40'/>

            <div className='relative w-[569px] h-[569px] flex items-center justify-center rounded-full border-[4px] border-primary/15'>
              <div className='absolute top-[544px] left-[237px] w-[38px] h-[38px] rounded-full bg-primary/40'/>
              <div className='w-[393px] h-[393px] flex items-center justify-center rounded-full border-[6px] border-primary/40'>
                <div className='w-[118px] h-[118px] rounded-full border border-primary/50' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Orbit