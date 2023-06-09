import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import Head from "next/head";
import { CatNavigation } from "@/components/navigation/animal_navigation/CatNavigation";
import TitleHeader, {
  LargestParagraph,
  Paragraph,
  SectionTitleHeader,
} from "@/components/Utilities/ResponsiveText";

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
      </Head>
      <main>
        <PageLayout gap="gap-24">
          <section className="grid pt-12 text-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <TitleHeader heading="h1">Bli kjent med din huskatt</TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <div className="p-2 mx-auto bg-[#191617] w-fit rounded-xl">
                    <LargestParagraph className="text-transparent bg-gradient-to-r from-[#ac9997] via-[#a9976d] to-[#bbaba0] bg-clip-text">
                      Huskatter er en mangfoldig gruppe av katter som ikke
                      tilhører en spesifikk rase, men heller er et resultat av
                      naturlig avl og kattens tilpasningsevne gjennom tidene.
                    </LargestParagraph>
                  </div>
                  <div className="grid justify-center">
                    <Image
                      src="/cats/house_cat.png"
                      alt="huskatt"
                      width={300}
                      height={200}
                    />
                  </div>
                  <Paragraph className="text-black">
                    Huskatter kommer i alle former, størrelser og farger, og
                    hvert individ har sin egen unike personlighet. De er kjent
                    for sin tilpasningsevne og evnen til å trives i ulike
                    miljøer. Huskatter er ofte elskelige, intelligente og
                    selskapelige. De har en naturlig nysgjerrighet og er flinke
                    til å tilpasse seg nye situasjoner. Disse kattene kan bli
                    fantastiske følgesvenner og skape et sterkt bånd med sine
                    eiere.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Som selvstendige jegere har huskatter en naturlig
                    jaktinstinkt og elsker å utforske omgivelsene sine. Vi gir
                    deg råd om hvordan du kan tilrettelegge for et berikende
                    utemiljø eller alternativer for innendørs lek og
                    aktiviteter, slik at katten din kan få utløp for sitt
                    naturlige behov for å jakte og utforske.
                  </Paragraph>
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
