import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function takebate() {
  return (
  
      <div className="container m-auto p-[0px] box-border">
        <Navbar/>
        <div className="herohead">
            <div className="">
        
            <Image className="relative -left-[35%]" width={1290} height={1290} src="/cryptocurrency-casino 1.png" alt="pic" />
                <div className="top-[35%] absolute flex flex-col justify-center items-center left-1/2 max-w-[70%] -translate-x-1/2 bg-white shadow-md rounded-lg">
                    <div  className="px-[100px] pt-[50px] pading  text-center">
                    <h2 className="text-[#212121] text-center font-bold md:text-[36px] text-[20px]">Make your bet, toss your coin</h2>
                      <div className="text-left bg-gray-50 pt-10 pl-20 pb-10 pr-20 text-gray-700 font-medium text-base mt-23">
                        <h1 className="">Select</h1>
                        <div className="flex flex-col gap-54 mt-[20px]">
                             <div className="flex gap-5 items-center mb-[15px]">
                             <input className="rounded-full" type="checkbox" id="checkbox1" name="checkbox1" value="value1" />
                             <label htmlFor="checkbox1">Heads</label>
                            
                             <div className="flex gap-5 items-center mb-15">
                             <input className="rounded-full" type="checkbox" id="checkbox2" name="checkbox2" value="value2" />
                             <label htmlFor="checkbox2">Tails</label></div>
                            
                        </div>
                        <div>
                            <h1 className="font-medium text-[14px]">Betting amount</h1>
                            <input className="mt-2 mb-8 pl-5 border border-solid border-gray-300 w-full rounded-lg" type="text" id="dollarAmount" name="dollarAmount" placeholder="$" />
                             
                        </div>
                        <button className="text-center w-full mt-18 rounded-lg bg-[#2A1853] text-white flex justify-center">Place Your Bet</button>
                      </div>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  );
}

