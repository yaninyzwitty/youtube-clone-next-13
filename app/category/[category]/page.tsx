import VideoListComponent from "@/components/VideoListComponent";
import { Root } from "@/types";

type Props = {
  params: {
    category: Category;
  };
};

export const revalidate = 120;

async function CategoryPage({ params: { category } }: Props) {
  const videos: Root = await getData(category);

  return (
    <main>
      <VideoListComponent videos={videos} />
    </main>
  );
}

export default CategoryPage;

async function getData(category: Category) {
  const res = await fetch(
    `https://youtube-v31.p.rapidapi.com/search?q=${category}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
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
