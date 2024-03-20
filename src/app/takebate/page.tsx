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
                      <div className="makebate">
                        <h1 className="">Select</h1>
                        <div className="continputs mt-[6px]">
                             <div className="inputgaps">
                             <input className="rounded-full" type="checkbox" id="checkbox1" name="checkbox1" value="value1" />
                             <label htmlFor="checkbox1">Heads</label>
                            
                             <div className="inputgaps">
                             <input className="rounded-full" type="checkbox" id="checkbox2" name="checkbox2" value="value2" />
                             <label htmlFor="checkbox2">Tails</label></div>
                            
                        </div>
                        <div>
                            <h1 className="font-medium text-[14px]">Betting amount</h1>
                            <input className="Bettinginput" type="text" id="dollarAmount" name="dollarAmount" placeholder="$" />
                             
                        </div>
                        <button className="text-center btn bg-[#2A1853] text-white flex justify-center">Place Your Bet</button>
                      </div>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  );
}

