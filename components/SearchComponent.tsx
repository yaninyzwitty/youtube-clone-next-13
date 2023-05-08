"use client";

import { RootObject } from "@/searchTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TimeAgo from "react-timeago";

type Props = {
  searchResults: RootObject;
};

function SearchComponent({ searchResults }: Props) {
  const router = useRouter();
  const highestAuthor = searchResults?.items?.map(
    (item) => item?.snippet?.channelTitle
  );

  const videoIds = searchResults?.items?.map((item) => item?.id?.videoId);
  return (
    <div className="p-10">
      <p className="text-gray-500">
        Total search results: {searchResults?.pageInfo?.totalResults}
      </p>

      <h3 className="text-lg font-medium">Latest from : {highestAuthor[0]}</h3>
      {searchResults?.items?.map((res, idx) => (
        <div key={idx} className="p-1 lg:p-10">
          <div className="flex justify-between px-6 space-x-8 lg:space-x-2">
            <Image
              src={res?.snippet?.thumbnails?.high?.url}
              alt=""
              width={400}
              height={100}
              className="rounded object-cover cursor-pointer"
              onClick={() =>
                router.push(`video/${res?.id?.videoId || videoIds[idx]}`)
              }
            />
            <div className="py-4">
              <h2 className="text-sm lg:text-lg font-medium text-gray-300">
                {res?.snippet?.title}
              </h2>
              {/* @ts-ignore */}
              <TimeAgo
                date={res?.snippet?.publishedAt}
                className="text-sm text-gray-500"
              />
              <h3 className="text-gray-500 text-sm line-clamp-2">
                {res?.snippet?.description}
              </h3>
              {res?.snippet?.liveBroadcastContent !== "none" && (
                <h2 className="text-red-400 text-xl">Live</h2>
              )}
            </div>
          </div>
        </div>
      ))}

      <hr className="w-full text-gray-600" />
    </div>
  );
}

export default SearchComponent;
