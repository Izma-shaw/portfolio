'use client';

import Image from 'next/image';
import { useTypewriter } from 'react-simple-typewriter';
import { IoMdContact, IoMdDownload } from "react-icons/io";

import { userData } from '@/lib/utils';
import SocialMediaLinks from '@/components/ui/SocialMediaLink';
import HeroBtn from './ui/HeroBtn';

function Header() {
  const [text] = useTypewriter({
    words: userData.profession,
    loop: 0
  });

  return (
    <header className="flex flex-col scroll-mt-24 md:gap-10 lg:gap-20 px-4 md:pl-2 sm:py-10 md:py-24 md:flex-row lg:justify-between lg:items-center" id="home">
      <Image className="md:hidden mx-auto rounded-xl ml-auto w-[200px] sm:w-[250px] sm:mr-0" src={userData.image} alt={userData.name} />
      <div className="flex flex-col gap-4 md:w-1/2 min-[670px]:w-1/2 md:gap-10 md:mb-5">
        {/* start of heading */}
        <h1 className="font-semibold text-3xl min-[505px]:text-4xl lg:text-5xl whitespace-nowrap">Bonjour,<br className="mb-1" /> C&apos;est
          <span className="text-green-600">{` ${userData.name}`}</span>
          <br className="sm:mb-2" />
          <span className="text-2xl sm:text-3xl whitespace-nowrap">
          <span> Actuellement en CDD chez ERILIA </span>
            <span className="">
              <b className="text-pink-600">{text}</b>
            </span>
          </span>
        </h1>

        <p className="text-pretty text-left text-sm sm:text-base md:text-lg">{userData.descriptionText}</p>
        {/* end of heading */}

        {/* start of social media */}
        <SocialMediaLinks size="25" />
        {/* end of social media */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <HeroBtn url="#contact" text="CONTACTER MOI">
            <IoMdContact size={20} />
          </HeroBtn>
          <HeroBtn url="/api/download-resume" text="TELECHARGER MON CV">
            <IoMdDownload size={20} />
          </HeroBtn>
        </div>
      </div>

      <Image className="hidden md:block md:w-[350px] md:rounded-full md:ml-12 lg:ml-16" src={userData.image} alt={userData.name} />
    </header>
  );
}

export default Header;
