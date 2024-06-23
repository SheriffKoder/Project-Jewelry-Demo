import React from 'react'
import LoadingLogo from './LoadingLogo'

const LoadingUI = ({progress}:{progress:string}) => {
  const prog = progress;
  console.log(progress);
  return (
    <div className="LoadingUI relative w-[200px]">
        <span className="flex items-center justify-center w-full">
            <LoadingLogo />
        </span>

        <div className="absolute w-full mt-3 text-center text-white">
          Loading
          <div className="h-2 w-[100px] bg-gray-50 mt-1 rounded-full">
            
            <div className={`h-2 bg-[#e18cb6] 
            ${+prog >= 98 ? "rounded-full" : "rounded-l-full" }
            `}
            style={{width: prog+"px"}}/>
          </div>
          
        </div>
       
    </div>
  )
}

export default LoadingUI