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

export default function BernerSennen() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Berner Sennen</title>
        <meta name="description" content="Informasjonsside om Berner Sennen" />
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
                Bli kjent med din Berner Sennen
              </TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <div className="p-2 mx-auto bg-[#e8e8e8] w-fit rounded-xl">
                    <LargestParagraph className="text-transparent bg-gradient-to-r from-[#3a3a3c] via-[#966f53] to-[#191619] bg-clip-text">
                      Berner Sennen-hunden er en majestetisk og vennlig rase som
                      har erobret hjertene til hundeeiere over hele verden.
                    </LargestParagraph>
                  </div>
                  <div className="grid justify-center">
                    <Image
                      src="/dogs/berner_sennen_puppy.png"
                      alt="berner sennen puppy"
                      width={300}
                      height={200}
                    />
                  </div>
                  <Paragraph className="text-black">
                    Berner Sennen-hunden er kjent for sitt imponerende utseende
                    med sitt karakteristiske trekantete hode, sjenerøse pels og
                    kraftige kropp. Men det er ikke bare utseendet som gjør dem
                    unike. Disse hundene har en herlig personlighet som er
                    kjærlig, trofast og mild.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Berner Sennen-hunder er utmerkede familiehunder og trives
                    godt i et kjærlig og omsorgsfullt hjemmemiljø. De er svært
                    sosiale og elsker å være en del av familien sin, i tillegg
                    er de veldig kjent for lojalitet til sine eiere. Som en stor
                    rase er det viktig å gi Berner Sennen-hunden riktig trening
                    og mosjon for å holde dem sunne og lykkelige. Disse hundene
                    har også en naturlig trang til å arbeide, og de kan trives
                    godt i aktiviteter som trekk, lydighet og besøksterapi.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Enten du allerede er en stolt eier av en Berner Sennen eller
                    vurderer å skaffe deg en, håper vi at vår informasjonsside
                    vil være en verdifull ressurs for deg. Vår visjon er å gi
                    deg den kunnskapen du trenger for å forstå og ta vare på
                    denne fantastiske rasen, slik at både du og din Berner
                    Sennen kan nyte et liv fylt av kjærlighet, eventyr og
                    trivsel.
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
