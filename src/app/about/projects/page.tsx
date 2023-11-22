import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gallery of Tess",
  description: "View this cute gallery of Tess in 3 to 5 working days",
};

type tessSearchQuery = {
  sortBy: string;
};

type galleryType = {
  title: string;
  image: string;
  // description: string;
  id: number;
};

let pics: galleryType[] = [
  {
    title: "Shake",
    image: "https://i.imgur.com/oJhvHnj.jpg",
    // description: "most photogenic dog",
    id: 0,
  },
  {
    title: "Cute",
    image: "https://i.imgur.com/7aZkrxM.jpg",
    // description: "most photogenic dog",
    id: 1,
  },
  {
    title: "Babushka",
    image: "https://i.imgur.com/jNTn6Px.jpg",
    // description: "most photogenic dog",
    id: 2,
  },
  {
    title: "Goofy",
    image: "https://i.imgur.com/HbTDcG1.jpg",
    // description: "most photogenic dog",
    id: 3,
  },
];

function compareGalleryOrder(a: galleryType, b: galleryType) {
  if (a.title < b.title) {
    return -1;
  } else if (a.title > b.title) {
    return 1;
  } else {
    return 0;
  }
}

export default function AboutRoute({
  searchParams,
}: {
  searchParams: tessSearchQuery;
}) {
  let sortedGallery = [...pics];

  if (searchParams.sortBy == "asc") {
    sortedGallery.sort(compareGalleryOrder);
  } else if (searchParams.sortBy == "desc") {
    sortedGallery.sort(compareGalleryOrder).reverse();
  }

  return (
    <div className="flex-col justify-center text-center">
      <div className="bg-black text-white max-w-fit">
        <h3>Click to view these beautiful images of Tess:</h3>
        <Link href="/about/tess">Clear sort</Link>
        <br />
        <Link href="/about/tess?sortBy=asc">Ascending</Link>
        <br />
        <Link href="/about/tess?sortBy=desc">Descending</Link>
        <br />
      </div>

      {sortedGallery.map((pic) => {
        return (
          <article className="flex-col justify-center" key={pic.id}>
            <Link href={`/about/tess/${pic.title.toLowerCase()}`}>
              <img className="max-w-[10vw]" src={pic.image}></img>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
