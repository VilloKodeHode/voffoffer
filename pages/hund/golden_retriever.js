import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";

import Head from "next/head";
import Link from "next/link";
import NormalButton from "@/components/base components/Buttons";
import { DogNavigation } from "@/components/navigation/animal_navigation/DogNavigation";
import TitleHeader, {
  LargestParagraph,
  Paragraph,
  SectionTitleHeader,
} from "@/components/Utilities/ResponsiveText";

export default function GoldenRetriever() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Golden Retriever</title>
        <meta
          name="description"
          content="Informasjonsside om Golden Retriever"
        />
        <meta
          name="keywords"
          content="kjæledyr, hund, katt, pippip, pusekatt, voffoffer, kjælevenner, fugler, husdyr"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <PageLayout gap="gap-24">
          <section className="grid pt-12 text-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <TitleHeader heading="h1">
                Bli kjent med din Golden Retriever
              </TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <div className="p-2 mx-auto bg-slate-900 w-fit rounded-xl">
                    <LargestParagraph className="text-transparent bg-gradient-to-r from-[#d1cdca] via-[#e7e1e1] to-[#dfdad4] bg-clip-text">
                      Golden retrievere er kjent for sin elskelige natur,
                      intelligens og allsidighet, og vi ønsker å gi deg all
                      nødvendig informasjon om denne fantastiske rasen.
                    </LargestParagraph>
                  </div>
                  <div className="grid justify-center">
                    <Image
                      src="/dogs/golden_retriever_puppy.png"
                      alt="golden retriever puppy"
                      width={300}
                      height={200}
                    />
                  </div>
                  <Paragraph className="text-black">
                    Golden retrievere er kjent for sitt vennlige og tillitsfulle
                    vesen. De er kjærlige og hengivne følgesvenner som elsker å
                    tilbringe tid sammen med familien sin. Denne rasen er også
                    svært intelligent og lærevillig, noe som gjør dem til en
                    utmerket kandidat for trening og lydighet.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Golden retrievere er også kjent for sin allsidighet og evne
                    til å trives i ulike aktiviteter. Enten det er agility,
                    sporarbeid, redningstjeneste eller enkle leker i hagen, er
                    Golden retrieveren en entusiastisk deltaker.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Uansett om du allerede er en stolt eier av en Golden
                    retriever eller vurderer å skaffe deg en, ønsker vi å være
                    en pålitelig kilde til informasjon for deg. Vår side er
                    dedikert til å hjelpe deg med å forstå og ta vare på denne
                    fantastiske rasen, slik at både du og din Golden retriever
                    kan nyte et rikt og harmonisk liv sammen.
                  </Paragraph>
                </div>
              </div>
            </div>
          </section>
          <DogNavigation />
        </PageLayout>
      </main>
    </>
  );
}
