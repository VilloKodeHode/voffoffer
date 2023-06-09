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
        <title>Kjælevenner - Undulat</title>
        <meta name="description" content="Informasjonsside om Undulat" />
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
              <TitleHeader heading="h1">Bli kjent med din Undulat</TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <div className="p-2 mx-auto bg-slate-900 w-fit rounded-xl">
                    <LargestParagraph className="text-transparent bg-gradient-to-r from-[#b6db34] via-[#879fe9] to-[#f1ed8c] bg-clip-text">
                      Undulater er sjarmerende og livlige fugler som gjør
                      fantastiske kjæledyr. Med sine fargerike fjærdrakt og
                      livlige personligheter er de en fryd å ha i hjemmet.
                    </LargestParagraph>
                  </div>
                  <div className="grid justify-center">
                    <Image
                      src="/birds/budgerigar.png"
                      alt="Undulat"
                      width={300}
                      height={200}
                    />
                  </div>
                  <Paragraph className="text-black">
                    Undulater er kjent for sitt sosiale vesen og evne til å
                    danne sterke bånd med sine eiere. De er glade i interaksjon
                    og trives med å delta i familiens aktiviteter. Med riktig
                    trening og tålmodighet kan undulater lære å bli tamme og til
                    og med imitere lyder og ord. Deres lekne og nysgjerrige
                    natur gjør dem til morsomme følgesvenner. Disse intelligente
                    fuglene krever stimulering og mental utfordring. De bør ha
                    tilgang til et romslig bur eller voliere som gir nok plass
                    til å fly og strekke vingene. I tillegg bør de få muligheten
                    til å utforske omgivelsene utenfor buret i trygge
                    omgivelser. Leker, grener og annet passende tilbehør kan
                    hjelpe til med å berike miljøet deres.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Når det gjelder ernæring, trenger undulater en balansert
                    diett som inkluderer et godt kvalitetsfôr, friskt vann og et
                    utvalg av frukt, grønnsaker og frø. Det er viktig å være
                    oppmerksom på deres ernæringsbehov og unngå å gi dem mat som
                    kan være skadelig for dem.
                  </Paragraph>
                  <Paragraph className="text-black">
                    For å sikre undulatens helse og trivsel, er det viktig å gi
                    dem regelmessig veterinærkontroll, inkludert klipping av
                    nebb og klør ved behov. Du bør også overvåke deres generelle
                    velvære og være oppmerksom på tegn på sykdom eller stress.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Enten du allerede har en undulat eller vurderer å skaffe deg
                    en, ønsker vi å være en pålitelig kilde til informasjon og
                    veiledning for deg. Vår visjon er å hjelpe deg med å skape
                    et kjærlig og omsorgsfullt forhold til din undulat, slik at
                    både du og fuglen kan glede dere over mange år med lykke og
                    selskap. Bli med oss på denne spennende reisen og oppdag
                    gledene ved å ha en undulat som kjæledyr!
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
