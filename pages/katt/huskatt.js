import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import ResponsiveH1, {
  StandardH4,
  StandardP,
} from "@/components/Utilities/ResponsiveText";
import Head from "next/head";
import { DogNavigation } from "@/components/navigation/animal_navigation/DogNavigation";
import { CatNavigation } from "@/components/navigation/animal_navigation/CatNavigation";

export default function Huskatt() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Huskatt</title>
        <meta name="description" content="Informasjonsside om huskat" />
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
              <ResponsiveH1>Bli kjent med din huskatt</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <StandardH4 className="text-white">
                    Huskatter er en mangfoldig gruppe av katter som ikke
                    tilhører en spesifikk rase, men heller er et resultat av
                    naturlig avl og kattens tilpasningsevne gjennom tidene.
                  </StandardH4>
                  <div className="grid justify-center">
                    <Image
                      src="/cats/house_cat.png"
                      alt="huskatt"
                      width={300}
                      height={200}
                    />
                  </div>
                  <StandardP className="text-white">
                    Huskatter kommer i alle former, størrelser og farger, og
                    hvert individ har sin egen unike personlighet. De er kjent
                    for sin tilpasningsevne og evnen til å trives i ulike
                    miljøer. Huskatter er ofte elskelige, intelligente og
                    selskapelige. De har en naturlig nysgjerrighet og er flinke
                    til å tilpasse seg nye situasjoner. Disse kattene kan bli
                    fantastiske følgesvenner og skape et sterkt bånd med sine
                    eiere.
                  </StandardP>
                  <StandardP className="text-white">
                    Som selvstendige jegere har huskatter en naturlig
                    jaktinstinkt og elsker å utforske omgivelsene sine. Vi gir
                    deg råd om hvordan du kan tilrettelegge for et berikende
                    utemiljø eller alternativer for innendørs lek og
                    aktiviteter, slik at katten din kan få utløp for sitt
                    naturlige behov for å jakte og utforske.
                  </StandardP>
                </div>
              </div>
            </div>
          </section>
          <CatNavigation />
        </PageLayout>
      </main>
    </>
  );
}
