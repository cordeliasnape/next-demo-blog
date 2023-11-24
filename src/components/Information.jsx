import styles from "./Information.module.css";

export default function Information() {
  return (
    <div className={`${styles.contactdiv} w-[30vw]`}>
      <h2 className="text-center text-lg">Title Example Box</h2>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
        recusandae commodi ducimus fugit nesciunt officiis enim quidem
        praesentium, placeat alias.
      </p>
    </div>
  );
}
