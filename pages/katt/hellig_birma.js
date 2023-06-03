import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import ResponsiveH1, {
  StandardH4,
  StandardP,
} from "@/components/Utilities/ResponsiveText";
import Head from "next/head";
import { DogNavigation } from "@/components/navigation/animal_navigation/DogNavigation";
import { CatNavigation } from "@/components/navigation/animal_navigation/CatNavigation";

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

        <link rel="icon" href="/logo/main_logo.png" />
      </Head>
      <main>
        <PageLayout gap="gap-24">
          <section className="grid pt-12 text-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <ResponsiveH1>Bli kjent med din Hellige birma</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <StandardH4 className="text-black">
                    Hellig birma er en vakker og fascinerende katterase med en
                    rik historie og en unik personlighet.
                  </StandardH4>
                  <div className="grid justify-center">
                    <Image
                      src="/cats/holy_birma.png"
                      alt="hellig birma"
                      width={300}
                      height={200}
                    />
                  </div>
                  <StandardP className="text-black">
                    Hellig birma er kjent for sitt slående utseende, med sin
                    silkemyke, halvlange pels og intense, blå øyne. Men det er
                    ikke bare det ytre som gjør dem spesielle. Disse kattene har
                    en mild og kjærlig natur som gjør dem til fantastiske
                    følgesvenner og familiekatter.
                  </StandardP>
                  <StandardP className="text-black">
                    Hellig birma er kjent for å være sosiale og hengivne. De
                    knytter sterke bånd til sine eiere og trives i et kjærlig og
                    omsorgsfullt hjemmemiljø. Disse kattene er også kjent for
                    sin intelligens og lekne natur. De liker å være aktive og
                    deltar gjerne i lek og interaktive aktiviteter med sine
                    eiere.
                  </StandardP>
                  <StandardP className="text-black">
                    Hellig birma er også kjent for sin stemme og evne til å
                    kommunisere med sine eiere. De har en myk og behagelig miau,
                    og de er flinke til å uttrykke sine behov og ønsker. På vår
                    informasjonsside kan du lære å forstå og tolke hellig birmas
                    kroppsspråk og vokalisering, slik at du kan bygge et enda
                    sterkere bånd med katten din.
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
