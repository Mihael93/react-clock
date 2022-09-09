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
