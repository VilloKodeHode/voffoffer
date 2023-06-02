//Header component

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { LOGO } from "./menu_list";
import ChakraDrawer from "./ChakraDrawer";
import { useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { ResponsiveH5 } from "../Utilities/ResponsiveText";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleImageClick = () => {
    activeLink && setActiveLink("");
    onClose();
  };

  return (
    <>
      <header
        className={`relative flex flex-col h-28 w-full justify-center px-12 animate-SlideInFromTop shadow-md z-10 backdrop-blur-[1px] bg-white`}
      >
        <div className="z-50 flex items-center justify-between h-28">
          <div className="lg:min-w-[500px] min-w-[150px] gap-8">
            {LOGO.map((logo) => (
              <Link key={logo.text} href={logo.href}>
                <Image
                  onClick={handleImageClick}
                  src={logo.imageSrc}
                  width={logo.imageWidth}
                  height={logo.imageHeight}
                  alt="Vallhalla Beards logo"
                  className="duration-200 hover:scale-105"
                />
              </Link>
            ))}
            {/* <div className="items-center justify-center hidden grid-flow-row font-semibold lg:grid animate-SlideInFromLeft">
              <p className="text-black75 text-[12px]">
                &#10077;
                {language === "Norwegian"
                  ? "Drevet med ambisjoner, ekspertise og en uendelig tilførsel av koffein"
                  : "Driven by ambitions, expertise and an endless supply of caffeine"}
                &#10078;
              </p>
              <p className="text-black75 text-[10px]">
                VilloKodeHode@gmail.com
              </p>
            </div> */}
          </div>
          <Navbar
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />

          <ChakraDrawer
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </div>
      </header>
    </>
  );
}
