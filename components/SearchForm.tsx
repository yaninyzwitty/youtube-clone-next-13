"use client";

import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchForm() {
  const [searchedInput, setSearchedInput] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = searchedInput;
    router.push(`/search?term=${input}`);
  };
  return (
    <div className="hidden sm:flex space-x-2 md:flex-grow md:space-x-6">
      <form
        className="flex items-center space-x-2 px-4 py-3 border border-gray-700 rounded-xl md:w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchedInput}
          onChange={(e) => setSearchedInput(e.target.value)}
          className="focus:outline-none bg-transparent border-r w-full"
        />

        <button type="submit">
          <MagnifyingGlassIcon className="h-5 w-5 " />
        </button>
      </form>
      <span className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full m-auto">
        <MicrophoneIcon className="h-6 w-6 " />
      </span>
    </div>
  );
}

export default SearchForm;
