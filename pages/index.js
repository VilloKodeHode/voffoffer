import Image from 'next/image'

import PageLayout from "@/components/Utilities/Layout";
import Head from "next/head";
import Link from "next/link";
import TitleHeader, {
  Paragraph,
  SectionTitleHeader,
} from "@/components/Utilities/ResponsiveText";

export default function Home({ setActiveLink }) {
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
              <TitleHeader heading="h1">
                Bli kjent med dine kjæledyr!
              </TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 p-6">
                  <Paragraph className="text-black ">
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
                  </Paragraph>
                </div>
              </div>
            </div>
          </section>
          <section className="grid gap-8">
            <SectionTitleHeader heading="h2" className="text-center">
              Hvilket kjæledyr vil du lese om?
            </SectionTitleHeader>
            <div className="flex flex-wrap gap-8 md:flex-nowrap">
              <div className="grid justify-center w-full md:w-1/3">
                <Link
                  href="/hund"
                  className="grid"
                  onClick={() => {
                    setActiveLink("Hund");
                  }}
                >
                  <Image
                    src="/dogs/voffoffer_logo.png"
                    alt="Kjælevenner logo"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <Paragraph className="text-center">Hund</Paragraph>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link
                  href="/katt"
                  className="grid"
                  onClick={() => {
                    setActiveLink("Katt");
                  }}
                >
                  <Image
                    src="/cats/pusekatt_logo.png"
                    alt="Image 2"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <Paragraph className="self-end text-center">Katt</Paragraph>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link
                  href="/fugl"
                  className="grid"
                  onClick={() => {
                    setActiveLink("Fugl");
                  }}
                >
                  <Image
                    src="/birds/pippipp_logo.png"
                    alt="Image 3"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <Paragraph className="text-center">Fugl</Paragraph>
                </Link>
              </div>
            </div>
          </section>
        </PageLayout>
      </main>
    </>
  );
}
