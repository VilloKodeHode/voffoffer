import Image from "next/image";
import PageLayout from "@/components/Utilities/Layout";

import Head from "next/head";
import Link from "next/link";
import TitleHeader, {
  Paragraph,
  SubTitleHeader,
} from "@/components/Utilities/ResponsiveText";

export default function Fugleside() {
  return (
    <>
      <Head>
        <title>Kjælevenner - Fugl</title>
        <meta name="description" content="Informasjonsside om fugl" />
        <meta
          name="keywords"
          content="kjæledyr, hund, katt, pippip, pusekatt, voffoffer, kjælevenner, fugler, husdyr"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <PageLayout gap="gap-24">
          <section className="grid pt-12 text-center">
            <div className="grid gap-8">
              <TitleHeader heading="h1">Bli kjent med din fugl</TitleHeader>
              <div className="max-w-6xl bg-KV-tertiary">
                <div className="relative z-10 grid gap-8 p-6">
                  <Paragraph className="text-black">
                    Velkommen til vår informasjonside dedikert til fugler som
                    kjæledyr! Enten du allerede er en stolt fugleeier, vurderer
                    å adoptere en fjærkledd venn eller bare har en generell
                    interesse for fugler, er du på rett sted. Vår side er
                    designet for å gi deg omfattende og pålitelig informasjon om
                    alt som angår å ha fugler som kjæledyr i hjemmet ditt.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Fugler som kjæledyr er unike og fascinerende skapninger. De
                    har sin egen personlighet, sjarm og intelligens. På vår
                    informasjonside vil du finne en rekke emner som omhandler
                    fugler, inkludert raser, stell, oppførsel, ernæring og mye
                    mer.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Vår informasjonside gir deg råd om riktig kosthold og
                    ernæring, burinnredning, trening og sosialisering. Vi deler
                    også tips om hvordan du kan bygge et sterkt bånd med din
                    fjærkledde følgesvenn og gi den et trygt og stimulerende
                    miljø. Fugler er ikke bare vakre å se på, de har også sin
                    egen unike kommunikasjonsstil og adferdsmønstre. Vi hjelper
                    deg med å forstå fuglens språk og behov, samt hvordan du kan
                    takle vanlige adferdsutfordringer.
                  </Paragraph>
                  <Paragraph className="text-black">
                    Uansett om du er en erfaren fugleeier eller nybegynner,
                    håper vi at vår informasjonside vil være en verdifull
                    ressurs for deg. Vår visjon er å gi deg den kunnskapen du
                    trenger for å gi din fjærkledde venn et lykkelig, sunt og
                    stimulerende liv. Så bli med oss på denne spennende reisen,
                    og la oss utforske den fantastiske verden av fugler sammen!
                  </Paragraph>
                </div>
              </div>
            </div>
          </section>
          <section className="grid gap-8 mb-12 ">
            <SubTitleHeader heading="h2" className="text-center">
              Populære fugler
            </SubTitleHeader>
            <div className="flex flex-wrap gap-8 md:flex-nowrap">
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/fugl/kanarifugl">
                  <Image
                    src="/birds/canary.png"
                    alt="kanarifugl"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <Paragraph className="text-center">Kanarifugl</Paragraph>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/fugl/papegoye">
                  <Image
                    src="/birds/parrot.png"
                    alt="pappegøye"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <Paragraph className="text-center">Papegøye</Paragraph>
                </Link>
              </div>
              <div className="grid justify-center w-full md:w-1/3">
                <Link href="/fugl/undulat">
                  <Image
                    src="/birds/budgerigar.png"
                    alt="undulat"
                    width={300}
                    height={200}
                    className="mb-4 duration-200 md:mb-0 hover:scale-105"
                  />
                  <Paragraph className="text-center">Undulat</Paragraph>
                </Link>
              </div>
            </div>
          </section>
        </PageLayout>
      </main>
    </>
  );
}
