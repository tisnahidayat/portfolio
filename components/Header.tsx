import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:pt-12 xl:pb-12 text-white w-full px-3">
      <div className="flex items-center justify-between mx-auto">
        {/* logo */}
        <div className="flex items-center ml-4">
          <Image
            src="/img/logo.png"
            width={80}
            height={80}
            alt="logo"
            className="hidden xl:block"
          />
          <p className="text-2xl font-bold">
            Tisna Hidayat<span className="text-accent">.</span>
          </p>
        </div>

        {/* dekstop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8 mr-8">
          <Nav />
          <Link href={"/contact"}>
            <Button className="cursor-pointer">Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
