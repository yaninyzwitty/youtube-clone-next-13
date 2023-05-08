"use client";

import { usePathname } from "next/navigation";
import { categories } from "@/constants";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <section className="flex items-center space-x-2 px-2 sticky top-0 z-50">
      <ChevronLeftIcon className="h-9 cursor-pointer" />
      <nav className="flex items-center space-x-2 p-6  mt-1  rounded-sm overflow-x-scroll  scrollbar-hide ">
        {categories.map((category) => (
          <NavLinks
            key={category}
            category={category}
            isActive={isActive(category)}
          />
        ))}
      </nav>
      <ChevronRightIcon className="h-9 cursor-pointer" />
    </section>
  );
}
