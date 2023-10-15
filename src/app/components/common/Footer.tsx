import React from "react";
import instagramLogo from "@/public/instagram.svg";
import twitterLogo from "@/public/twitter.svg";
import linkedinLog from "@/public/linkedin.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <div className='p-7 bg-custom-black text-white flex justify-between'>
      <p className='ml-10'>ArielFebrian@mail.com</p>
      <div className='flex mr-28 gap-5'>
        <Image
          src={instagramLogo}
          alt='instagram logo'
          width={20}
          height={20}
        />
        <Image src={twitterLogo} alt='twitter logo' width={20} height={20} />
        <Image src={linkedinLog} alt='linkedin logo' width={20} height={20} />
      </div>
    </div>
  );
}
