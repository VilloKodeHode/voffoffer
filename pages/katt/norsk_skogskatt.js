import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import Head from "next/head";
import { CatNavigation } from "@/components/navigation/animal_navigation/CatNavigation";
import TitleHeader, {
  LargestParagraph,
  Paragraph,
  SubTitleHeader,
} from "@/components/Utilities/ResponsiveText";

export default function NorskSkogskatt() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Norsk skogskatt</title>
        <meta
          name="description"
          content="Informasjonsside om Norsk skogskatt"
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
                Bli kjent med din Norske skogskatt
              </TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <div className="p-2 mx-auto bg-[#eaf3f2] w-fit rounded-xl">
                    <LargestParagraph className="text-transparent bg-gradient-to-r from-[#c88561] via-[#8e5134] to-[#342921] bg-clip-text">
                      Norsk skogskatt er en vakker og majestetisk rase med
                      røtter som strekker seg tilbake i tid.
                    </LargestParagraph>
                  </div>
                  <div className="grid justify-center">
                    <Image
                      src="/cats/norwegian_forestcat.png"
                      alt="Norsk skogskatt"
                      width={300}
                      height={200}
                    />
                  </div>
                  <Paragraph className="text-black">
                    Norsk skogskatt er kjent for sin imponerende pels, store
                    størrelse og en karakteristisk ``Viking-look`` med tuftede
                    ører og buskete hale. Men det er ikke bare utseendet som
                    gjør dem spesielle. Disse kattene har en sterk personlighet,
                    er intelligente og har et vennlig og mildt vesen. Som navnet
                    antyder, stammer Norsk skogskatt opprinnelig fra de barske
                    skogene i Norge, der den tilpasset seg det kalde klimaet og
                    de utfordrende forholdene.
                  </Paragraph>
                  <Paragraph className="text-black">
                    På vår informasjonsside vil du lære om Norsk skogskatts
                    temperament, adferd og hva som gjør dem så unike som
                    katteraser. Norsk skogskatt er kjent for å være gode
                    familiekatter og trives godt i et kjærlig og omsorgsfullt
                    hjemmemiljø. De er sosiale og knytter ofte sterke bånd til
                    sine eiere.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Norsk skogskatter er også kjent for sin atletiske evne og
                    naturlige jaktinstinkt. De elsker å utforske og klatre, og
                    de trives spesielt godt utendørs.
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
