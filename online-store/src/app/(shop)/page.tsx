import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <h1>Hola mundo</h1>
        <h1 className={titleFont.className}>Hola mundo</h1>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
