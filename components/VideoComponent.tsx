"use client";

import TimeAgo from "react-timeago";

import { Item } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  video: Item;
};

function VideoComponent({ video }: Props) {
  const videoId = video?.id?.videoId;
  const router = useRouter();
  return (
    <div className="p-10 mx-auto ">
      <Image
        src={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        width={400}
        height={150}
        onClick={() => router.push(`/video/${videoId}`)}
        className="cursor-pointer"
      />
      <div className="">
        <div className="flex items-center space-x-2 px-2">
          <img
            src={
              "https://images.unsplash.com/photo-1682821890455-044ea43d8b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            }
            alt=""
            className="h-10 w-10 rounded-full object-contain"
          />
          <p className="line-clamp-2 font-medium text-gray-300">
            {video?.snippet?.title}
          </p>
        </div>

        <p
          className="mx-9 font-medium text-gray-500 cursor-pointer hover:underline"
          onClick={() => router.push(`/channel/${video?.snippet?.channelId}`)}
        >
          {video?.snippet?.channelTitle}
        </p>
        {/* @ts-ignore */}
        <TimeAgo
          className="text-sm text-gray-500 mx-9"
          date={video?.snippet?.publishedAt}
        />
      </div>
    </div>
  );
}

export default VideoComponent;
