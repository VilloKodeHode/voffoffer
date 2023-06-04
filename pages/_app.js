import { ScrollToTopButton } from "@/components/base components/Buttons";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Figtree } from "next/font/google";
import { useState } from "react";

const figtree = Figtree({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [activeLink, setActiveLink] = useState("");
  return (
    <>
      <div className={` ${figtree.className} font-Figtree`}>
        <ChakraProvider>
          <Header activeLink={activeLink} setActiveLink={setActiveLink} />
          <Component
            {...pageProps}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
          <Footer />
          <ScrollToTopButton />
        </ChakraProvider>
      </div>
    </>
  );
}
