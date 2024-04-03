import Image from 'next/image'
import React from 'react'
import upcomingEvent from "../../assets/home/seriesE.jpg"
import Countdown from './Countdown'
import Card from '../common/Card'
import card1 from "../../assets/home/card1.png"

const UpcomingEvent = () => {
  return (
    <div className="p-8 my-[4rem] bg-[#FA8A1A] w-[100%] rounded-[1.5rem] flex flex-col gap-y-[2rem] gap-x-[1rem] md:grid  md:grid-cols-2 " 
    >
      <Image className='rounded-[1.5rem] w-[100%] ' src={upcomingEvent} alt='Upcoming Event Picture' style={{}} />
      <Countdown />
      <div className='hidden md:grid md:grid-cols-2 gap-y-[2rem] gap-x-[1rem] col-span-2' >
        <Card image={card1} heading='Series B' body="We're trying to take the awkwardness out of professional" color='bg-[#FFF4E9]' headingColor="text-[#fa8a1a]" />
        <Card image={card1} heading='Series C' body="We're trying to take the awkwardness out of professional" color='bg-[#FFF4E9]' headingColor="text-[#fa8a1a]" />
      </div>
    </div>
  )
}

export default UpcomingEvent