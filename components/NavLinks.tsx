"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  isActive: boolean;
  category: Category;
};

function NavLinks({ isActive, category }: Props) {
  return (
    <Link
      href={`/category/${category}`}
      className={`
      bg-zinc-900 py-4 px-3 whitespace-nowrap rounded-sm
      
      ${isActive && "bg-[#1e293b]"}`}
    >
      {category}
    </Link>
  );
}

export default NavLinks;
