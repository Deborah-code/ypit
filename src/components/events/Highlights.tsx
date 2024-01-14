import React from 'react'
import Image from 'next/image'
import highlight1 from "../../assets/events/highlight1.png"
import highlight2 from "../../assets/events/highlight2.png"
import highlight3 from "../../assets/events/highlight3.png"
import highlight4 from "../../assets/events/highlight4.png"
import highlight5 from "../../assets/events/highlight5.png"
import highlight6 from "../../assets/events/highlight6.png"
import highlight7 from "../../assets/events/highlight7.png"
import highlight8 from "../../assets/events/highlight8.png"
import highlight9 from "../../assets/events/highlight9.png"
import highlight10 from "../../assets/events/highlight10.png"

const Highlights = () => {
  return (
    <section className="w-[100%] py-[2rem]">
      <div className="text-left lg:flex lg:items-center lg:justify-between mb-[2rem] ">
        <h2 className="text-4 md:text-3 font-normal lg:w-[30%] mb-9 md:mb-0 ">
          Highlights from past events
        </h2>
        <p className="lg:w-[30%] md:pb-5">
          Browse our gallery, take a tour, and share in the experience of all of YPIT's previous events.
        </p>
      </div>
      <div className="grid grid-cols-6 grid-rows-[100px_43px_auto] gap-[1rem] w-[1300px] ml-[-150px] lg:ml-0 ">
        <Image src={highlight1} alt='highlight Image' className="row-[1/3] rounded-[10px] " />
        <Image src={highlight2} alt='highlight Image' className="row-[3] rounded-[10px]" />
        <Image src={highlight3} alt='highlight Image' className="row-[1/3] rounded-[10px]"/>
        <Image src={highlight4} alt='highlight Image' className="row-[1/2] rounded-[10px]" />
        <Image src={highlight5} alt='highlight Image' className="row-[2/3] rounded-[10px]" />
        <Image src={highlight6} alt='highlight Image' className='rounded-[10px]' />
        <Image src={highlight7} alt='highlight Image' className="row-[3/4] col-[4/5] rounded-[10px] " />
        <Image src={highlight8} alt='highlight Image' className="row-[1/3] col-[5/6] rounded-[10px] "  />
        <Image src={highlight9} alt='highlight Image' className='rounded-[10px]' />
        <Image src={highlight10} alt='highlight Image'className="row-[2/4] col-[6/7] rounded-[10px] " />
      </div>
    </section>
  )
}

export default Highlights