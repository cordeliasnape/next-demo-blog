type tessPic = { params: { pics: string } };

export function generateMetadata({ params }: tessPic) {
  const modTitle = params.pics[0].toUpperCase() + params.pics.slice(1);
  return {
    title: `Cord's Pet, Tess - ${modTitle}`,
    description: `Fun image of Tess being cute!`,
  };
}

export default function Page({ params }: tessPic) {
  return (
    <div className="min-h-[85vh]">
      <h2>
        In just a short while, you'll be able to view these beautful images.
      </h2>
    </div>
  );
}
