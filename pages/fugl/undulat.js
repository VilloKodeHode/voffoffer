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
import { BirdNavigation } from "@/components/navigation/animal_navigation/BirdNavigation";

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

        <link rel="icon" href="/logo/main_logo.png" />
      </Head>
      <main>
        <PageLayout gap="gap-24">
          <section className="grid pt-12 text-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <ResponsiveH1>Bli kjent med din Undulat</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <StandardH4 className="text-black">
                    Undulater er sjarmerende og livlige fugler som gjør
                    fantastiske kjæledyr. Med sine fargerike fjærdrakt og
                    livlige personligheter er de en fryd å ha i hjemmet.
                  </StandardH4>
                  <div className="grid justify-center">
                    <Image
                      src="/birds/budgerigar.png"
                      alt="Undulat"
                      width={300}
                      height={200}
                    />
                  </div>
                  <StandardP className="text-black">
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
                  </StandardP>
                  <StandardP className="text-black">
                    Når det gjelder ernæring, trenger undulater en balansert
                    diett som inkluderer et godt kvalitetsfôr, friskt vann og et
                    utvalg av frukt, grønnsaker og frø. Det er viktig å være
                    oppmerksom på deres ernæringsbehov og unngå å gi dem mat som
                    kan være skadelig for dem.
                  </StandardP>
                  <StandardP className="text-black">
                    For å sikre undulatens helse og trivsel, er det viktig å gi
                    dem regelmessig veterinærkontroll, inkludert klipping av
                    nebb og klør ved behov. Du bør også overvåke deres generelle
                    velvære og være oppmerksom på tegn på sykdom eller stress.
                  </StandardP>
                  <StandardP className="text-black">
                    Enten du allerede har en undulat eller vurderer å skaffe deg
                    en, ønsker vi å være en pålitelig kilde til informasjon og
                    veiledning for deg. Vår visjon er å hjelpe deg med å skape
                    et kjærlig og omsorgsfullt forhold til din undulat, slik at
                    både du og fuglen kan glede dere over mange år med lykke og
                    selskap. Bli med oss på denne spennende reisen og oppdag
                    gledene ved å ha en undulat som kjæledyr!
                  </StandardP>
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
