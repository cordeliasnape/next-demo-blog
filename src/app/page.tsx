import Link from "next/link";
import Image from "next/image";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${quicksand.className} bg-rose-50 flex min-h-screen flex-col  justify-between p-2 text-center`}
    >
      <div className="flex h-[110vh]">
        <div
          className="text-left flex flex-col justify-center
        "
        >
          <h2>Cordelia Snape</h2>
          <p>Graduate Full-Stack Web Developer</p>
        </div>
      </div>
      <div className="w-[100vw] flex-row">
        <Image
          src="/me.jpeg"
          alt="Image of the Web Developer"
          width={300}
          height={300}
        />
        <div className="w-[60vw] rounded-lg border-4 border-amber-300 bg-amber-100 p-6 m-3">
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
      <div className="flex-col items-center justify-center rounded-lg border-4 border-emerald-300 bg-emerald-100 p-6 m-3">
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
    </main>
  );
}
