import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";

import Head from "next/head";

import { CatNavigation } from "@/components/navigation/animal_navigation/CatNavigation";
import TitleHeader, {
  LargestParagraph,
  Paragraph,
} from "@/components/Utilities/ResponsiveText";

export default function HelligBirma() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Hellig birma</title>
        <meta name="description" content="Informasjonsside om Hellig birma" />
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
                Bli kjent med din Hellige birma
              </TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <div className="p-2 mx-auto bg-[#dcd0c7] w-fit rounded-xl">
                    <LargestParagraph className="text-transparent bg-gradient-to-r from-[#382716] via-[#384967] to-[#100e0c] bg-clip-text">
                      Hellig birma er en vakker og fascinerende katterase med en
                      rik historie og en unik personlighet.
                    </LargestParagraph>
                  </div>
                  <div className="grid justify-center">
                    <Image
                      src="/cats/holy_birma.png"
                      alt="hellig birma"
                      width={300}
                      height={200}
                    />
                  </div>
                  <Paragraph className="text-black">
                    Hellig birma er kjent for sitt slående utseende, med sin
                    silkemyke, halvlange pels og intense, blå øyne. Men det er
                    ikke bare det ytre som gjør dem spesielle. Disse kattene har
                    en mild og kjærlig natur som gjør dem til fantastiske
                    følgesvenner og familiekatter.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Hellig birma er kjent for å være sosiale og hengivne. De
                    knytter sterke bånd til sine eiere og trives i et kjærlig og
                    omsorgsfullt hjemmemiljø. Disse kattene er også kjent for
                    sin intelligens og lekne natur. De liker å være aktive og
                    deltar gjerne i lek og interaktive aktiviteter med sine
                    eiere.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Hellig birma er også kjent for sin stemme og evne til å
                    kommunisere med sine eiere. De har en myk og behagelig miau,
                    og de er flinke til å uttrykke sine behov og ønsker. På vår
                    informasjonsside kan du lære å forstå og tolke hellig birmas
                    kroppsspråk og vokalisering, slik at du kan bygge et enda
                    sterkere bånd med katten din.
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
