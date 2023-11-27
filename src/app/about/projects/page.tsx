import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Project Gallery - Cordelia Snape",
  description: "View this amazing portfolio of my work in a few working days!",
};

type projectSearchQuery = {
  sortBy: string;
};

type galleryType = {
  title: string;
  image?: string;
  description: string;
  id: number;
};

let pics: galleryType[] = [
  {
    title: "Virtual Pet Project",
    image: "https://placehold.co/600x400",
    description: "Here I will reflect on my achievements in this projects.",
    id: 1,
  },
  {
    title: "Dealio",
    image: "https://placehold.co/600x400",
    description: "Here I will reflect on my achievements in this projects.",
    id: 3,
  },
  {
    title: "Rock Paper Scissors Game",
    image: "https://placehold.co/600x400",
    description: "Here I will reflect on my achievements in this projects.",
    id: 2,
  },
  {
    title: "Cookie Stand",
    image: "https://placehold.co/600x400",
    description: "Here I will reflect on my achievements in this projects.",
    id: 0,
  },
  {
    title: "Extra Project",
    description: "Here I will reflect on my achievements in this projects.",
    id: 0,
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
  searchParams: projectSearchQuery;
}) {
  let sortedGallery = [...pics];

  if (searchParams.sortBy == "asc") {
    sortedGallery.sort(compareGalleryOrder);
  } else if (searchParams.sortBy == "desc") {
    sortedGallery.sort(compareGalleryOrder).reverse();
  }

  return (
    <div className="flex text-center flex-col justify-center items-center h-full leading-relaxed">
      {sortedGallery.map((pic) => {
        return (
          <article
            className="flex flex-col m-3 p-2 w-[60vw] border-solid border-4 border-white bg-slate-700 text-white"
            key={pic.id}
          >
            <Link href={`/about/projects/${pic.title.toLowerCase()}`}>
              <h3 className="m-2 text-2xl">{pic.title}</h3>
              <img className="max-w-[30vw] m-auto" src={pic.image}></img>
              <p className="m-2">{pic.description}</p>
            </Link>
          </article>
        );
      })}

      <div className="bg-white p-4 max-w-fit m-4">
        <Link href="/about/projects">Clear sort</Link>
        <br />
        <Link href="/about/projects?sortBy=asc">Ascending</Link>
        <br />
        <Link href="/about/projects?sortBy=desc">Descending</Link>
        <br />
      </div>
    </div>
  );
}
