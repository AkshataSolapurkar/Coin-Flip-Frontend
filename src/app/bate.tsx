import React from 'react'
import { useRouter } from 'next/navigation';

const bate = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    // Navigate to the desired page when the button is clicked
    router.push('/takebate.tsx');
  };
  return (
    <div>
       <button className="bg-[#2A1853] text-white rounded-md mt-[48px] p-[10px]" onClick={handleButtonClick}>Connect Your Wallet</button>
    </div>
  )
}

export default bate
