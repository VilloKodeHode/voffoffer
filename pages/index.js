import Image from 'next/image'
import { Inter } from 'next/font/google'
import PageLayout from "@/components/Utilities/Layout";
import {
  StandardH1,
  StandardH2,
  StandardP,
} from "@/components/Utilities/ResponsiveText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <PageLayout gap="gap-24">
        <section className="grid text-center mt-24 justify-center items-center min-h-[calc(100vh-112px)">
          <StandardH1>Tittel</StandardH1>
          <div className="max-w-6xl bg-">
            <div className="relative z-10">
              <StandardP className="py-8">
                Velkommen til vår omfattende informasjonside for hunder! Enten
                du er en stolt hundeeier, vurderer å skaffe deg en firbent venn,
                eller bare har en generell interesse for disse fantastiske
                skapningene, er du kommet til rett sted. Her finner du en verden
                av kunnskap og tips om alt som angår hunder, fra raser og adferd
                til helse og trening. Uansett om du er nybegynner eller en
                erfaren hundekjenner, håper vi at vår informasjon vil være
                nyttig og inspirerende for deg. Så la oss begynne på reisen med
                å utforske alt det fantastiske som gjør hunder til våre lojale
                og elskede følgesvenner.
              </StandardP>
            </div>
          </div>
        </section>
      </PageLayout>
    </main>
  );
}
