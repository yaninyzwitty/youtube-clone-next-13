import { Root } from "@/channelTypes";
import { RootObject } from "@/channelVidsTypes";
import VideoHomepage from "@/components/VideoHomepage";
import { url } from "inspector";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 120;

async function getChannelVideos(id: string) {
  const res = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7558e83404msh2a9bd6f5cc293e2p151258jsn18abcf066b2d",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    }
  );
  return res.json();
}

async function Channelpage({ params: { id } }: Props) {
  const channeData: Root = await getData(id);
  const channelVideos: RootObject = await getChannelVideos(id);

  const [channelInfo, channelVideoss]: any = await Promise.all([
    channeData,
    channelVideos,
  ]);

  function convertViews(views: number) {
    if (views < 0) {
      return "No views";
    } else if (views >= 1000000000) {
      return (views / 1000000000).toFixed(1) + "b ";
    } else if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "m ";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(0) + "k ";
    } else {
      return views + " ";
    }
  }

  const bannerUrl = channeData?.items?.map(
    (item) => item?.snippet?.thumbnails?.high.url
  );

  const name = channeData?.items?.map((channel) => channel?.snippet?.title);
  const subscriberCount = channeData?.items?.map(
    (channel) => channel?.statistics?.subscriberCount
  );
  const numberOfVids = channeData?.items?.map(
    (channel) => channel?.statistics?.videoCount
  );

  const desc = channeData?.items?.map(
    (channel) => channel?.snippet?.description
  );
  return (
    <main className="">
      <nav className="h-52 w-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60')] object-contain">
        <div className="py-16">
          <img
            src={bannerUrl[0]}
            className="h-32 w-32 object-cover  rounded-full m-auto"
            alt=""
          />
        </div>
      </nav>
      <div className="px-24 py-10 flex items-center space-x-5">
        <img
          src={bannerUrl[0]}
          className="h-32 w-32 object-cover  rounded-full  "
          alt=""
        />
        <div className="flex flex-col space-y-2">
          <h2 className="font-medium text-lg lg:text-3xl">{name[0]}</h2>
          <span className="flex space-x-2 items-center">
            <h2 className="text-sm text-gray-400">
              @{name[0].replace(" ", "")}
            </h2>{" "}
            <h2 className="text-sm text-gray-400">
              {convertViews(Number(subscriberCount))} subscribers
            </h2>
            {"  "}
            <h2 className="text-gray-400 text-sm">{numberOfVids} videos</h2>
          </span>
          <p className="text-sm text-gray-300">{desc}</p>
        </div>
      </div>

      <hr className="w-full border-t border-gray-400" />

      <VideoHomepage videos={channelVideoss} />
    </main>
  );
}

export default Channelpage;

async function getData(id: string) {
  const res = await fetch(
    `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${id}`,
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

// async function fetchData(id: string) {
//   const res = await fetch(
//     `https://youtube-v38.p.rapidapi.com/channel/videos/?id=UCYnz6_yHW-mKRdiOUboJQxA`,
//     {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "7558e83404msh2a9bd6f5cc293e2p151258jsn18abcf066b2d",
//         "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//       },
//     }
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
