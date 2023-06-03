import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import ResponsiveH1, {
  ResponsiveP,
  StandardH1,
  StandardH2,
  StandardH4,
  StandardP,
} from "@/components/Utilities/ResponsiveText";
import Head from "next/head";
import Link from "next/link";
import NormalButton from "@/components/base components/Buttons";
import { DogNavigation } from "@/components/navigation/animal_navigation/DogNavigation";

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

        <link rel="icon" href="/logo/main_logo.png" />
      </Head>
      <main>
        <PageLayout gap="gap-24">
          <section className="grid pt-12 text-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <ResponsiveH1>Bli kjent med din Golden Retriever</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <StandardH4 className="text-black">
                    Golden retrievere er kjent for sin elskelige natur,
                    intelligens og allsidighet, og vi ønsker å gi deg all
                    nødvendig informasjon om denne fantastiske rasen.
                  </StandardH4>
                  <div className="grid justify-center">
                    <Image
                      src="/navigation/golden_retriever_puppy.png"
                      alt="berner sennen puppy"
                      width={300}
                      height={200}
                    />
                  </div>
                  <StandardP className="text-black">
                    Golden retrievere er kjent for sitt vennlige og tillitsfulle
                    vesen. De er kjærlige og hengivne følgesvenner som elsker å
                    tilbringe tid sammen med familien sin. Denne rasen er også
                    svært intelligent og lærevillig, noe som gjør dem til en
                    utmerket kandidat for trening og lydighet.
                  </StandardP>
                  <StandardP className="text-black">
                    Golden retrievere er også kjent for sin allsidighet og evne
                    til å trives i ulike aktiviteter. Enten det er agility,
                    sporarbeid, redningstjeneste eller enkle leker i hagen, er
                    Golden retrieveren en entusiastisk deltaker.
                  </StandardP>
                  <StandardP className="text-black">
                    Uansett om du allerede er en stolt eier av en Golden
                    retriever eller vurderer å skaffe deg en, ønsker vi å være
                    en pålitelig kilde til informasjon for deg. Vår side er
                    dedikert til å hjelpe deg med å forstå og ta vare på denne
                    fantastiske rasen, slik at både du og din Golden retriever
                    kan nyte et rikt og harmonisk liv sammen.
                  </StandardP>
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
