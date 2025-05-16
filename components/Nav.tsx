"use client";

import { links } from "@/app/libs/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-8">
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <Link
            href={link.path}
            key={index}
            className={`transition-color capitalize font-medium hover:text-accent ${
              isActive ? "text-accent font-semibold border-b-2" : "text-muted"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
