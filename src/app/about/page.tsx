import Information from "@/components/Information";

export default function AboutRoute() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-evenly items-center text-center">
      <section className="bg-indigo-50 w-[30vw]">
        <h3>This is my page all about me</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          ducimus amet explicabo fugit? Aut commodi eum dolorum modi dicta,
          aliquam voluptatum quod reiciendis quo voluptatibus repellendus nemo
          eveniet, mollitia, doloremque neque itaque natus libero ut distinctio
          tenetur doloribus vero. Quo.
        </p>
      </section>
      <Information />
    </div>
  );
}
