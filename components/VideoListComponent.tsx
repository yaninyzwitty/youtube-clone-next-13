import { Root } from "@/types";
import VideoComponent from "./VideoComponent";

type Props = {
  videos: Root;
};

function VideoListComponent({ videos }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {videos?.items?.map((video, idx) => (
        <VideoComponent key={idx} video={video} />
      ))}
    </main>
  );
}

export default VideoListComponent;
