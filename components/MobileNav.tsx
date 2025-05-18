"use client";

import { CiMenuFries } from "react-icons/ci";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { links } from "@/app/libs/links";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent hover:text-accent cursor-pointer mr-5" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="mt-28 mb-16 text-center text-2xl font-semibold">
          <Link href={"/"}>
            Tisna Hidayat<span className="text-accent">.</span>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                href={link.path}
                key={index}
                className={`transition-color capitalize font-medium hover:text-accent ${
                  isActive
                    ? "text-accent font-semibold border-b-2"
                    : "text-muted"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
