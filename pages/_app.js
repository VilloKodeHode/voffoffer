import { ScrollToTopButton } from "@/components/base components/Buttons";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={figtree.className}>
        <ChakraProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ScrollToTopButton />
        </ChakraProvider>
      </div>
    </>
  );
}
