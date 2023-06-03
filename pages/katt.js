import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  StandardH1,
  StandardH2,
  StandardP,
} from "@/components/Utilities/ResponsiveText";
import Head from "next/head";
import Link from "next/link";

export default function Katteside() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Katt</title>
        <meta name="description" content="Informasjonsside om katt" />
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
            <div className="grid gap-8">
              <ResponsiveH1>Bli kjent med din katt</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <StandardP className="text-white">
                    Velkommen til vår informasjonside dedikert til katter! Enten
                    du er en stolt katteeier, tenker på å adoptere en ny
                    pelsball eller bare har en generell interesse for katter,
                    har du kommet til rett sted. Vår side er utviklet for å gi
                    deg grundig og pålitelig informasjon om alle aspekter ved å
                    ha en katt som en del av familien din.
                  </StandardP>
                  <StandardP className="text-white">
                    Vi forstår at katter er mer enn bare kjæledyr - de er
                    hengivne følgesvenner og elskede familiemedlemmer. Derfor er
                    det viktig å gi dem omsorg og oppmerksomhet for å sikre at
                    de trives og har det bra. På vår informasjonside finner du
                    en bred variasjon av emner som omhandler katter, inkludert
                    raser, helse, ernæring, oppførsel, og mye mer. Leter du
                    etter råd om hvilken katterase som passer best til ditt hjem
                    og livsstil? Vi tilbyr grundige beskrivelser av ulike
                    katteraser, deres temperament, egenskaper og egnethet for
                    forskjellige familier og miljøer. Dette hjelper deg med å ta
                    en informert beslutning når du velger den perfekte katten
                    for deg.
                  </StandardP>
                  <StandardP className="text-white">
                    Vi er også opptatt av å sikre at katten din har et sunt og
                    balansert kosthold. Vår side gir deg informasjon om riktig
                    ernæring, vanlige helseproblemer, og forebyggende tiltak for
                    å holde katten din frisk og i god form. I tillegg til fysisk
                    helse, er mental stimulering og lek viktig for katter. Vi
                    deler verdifulle tips og råd om hvordan du kan engasjere og
                    underholde katten din, samt håndtere vanlige
                    adferdsutfordringer.
                  </StandardP>
                  <StandardP className="text-white">
                    Uansett om du er en erfaren katteeier eller nybegynner,
                    håper vi at vår informasjonside vil være en verdifull
                    ressurs for deg. Vårt mål er å gi deg den kunnskapen du
                    trenger for å gi din pelskledde venn et lykkelig, sunt og
                    oppfylt liv. Så bli med oss på denne spennende reisen, og la
                    oss utforske den fantastiske verden av katter sammen!
                  </StandardP>
                </div>
              </div>
            </div>
          </section>
          <section className="grid gap-8 mb-12 ">
            <ResponsiveH2 className="text-center">
              Populære katteraser
            </ResponsiveH2>
            <div className="flex flex-wrap gap-8 md:flex-nowrap">
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/katt/norsk_skogskatt">
                  <Image
                    src="/cats/norwegian_forestcat.png"
                    alt="norsk skogskatt"
                    width={300}
                    height={200}
                    className="mb-4 md:mb-0"
                  />
                  <StandardP className="text-center">Norsk skogskatt</StandardP>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/katt/huskatt">
                  <Image
                    src="/cats/house_cat.png"
                    alt="Huskatt"
                    width={300}
                    height={200}
                    className="mb-4 md:mb-0"
                  />
                  <StandardP className="text-center">Huskatt</StandardP>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/katt/hellig_birma">
                  <Image
                    src="/cats/holy_birma.png"
                    alt="Hellig Birma"
                    width={300}
                    height={200}
                  />
                  <StandardP className="text-center">Hellig Birma</StandardP>
                </Link>
              </div>
            </div>
          </section>
        </PageLayout>
      </main>
    </>
  );
}
