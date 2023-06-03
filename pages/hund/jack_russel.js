import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";
import ResponsiveH1, {
  ResponsiveP,
  StandardH4,
  StandardP,
} from "@/components/Utilities/ResponsiveText";
import Head from "next/head";
import Link from "next/link";
import NormalButton from "@/components/base components/Buttons";
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

        <link rel="icon" href="/logo/main_logo.png" />
      </Head>
      <main>
        <PageLayout gap="gap-24">
          <section className="grid pt-12 text-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <ResponsiveH1>Bli kjent med din Jack Russel Terrier</ResponsiveH1>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <StandardH4 className="text-white">
                    Jack Russell terrieren er en energisk og livlig hunderase
                    som har fanget hjertene til mange hundeeiere over hele
                    verden.
                  </StandardH4>
                  <div className="grid justify-center">
                    <Image
                      src="/navigation/jack_russel_puppy.png"
                      alt="berner sennen puppy"
                      width={300}
                      height={200}
                    />
                  </div>
                  <StandardP className="text-white">
                    Jack Russell terrieren er kjent for sin intelligens,
                    utholdenhet og eventyrlyst. Den er en modig og aktiv hund
                    som elsker å være i bevegelse og delta i forskjellige
                    aktiviteter. Denne rasen er også svært intelligent og
                    lærevillig, noe som gjør dem godt egnet for ulike typer
                    trening.
                  </StandardP>
                  <StandardP className="text-white">
                    Jack Russell terriere er kjent for sin allsidighet og er
                    flinke i forskjellige hundesporter som lydighet, agility og
                    sporarbeid.
                  </StandardP>
                  <StandardP className="text-white">
                    Enten du allerede er en stolt eier av en Jack Russell
                    terrier eller vurderer å skaffe deg en, ønsker vi å være en
                    pålitelig kilde til informasjon for deg. Vår side er
                    dedikert til å hjelpe deg med å forstå og ta vare på denne
                    energiske rasen, slik at både du og din Jack Russell terrier
                    kan nyte et aktivt og givende liv sammen.
                  </StandardP>
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
