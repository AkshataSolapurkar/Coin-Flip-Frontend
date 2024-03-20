"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Bate from "./bate";
import Link from "next/link";
import Takebate from "./takebate";
import Hero from "./Hero";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    // Navigate to the desired page when the button is clicked
    router.push('/takebate');
  };
  return (
<section>
    <Hero
    handleButtonClick={handleButtonClick}/>
    </section>
  );
}
