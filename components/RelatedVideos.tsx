import { Root } from "@/relatedVideos";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Timeago from "react-timeago";

type Props = {
  relatedVideos: Root;
};

function RelatedVideos({ relatedVideos }: Props) {
  const router = useRouter();
  return (
    <div className="">
      {relatedVideos?.items?.map((video, idx) => (
        <div key={idx} className="flex  items-center space-x-10">
          <div className="rounded-lg">
            <Image
              src={video?.snippet?.thumbnails?.high?.url}
              alt=""
              width={200}
              height={100}
              className="shadow-lg rounded-lg cursor-pointer"
              onClick={() => router.push(`/video/${video?.id?.videoId}`)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h2 className="text-gray-400 text-sm">{video?.snippet?.title}</h2>

            <h3 className="text-sm text-gray-400">
              {video?.snippet?.channelTitle}
            </h3>
            <div className="flex items-center space-x-2">
              <h2 className="text-gray-500 text-xs">14k views.</h2>
              {/* @ts-ignore */}
              <Timeago
                date={video?.snippet?.publishedAt}
                className="text-gray-500 text-xs"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatedVideos;
