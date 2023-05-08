import Video from "@/components/Video";
import { Root } from "@/relatedVideos";
import { RootObject } from "@/videoPage";

type Props = {
  params: {
    videoId: string;
  };
};
export const revalidate = 120;

async function fetchData(videoId: string) {
  const res = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`,
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

async function VideoPage({ params: { videoId } }: Props) {
  const videoDetails: RootObject = await getData(videoId);
  const relatedVideos: Root = await fetchData(videoId);

  return (
    <div className="">
      {videoDetails?.items?.map((video, idx) => (
        <Video
          key={idx}
          video={video}
          videoId={videoId}
          relatedVideos={relatedVideos}
        />
      ))}
    </div>
  );
}

export default VideoPage;

async function getData(videoId: string) {
  const res = await fetch(
    `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
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
