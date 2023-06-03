import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import ResponsiveH1, {
  ResponsiveH3,
  ResponsiveP,
  StandardH1,
  StandardH2,
  StandardH4,
  StandardH5,
  StandardP,
} from "@/components/Utilities/ResponsiveText";
import Head from "next/head";
import Link from "next/link";
import NormalButton from "@/components/base components/Buttons";
import { DogNavigation } from "@/components/navigation/animal_navigation/DogNavigation";

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

        <link rel="icon" href="/logo/main_logo.png" />
      </Head>
      <main>
        <PageLayout gap="gap-24">
          <section className="grid pt-12 text-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <ResponsiveH1>Bli kjent med din Berner Sennen</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <StandardH4 className="text-black">
                    Berner Sennen-hunden er en majestetisk og vennlig rase som
                    har erobret hjertene til hundeeiere over hele verden.
                  </StandardH4>
                  <div className="grid justify-center">
                    <Image
                      src="/dogs/berner_sennen_puppy.png"
                      alt="berner sennen puppy"
                      width={300}
                      height={200}
                    />
                  </div>
                  <StandardP className="text-black">
                    Berner Sennen-hunden er kjent for sitt imponerende utseende
                    med sitt karakteristiske trekantete hode, sjenerøse pels og
                    kraftige kropp. Men det er ikke bare utseendet som gjør dem
                    unike. Disse hundene har en herlig personlighet som er
                    kjærlig, trofast og mild.
                  </StandardP>
                  <StandardP className="text-black">
                    Berner Sennen-hunder er utmerkede familiehunder og trives
                    godt i et kjærlig og omsorgsfullt hjemmemiljø. De er svært
                    sosiale og elsker å være en del av familien sin, i tillegg
                    er de veldig kjent for lojalitet til sine eiere. Som en stor
                    rase er det viktig å gi Berner Sennen-hunden riktig trening
                    og mosjon for å holde dem sunne og lykkelige. Disse hundene
                    har også en naturlig trang til å arbeide, og de kan trives
                    godt i aktiviteter som trekk, lydighet og besøksterapi.
                  </StandardP>
                  <StandardP className="text-black">
                    Enten du allerede er en stolt eier av en Berner Sennen eller
                    vurderer å skaffe deg en, håper vi at vår informasjonsside
                    vil være en verdifull ressurs for deg. Vår visjon er å gi
                    deg den kunnskapen du trenger for å forstå og ta vare på
                    denne fantastiske rasen, slik at både du og din Berner
                    Sennen kan nyte et liv fylt av kjærlighet, eventyr og
                    trivsel.
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
