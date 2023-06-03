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

export default function Hundeside() {
  return (
    <>
      <Head>
        <title>Kjælevenner - hund</title>
        <meta name="description" content="Informasjonsside om hund" />
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
              <ResponsiveH1>Bli kjent med din hund</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <StandardP className="text-black">
                    Velkommen til vår informasjonside dedikert til hunder! Enten
                    du er en stolt hundeeier, vurderer å skaffe deg en ny
                    følgesvenn, eller bare har en generell interesse for hunder,
                    er du på rett sted. Vår side er designet for å gi deg
                    omfattende og pålitelig informasjon om alle aspekter ved å
                    ha en hund i livet ditt.
                  </StandardP>
                  <StandardP className="text-black">
                    Vi forstår at hunder er mer enn bare kjæledyr - de er
                    familiemedlemmer og lojale venner. Derfor er det viktig å gi
                    dem den omsorgen og oppmerksomheten de fortjener. På vår
                    informasjonside finner du et bredt spekter av temaer,
                    inkludert hunderaser, helse, ernæring, trening, adferd, og
                    mye mer. Leter du etter råd om hvilken hunderase som passer
                    best til din livsstil? Vi tilbyr detaljerte beskrivelser av
                    ulike raser, deres egenskaper, temperament og egnethet for
                    forskjellige familier og aktivitetsnivåer. Dette hjelper deg
                    med å ta en informert beslutning når du velger den perfekte
                    hunden for deg.
                  </StandardP>
                  <StandardP className="text-black">
                    Å holde hunden din sunn og lykkelig er også av stor
                    betydning. Vår side gir deg informasjon om riktig kosthold
                    og ernæring, vanlige helseproblemer og forebyggende tiltak,
                    samt tips for daglig stell og hygiene. I tillegg til fysisk
                    helse, er trening og mental stimulering viktig for hunder.
                    Vi deler verdifulle råd og veiledning om hvordan du kan
                    trene hunden din, håndtere uønsket adferd og skape et sterkt
                    bånd basert på tillit og forståelse.
                  </StandardP>
                  <StandardP className="text-black">
                    Uansett om du er en erfaren hundeeier eller nybegynner,
                    håper vi at vår informasjonside vil være en verdifull
                    ressurs for deg. Vår visjon er å gi deg den kunnskapen du
                    trenger for å gi din firbente venn et lykkelig, sunt og
                    oppfylt liv. Så bli med oss på denne spennende reisen, og la
                    oss utforske den fantastiske verden av hunder sammen!
                  </StandardP>
                </div>
              </div>
            </div>
          </section>
          <section className="grid gap-8 mb-12 ">
            <ResponsiveH2 className="text-center">
              Populære hunderaser
            </ResponsiveH2>
            <div className="flex flex-wrap gap-8 md:flex-nowrap">
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/hund/golden_retriever">
                  <Image
                    src="/dogs/golden_retriever_puppy.png"
                    alt="golden retriever puppy"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <StandardP className="text-center">
                    Golden Retriever
                  </StandardP>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/hund/jack_russel">
                  <Image
                    src="/dogs/jack_russel_puppy.png"
                    alt="jack russel puppy"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <StandardP className="text-center">
                    Jack Russel Terrier
                  </StandardP>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/hund/berner_sennen">
                  <Image
                    src="/dogs/berner_sennen_puppy.png"
                    alt="berner sennen puppy"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <StandardP className="text-center">Berner Sennen</StandardP>
                </Link>
              </div>
            </div>
          </section>
        </PageLayout>
      </main>
    </>
  );
}
