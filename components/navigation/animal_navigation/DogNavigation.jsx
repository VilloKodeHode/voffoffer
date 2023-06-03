import Link from "next/link";
import { ResponsiveP } from "../../Utilities/ResponsiveText";
import NormalButton from "../../base components/Buttons";

export const DogNavigation = () => {
  return (
    <section className="grid gap-8 mb-12 text-center">
      <ResponsiveP>Naviger tilbake til:</ResponsiveP>
      <div className="grid grid-flow-col gap-8">
        <Link href="/hund">
          <NormalButton>Hunder</NormalButton>
        </Link>
        <Link href="/">
          <NormalButton>Forside</NormalButton>
        </Link>
      </div>
    </section>
  );
};
