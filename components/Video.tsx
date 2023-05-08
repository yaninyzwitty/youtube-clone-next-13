"use client";

import { Item } from "@/videoPage";
import ReactPlayer from "react-player";
import RelatedVideos from "./RelatedVideos";
import { Root } from "@/relatedVideos";
import {
  EllipsisHorizontalIcon,
  HandRaisedIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

type Props = {
  video: Item;
  videoId: string;
  relatedVideos: Root;
};
function Video({ video, videoId, relatedVideos }: Props) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 flex  flex-col lg:flex-row space-x-10 px-6">
        <div className="flex flex-col space-y-4">
          {/* @ts-ignore */}
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
          />
          <h2 className="text-lg text-gray-300">{video?.snippet?.title}</h2>

          <div className="flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <p className="text-gray-500 text-lg">
                {/* {video?.snippet?.channelTitle} */}
                <HandThumbUpIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
              </p>

              <HandThumbDownIcon className="h-6 w-6 text-gray-400 cursor-pointer" />

              <button className="px-5 py-3 bg-zinc-800 rounded-lg ">
                Subscribe
              </button>
            </div>
            <div className="rounded-full h-10 w-10 bg-zinc-900 px-2 py-2 ">
              <ShareIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
            </div>
            <EllipsisHorizontalIcon className="h-7 w-7" />
          </div>

          <h1 className="text-lg">Related videos</h1>

          <div className="hidden lg:flex lg:flex-col">
            <RelatedVideos relatedVideos={relatedVideos} />
          </div>
        </div>
        <RelatedVideos relatedVideos={relatedVideos} />
      </div>
    </div>
  );
}

export default Video;
