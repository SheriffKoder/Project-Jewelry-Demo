import React from 'react'
import scrollHand from "@/public/icons/hand.png"
import Image from 'next/image';

const ScrollHandLogo = () => {
  return (
    
      <div className="p-1 rounded-lg border-2 border-[#e18cb6] ml-auto">
        <div className="w-7 h-7 relative ">
          <Image src={scrollHand} alt="finger scroll" fill />
        </div>
      </div>      
  )
}

export default ScrollHandLogo