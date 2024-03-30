import React, { useEffect, useState } from 'react'
import Button from '../common/Button'

const Countdown = () => {
  const [countDown, setCountDown] = useState<[] | (string | number)[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date("2024-04-27 13:00"); // create a new date object of the event date
      const today = new Date() // get today's date 
      const diff = eventDate.getTime() - today.getTime() // get the difference betwween the event date and today's date in milliseconds
      const timeLeft = { // Define the timeLeft object with keys representing time units (days, hours, minutes, seconds) and their corresponding values
        //If the condition diff > 0 is true, this expression calculates the number of the time unit(days, hours, minutes, seconds) by dividing the time difference (in milliseconds) by the number of milliseconds in a day (1000 * 60 * 60 * 24), and then taking the floor value to get the integer number of days.
        days: diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0,
        hours: diff > 0 ? Math.floor((diff / (1000 * 60 * 60)) % 24) : 0,
        minutes: diff > 0 ? Math.floor((diff / 1000 / 60) % 60) : 0,
        seconds: diff > 0 ? Math.floor((diff / 1000) % 60): 0
      };
      const arr = Object.values(timeLeft).reduce( // Reduce the values of the timeLeft object to an array
        (acc: string[], val: number | string, index: number, array: (number | string)[]) => {
          const value = String(val).length === 1 ? "0" + String(val) : String(val) // check if the current value's length is greater than 1, then use it string value else add prefix 0 => 01
          acc.push(value); // push the new value to accumulator array
          if (index !== array.length - 1) { // add ":" after the current value if it is not the the last item in the reduced array
            acc.push(":");
          }
          return acc; // return the new array
        },
        []
      );
      setCountDown(arr) // set Countdown value to the reduced array
    }, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <div className=' text-left' >
      <div style={{backgroundColor: "#fff"}} className=' p-[12px] md:w-[max-content] rounded-[1rem] '>
        <p className=' text-purple-100 text-[1.5rem] ' >Series E</p>
        {countDown.length && countDown.join("").split("").map((char: string | number) => (
          <span key={char} className={` ${char !== ":" ? "bg-purple-20" : ""} text-purple-100 mx-[5px] py-[5px] px-[5px] text-3 `}>
            {char}
          </span>
        ))}
      </div>
      <p className='text-white w-[70%] text-[1.15rem] my-[1rem] '>Ignite your creativity and learn from visionary speakers shaping the future. 3:00pm-6:00pm</p>
      <div className=' flex gap-[1rem] ' >
        <Button text="Save a spot" />
        <Button text="Check out other events" noIcon transparent />
      </div>
    </div>
  )
}

export default Countdown