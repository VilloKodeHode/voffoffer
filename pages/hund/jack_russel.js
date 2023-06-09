import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import TitleHeader, {
  SectionTitleHeader,
  Paragraph,
  LargestParagraph,
} from "@/components/Utilities/ResponsiveText";
import Head from "next/head";
import { DogNavigation } from "@/components/navigation/animal_navigation/DogNavigation";

export default function JackRusselTerrier() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Jack Russel Terrier</title>
        <meta
          name="description"
          content="Informasjonsside om Jack Russel Terrier"
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
                Bli kjent med din Jack Russel Terrier
              </TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <div className="p-2 mx-auto bg-slate-900 w-fit rounded-xl">
                    <LargestParagraph className="text-transparent bg-gradient-to-r from-[#edf7fb] via-[#d6b8a5] to-[#edf6fa] bg-clip-text">
                      Jack Russell terrieren er en energisk og livlig hunderase
                      som har fanget hjertene til mange hundeeiere over hele
                      verden.
                    </LargestParagraph>
                  </div>
                  <div className="grid justify-center">
                    <Image
                      src="/dogs/jack_russel_puppy.png"
                      alt="jack russel terrier puppy"
                      width={300}
                      height={200}
                    />
                  </div>
                  <Paragraph className="text-black">
                    Jack Russell terrieren er kjent for sin intelligens,
                    utholdenhet og eventyrlyst. Den er en modig og aktiv hund
                    som elsker å være i bevegelse og delta i forskjellige
                    aktiviteter. Denne rasen er også svært intelligent og
                    lærevillig, noe som gjør dem godt egnet for ulike typer
                    trening.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Jack Russell terriere er kjent for sin allsidighet og er
                    flinke i forskjellige hundesporter som lydighet, agility og
                    sporarbeid.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Enten du allerede er en stolt eier av en Jack Russell
                    terrier eller vurderer å skaffe deg en, ønsker vi å være en
                    pålitelig kilde til informasjon for deg. Vår side er
                    dedikert til å hjelpe deg med å forstå og ta vare på denne
                    energiske rasen, slik at både du og din Jack Russell terrier
                    kan nyte et aktivt og givende liv sammen.
                  </Paragraph>
                </div>
              </div>
            </div>
          </section>
          <DogNavigation />
        </PageLayout>
      </main>
    </>
  );
}
