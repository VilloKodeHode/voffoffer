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

export default function Papegøye() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Papegøye</title>
        <meta name="description" content="Informasjonsside om Papegøye" />
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
              <ResponsiveH1>Bli kjent med din Papegøye</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <StandardH4 className="text-black">
                    Papegøyer er en fantastisk type kjæledyr som kan bringe
                    glede og liv til ethvert hjem.
                  </StandardH4>
                  <div className="grid justify-center">
                    <Image
                      src="/birds/parrot.png"
                      alt="Papegøye"
                      width={300}
                      height={200}
                    />
                  </div>
                  <StandardP className="text-black">
                    Disse intelligente og sosiale fuglene er kjent for sin evne
                    til å etterligne menneskelig tale og deres fargerike
                    fjærdrakt. Disse fuglene er blant de mest intelligente i
                    fugleverdenen og har en imponerende evne til å lære og
                    tilpasse seg. Med riktig trening og stimulering kan
                    papegøyer lære å snakke og etterligne lyder på en
                    forbløffende måte. Det er viktig å gi dem mentale
                    utfordringer og interaksjon for å holde dem lykkelige og
                    engasjerte.
                  </StandardP>
                  <StandardP className="text-black">
                    Sosial interaksjon er også avgjørende for papegøyer. De er
                    sosiale skapninger som trives i selskap med mennesker og
                    andre fugler. Papegøyer kan utvikle sterke bånd med sine
                    eiere og krever daglig samhandling og oppmerksomhet. De
                    trives best når de blir inkludert i familiens aktiviteter og
                    får muligheten til å utforske utenfor buret sitt.
                  </StandardP>
                  <StandardP className="text-black">
                    En annen viktig faktor å vurdere når man har en papegøye som
                    kjæledyr, er deres fysiske behov. Papegøyer trenger et
                    romslig bur som gir nok plass til å strekke vingene og fly.
                    De bør også få regelmessig tid utenfor buret for å få mosjon
                    og utforske miljøet rundt seg. I tillegg er en balansert og
                    næringsrik diett avgjørende for deres helse og trivsel. Det
                    er viktig å merke seg at papegøyer kan være et langsiktig
                    forpliktelse som krever tid, tålmodighet og oppmerksomhet.
                    De kan leve i mange tiår, så det er viktig å være klar over
                    den lange levetiden deres før du tar et valg om å skaffe en
                    papegøye som kjæledyr.
                  </StandardP>
                  <StandardP className="text-black">
                    Enten du allerede har en papegøye eller vurderer å skaffe
                    deg en, ønsker vi å være en pålitelig kilde til informasjon
                    og veiledning for deg. Vår visjon er å bidra til at du og
                    din papegøye kan bygge et sterkt bånd og oppleve glede og
                    lykke sammen. Bli med oss på denne spennende reisen og
                    oppdag alt det fantastiske ved å ha en papegøye som
                    kjæledyr!
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
