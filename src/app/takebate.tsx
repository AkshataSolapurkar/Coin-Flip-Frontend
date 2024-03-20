import React from 'react'
import Image from 'next/image'

export default function takebate() {
  return (
    <div>
      <div className="container m-auto p-[0px] box-border">
        <header  className="px-[10px] flex mx-14 my-[30px] justify-between items-center">
            
                <div className="flex justify-center gap-3">
                    <Image width={30} height={30} src="/Logomark.png" alt="Logo"/>
                    <span className="text-white font-bold text-[20px]">CoinFlip</span>
                    </div>
                    <div className="flex justify-between gap-6 ">
                       <button className="text-white font-medium text-[16px]" >Learn More</button>
                       <button className="bg-[#7F56D9] p-[10px] rounded-md text-white font-[700] text-[16px]">Connect Wallet</button>
                    </div>
        
            
            
        </header>
        <div className="herohead">
            <div className="">
        
            <Image className="left-custom relative" fill src="/cryptocurrency-casino 1.png" alt="pic"/>
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
</div>
  );
}

