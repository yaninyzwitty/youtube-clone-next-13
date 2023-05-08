"use client";

import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <main className="sticky top-0 z-50 bg-black">
      <header className="flex items-center justify-between">
        <div className="flex items-center px-4 md:space-x-4">
          <Bars3Icon className="h-8 w-8 " />

          <Link href={`/`} className="cursor-pointer">
            <Image
              src="https://variety.com/wp-content/uploads/2020/06/youtube-logo.png"
              height={300}
              width={150}
              alt=""
            />
          </Link>
        </div>

        <SearchForm />

        <div className="flex items-center space-x-4 px-6 cursor-pointer md:space-x-6">
          <MagnifyingGlassIcon className="h-5 w-5 sm:hidden" />
          <span className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded m-auto sm:hidden">
            <MicrophoneIcon className="h-6 w-6 " />
          </span>
          <VideoCameraIcon className="h-6 w-6 " />
          <BellIcon className="h-6 w-6" />

          <Image
            src="https://images.unsplash.com/photo-1682821890455-044ea43d8b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=60"
            width={100}
            height={100}
            className="h-10 w-10 object-cover rounded-full"
            alt=""
          />
        </div>
      </header>
      <Navbar />
    </main>
  );
}

export default Header;
