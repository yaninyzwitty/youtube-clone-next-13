import SearchComponent from "@/components/SearchComponent";
import { RootObject } from "@/searchTypes";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

type Props = {
  searchParams: {
    term: string;
  };
};

export const revalidate = 120;

async function Searchpage({ searchParams: { term } }: Props) {
  const results: RootObject = await fetchData(term);
  return (
    <main className="p-12">
      <div className="flex items-center space-x-2">
        <AdjustmentsHorizontalIcon className="h-8 text-white cursor-pointer" />

        <h3 className="my-2 text-sm">Filters</h3>
      </div>
      <hr className="border border-b-[0.1px] text-gray-600" />
      <SearchComponent searchResults={results} />
    </main>
  );
}

export default Searchpage;

async function fetchData(term: string) {
  const res = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?q=${term}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7558e83404msh2a9bd6f5cc293e2p151258jsn18abcf066b2d",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
