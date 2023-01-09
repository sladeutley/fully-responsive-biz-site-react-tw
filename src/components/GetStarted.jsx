import React from 'react'
import styles from '../style'
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} sm:ml-16 w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    {/* Above, 'sm:ml-16' seems to mean margin left of 16 on every device except small devices, whereas I thought it would mean on small devices have margin left of 16, everything else no margin left. But it's working */}
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        {/* <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2"> */}
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted