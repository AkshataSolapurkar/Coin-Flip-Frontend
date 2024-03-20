"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    // Navigate to the desired page when the button is clicked
    router.push('/takebate.tsx');
  };
  return (
    
<section>
    <div className="container m-auto p-[0px] box-border">
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
        <div className="herohead">
            <div className="">
                <Image width={1290} height={1290} className='z-0 absolute object-fit' 
                src="/cryptocurrency-casino 1.png" 
                alt="pic"/>
                <div className="absolute top-[35%] w-[75%] flex flex-col justify-center items-center left-1/2 max-w-[70%] -translate-x-1/2 bg-white shadow-md rounded-lg">
                    <div  className="px-[100px] pt-[50px] text-center">
                    <h2 className="text-[#212121] font-bold md:text-[72px] text-[45px]">Flip a coin & Win!</h2>
                    <p className="font-normal text-[20px] w-[] text-[#424242] pt-[20px] max-w-[99%]">To play, users predict "heads" or "tails" in a coin toss. If their guess matches the outcome, they win. Gamble responsibly, setting limits on spending and time.</p>
                    <a href="/takebate.tsx"><button className="bg-[#2A1853] text-white rounded-md mt-[48px] p-[10px]">Connect Your Wallet</button></a>
                    <p className="mt-[48px] md:mb-[70px] mb-[50px] text-[#686868] text-[14px] font-normal">We care about your data in our privacy policy.</p>
                    </div>
                    
            </div>
        </div>
    </div>
    </section>
  );
}
