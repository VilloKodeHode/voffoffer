import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import Head from "next/head";
import { BirdNavigation } from "@/components/navigation/animal_navigation/BirdNavigation";
import TitleHeader, {
  LargestParagraph,
  Paragraph,
} from "@/components/Utilities/ResponsiveText";

export default function Undulat() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Kanarifugl</title>
        <meta name="description" content="Informasjonsside om Kanarifugl" />
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
                Bli kjent med din Kanarifugl
              </TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <div className="p-2 mx-auto bg-slate-900 w-fit rounded-xl">
                    <LargestParagraph className="text-transparent bg-gradient-to-r from-[#feee2e] via-[#f7b926] to-[#fcce13] bg-clip-text">
                      Kanarifugler er små, fargerike og melodiøse fugler som
                      gjør fantastiske kjæledyr. Med deres vakre sang og levende
                      personligheter kan de lyse opp ethvert hjem.
                    </LargestParagraph>
                  </div>
                  <div className="grid justify-center">
                    <Image
                      src="/birds/canary.png"
                      alt="Kanarifugl"
                      width={300}
                      height={200}
                    />
                  </div>
                  <Paragraph className="text-black">
                    Kanarifugler er kjent for sin vakre og melodiske sang.
                    Hanner har spesielt imponerende sangferdigheter og kan synge
                    i forskjellige toner og mønstre. Deres søte og beroligende
                    sang kan skape en avslappende atmosfære i hjemmet ditt. Det
                    er verdt å merke seg at ikke alle kanarifugler synger like
                    mye eller like godt, da sangen deres også kan påvirkes av
                    individuelle forskjeller og miljøet de er i.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Disse fuglene er relativt enkle å ta vare på og trenger ikke
                    så mye plass som større fugler. De kan trives i mindre bur
                    eller voliere, men det er viktig at de har nok plass til å
                    fly og strekke vingene. Kanarifugler er også kjent for å
                    være ganske aktiv og liker å utforske omgivelsene sine. De
                    kan glede seg over små leker og gjenstander som gir
                    stimulering og underholdning.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Når det gjelder ernæring, bør kanarifugler få et godt
                    kvalitetsfôr spesifikt utviklet for deres behov. Dette kan
                    inkludere frøblandinger, pellets og ferske frukt- og
                    grønnsaksbiter. Tilgang til friskt vann er også essensielt.
                    Det er viktig å merke seg at kanarifugler har en tendens til
                    å være mer frøavhengige, så det er viktig å sørge for
                    variasjon og supplere med andre næringsrike matvarer.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Kanarifugler er generelt sett ikke så sosiale som andre
                    fugler og er vanligvis fornøyde med å være alene. Imidlertid
                    kan de likevel nyte sosial interaksjon med eierne sine,
                    spesielt hvis de får tilstrekkelig oppmerksomhet og
                    stimulering. Du kan snakke med kanarifuglen din og tilbringe
                    tid nær buret deres for å opprettholde et positivt og
                    kjærlig forhold.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Enten du allerede har en kanarifugl eller vurderer å skaffe
                    deg en, ønsker vi å være en pålitelig kilde til informasjon
                    og veiledning for deg. Vår visjon er å hjelpe deg med å
                    skape et kjærlig og omsorgsfullt forhold til din kan
                  </Paragraph>
                </div>
              </div>
            </div>
          </section>
          <BirdNavigation />
        </PageLayout>
      </main>
    </>
  );
}
