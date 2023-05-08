"use client";
import { RootObject } from "@/channelVidsTypes";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import TimeAgo from "react-timeago";

type Props = {
  videos: RootObject;
};
function VideoHomepage({ videos }: Props) {
  const publshedTime = videos?.items?.map(
    (video) => video?.snippet?.publishTime
  );

  const allVideos = videos?.items?.map(
    (video) => video?.snippet?.thumbnails?.high?.url
  );

  const titles = videos?.items?.map((video) => video?.snippet?.title);

  const title = titles?.map((title) => title);
  const videoId = videos?.items?.map((videoId) => videoId?.id?.videoId);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
      {allVideos?.map((thumbnail, idx) => (
        <Link
          href={`/video/${videoId}`}
          className="p-10 mx-auto relative cursor-pointer"
        >
          <Image
            src={thumbnail}
            alt=""
            width={400}
            height={150}
            className="cursor-pointer"
          />
          <h2 className="text-sm text-gray-300 line-clamp-2">{title[idx]}</h2>
          <div className="flex items-center space-x-2">
            <p className="text-gray-500 text-sm">14k views</p>

            <p className="text-sm text-gray-500">
              {/* @ts-ignore */}

              <TimeAgo date={publshedTime} />
            </p>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default VideoHomepage;
