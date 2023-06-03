import Image from 'next/image'

import PageLayout from "@/components/Utilities/Layout";
import ResponsiveH1, {
  StandardH1,
  StandardH2,
  StandardH3,
  StandardP,
} from "@/components/Utilities/ResponsiveText";
import Head from "next/head";
import Link from "next/link";

//TODO: add activeLink to indexPage Hund/katt/fugl buttons on the page

export default function Home() {
  return (
    <>
      <Head>
        <title>Kjælevenner</title>
        <meta name="description" content="Informasjonsside om kjæledyr" />
        <meta
          name="keywords"
          content="kjæledyr, hund, katt, pippip, pusekatt, voffoffer, kjælevenner, fugler, husdyr"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/logo/main_logo.png" />
      </Head>
      <main>
        <PageLayout gap="gap-24">
          <section className="grid pt-12 text-center">
            <div className="grid gap-8">
              <ResponsiveH1>Bli kjent med dine kjæledyr!</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 p-6">
                  <StandardP className="text-black ">
                    Velkommen til vår omfattende informasjonside for kjæledyr!
                    Vi forstår viktigheten av å ha et kjæledyr i livet ditt og
                    ønsker å gi deg den beste veiledningen og kunnskapen for å
                    sikre at du kan gi dine pelskledde venner et lykkelig og
                    sunt liv. Uansett om du har en hund, katt, fugl, fisk eller
                    en annen type kjæledyr, er denne siden dedikert til å gi deg
                    nyttige tips, råd og informasjon om alt fra stell og
                    ernæring til trening og oppførsel. Vi er her for å hjelpe
                    deg med å forstå og ta vare på behovene til kjæledyret ditt,
                    slik at dere kan nyte et liv fullt av kjærlighet, glede og
                    harmoni sammen. Så bli med oss og la oss utforske den
                    fantastiske verdenen av kjæledyr sammen!
                  </StandardP>
                </div>
              </div>
            </div>
          </section>
          <section className="grid gap-8">
            <StandardH3 className="text-center">
              Hvilket kjæledyr vil du lese om?
            </StandardH3>
            <div className="flex flex-wrap gap-8 md:flex-nowrap">
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/hund" className="grid">
                  <Image
                    src="/dogs/voffoffer_logo.png"
                    alt="Kjælevenner logo"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <StandardP className="text-center">Hund</StandardP>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/katt" className="grid">
                  <Image
                    src="/cats/pusekatt_logo.png"
                    alt="Image 2"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <StandardP className="self-end text-center">Katt</StandardP>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/fugl" className="grid">
                  <Image
                    src="/birds/pippipp_logo.png"
                    alt="Image 3"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <StandardP className="text-center">Fugl</StandardP>
                </Link>
              </div>
            </div>
          </section>
        </PageLayout>
      </main>
    </>
  );
}
