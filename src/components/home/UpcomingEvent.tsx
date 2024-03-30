import Image from 'next/image'
import React from 'react'
import upcomingEvent from "../../assets/home/upcomingSeries.png"
import Countdown from './Countdown'
import Card from '../common/Card'
import card1 from "../../assets/home/card1.png"

const UpcomingEvent = () => {
  return (
    <div className="grid md:grid-cols-2 gap-y-[2rem] gap-x-[1rem] p-8 rounded-[1.5rem] my-[4rem] " style={{backgroundColor: "#5100BF"}}>
      <Image className='rounded-[1.5rem] ' src={upcomingEvent} alt='' style={{}} />
      <Countdown />
      <div className='hidden md:grid md:grid-cols-2 gap-y-[2rem] gap-x-[1rem] col-span-2' >
        <Card image={card1} heading='Series B' body="We're trying to take the awkwardness out of professional" color='bg-white' />
        <Card image={card1} heading='Series C' body="We're trying to take the awkwardness out of professional" color='bg-white' />
      </div>
    </div>
  )
}

export default UpcomingEvent