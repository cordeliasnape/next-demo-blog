import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-[110vh]">
        <div
          className="text-center flex flex-col justify-center m-auto text-5xl text-white
        "
        >
          <h2>Cordelia Snape</h2>
          <br />
          <p>Graduate Full-Stack Web Developer</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/me.jpeg"
          alt="Image of the Web Developer"
          width={300}
          height={300}
          className="h-[50vh] w-fit rounded-lg border-4 border-zinc-300 bg-zinc-100"
        />
        <div className="w-[40vw] h-[50vh] my-4 rounded-lg border-4 border-zinc-300 bg-zinc-100 p-6 m-3">
          <h2 className="text-2xl font-semibold font-mono">
            Hello, I'm Cordelia.
          </h2>
          <br />
          <p>Film and TV graduate</p>
          <p>Pasta sauce maker</p>
          <p>Cheese enjoyer</p>
          <p>Karaoke legend</p>
          <br />
          <Link href="/about"> View my About Page →</Link>
        </div>
      </div>
      <section className="flex justify-evenly my-4">
        <div className="p-1 w-[22vh]">
          <p>Currently:</p>
          <h3 className="text-xl font-bold my-4">Merseyside</h3>
          <img src="https://placehold.co/200x200" />
        </div>
        <div className="p-1 w-[22vh]">
          <p>Commutable:</p>
          <h3 className="text-xl font-bold my-4">Chester</h3>
          <img src="https://placehold.co/200x200" />
        </div>
        <div className="p-1 w-[22vh]">
          <p>Commutable:</p>
          <h3 className="text-xl font-bold my-4">Liverpool</h3>
          <img src="https://placehold.co/200x200" />
        </div>
        <div className="p-1 w-[22vh]">
          <p>Future goal:</p>
          <h3 className="text-xl font-bold my-4">Manchester</h3>
          <img src="https://placehold.co/200x200" />
        </div>
      </section>
      <div className="flex-col items-center justify-center rounded-lg border-4 border-rose-300 bg-rose-100 p-6 m-3 my-5">
        <h2 className="text-2xl font-semibold font-mono">
          Box Two Example Header
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione eius, provident doloremque in quod recusandae
          doloribus ex soluta eveniet accusantium similique sapiente nulla
          aspernatur corrupti voluptatem quae dolore explicabo! Eaque earum
          velit voluptatibus odit repellendus in officiis blanditiis eos non
          impedit omnis, exercitationem, distinctio natus sapiente facilis.
        </p>
      </div>
      <div className="flex-col items-center justify-center rounded-lg border-4 border-violet-300 bg-violet-100 p-6 m-3 my-2">
        <h2 className="text-2xl font-semibold font-mono">
          Box Two Example Header
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ratione eius, provident doloremque in quod recusandae
          doloribus ex soluta eveniet accusantium similique sapiente nulla
          aspernatur corrupti voluptatem quae dolore explicabo! Eaque earum
          velit voluptatibus odit repellendus in officiis blanditiis eos non
          impedit omnis, exercitationem, distinctio natus sapiente facilis.
          Tenetur repellendus saepe inventore laboriosam doloremque commodi
          nulla aspernatur, omnis doloribus. Laudantium impedit suscipit
          voluptate beatae, nemo dicta eius, adipisci officiis molestias totam,
          expedita doloribus non repellat quasi necessitatibus quos quaerat? Nam
          incidunt, voluptates voluptate necessitatibus eius obcaecati est. Ex,
          quam sequi delectus modi ratione voluptates inventore impedit
          repudiandae hic illum obcaecati?
        </p>
      </div>
    </>
  );
}
