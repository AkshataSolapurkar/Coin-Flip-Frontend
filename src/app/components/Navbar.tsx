import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <header  className="px-[10px] flex mx-14 my-[30px] justify-between items-center">
            
            <div className="flex justify-center gap-3">
                <Image src="/Logomark.png" alt="Logo"
                width={30}
                height={30}/>
                <span className="text-white font-bold text-[20px]">CoinFlip</span>
                </div>
                <div className="flex justify-between gap-6 ">
                   <button className="text-white font-medium text-[16px]">Learn More</button>
                   <button className="bg-[#7F56D9] p-[10px] rounded-md text-white font-[700] text-[16px]">Connect Wallet</button>
                </div>
        
    </header>
    </div>
  )
}

export default Navbar
