import './AnalogClock.css';
import { useState, useEffect } from "react";

function AnalogClock() {

   const [date, setDate] = useState(new Date());

   const secondsMath = date.getSeconds();
   const secondsDegrees = ((secondsMath / 60) * 360) + 90;
   const secondsTransform = `rotate(${secondsDegrees}deg)`;

   const minsMath = date.getMinutes();
   const minsDegrees = ((minsMath / 60) * 360) + ((secondsMath / 60) * 6) + 90;
   const minutesTransform = `rotate(${minsDegrees}deg)`;

   const hourMaths = date.getHours();
   const hourDegrees = ((hourMaths / 12) * 360) + ((minsMath / 60) * 30) + 90;
   const hoursTransform = `rotate(${hourDegrees}deg)`;

   const [seconds, setSeconds] = useState(secondsTransform);
   const [minutes, setMinutes] = useState(minutesTransform);
   const [hours, setHours] = useState(hoursTransform);

   useEffect(() => {
      var timerId = setInterval(() => tick());
      return function cleanup() {
         clearInterval(timerId);
      }
   });

   function tick() {
      setDate(new Date());
      setSeconds(secondsTransform);
      setMinutes(minutesTransform);
      setHours(hoursTransform);
   };

   return (
      <div className="clock">
         <div className='clock__outer-face'>
            <div className="marking marking-one"></div>
            <div className="marking marking-two"></div>
            <div className="marking marking-three"></div>
            <div className="marking marking-four"></div>

            <div className='clock-inner-marks'>
               <div className="marking-small marking-small-2"></div>
               <div className="marking-small marking-small-3"></div>
               <div className="marking-small marking-small-4"></div>
               <div className="marking-small marking-small-5"></div>

               <div className="marking-small marking-small-6"></div>
               <div className="marking-small marking-small-7"></div>
               <div className="marking-small marking-small-8"></div>
               <div className="marking-small marking-small-9"></div>

               <div className="marking-small marking-small-10"></div>
               <div className="marking-small marking-small-11"></div>
               <div className="marking-small marking-small-12"></div>
               <div className="marking-small marking-small-13"></div>

               <div className="marking-small marking-small-14"></div>
               <div className="marking-small marking-small-15"></div>
               <div className="marking-small marking-small-16"></div>
               <div className="marking-small marking-small-17"></div>

               <div className="marking-small marking-small-18"></div>
               <div className="marking-small marking-small-19"></div>
               <div className="marking-small marking-small-20"></div>
               <div className="marking-small marking-small-21"></div>

               <div className="marking-small marking-small-22"></div>
               <div className="marking-small marking-small-23"></div>
               <div className="marking-small marking-small-24"></div>
               <div className="marking-small marking-small-25"></div>
            </div>

            <div className='clock__numbers'>
               <span className="h3">3</span>
               <span className="h6">6</span>
               <span className="h9">9</span>
               <span className="h12">12</span>
            </div>
            <div className='clock__inner-face'>
               <div className="hand hour-hand" style={{ transform: `${hours}` }} ></div>
               <div className="hand min-hand" style={{ transform: `${minutes}` }}></div>
               <div className="hand second-hand" style={{ transform: `${seconds}` }}></div>
            </div>
         </div>
      </div>
   );
}

export default AnalogClock;
