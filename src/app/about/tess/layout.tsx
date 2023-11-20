import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      {/* <ol className="flex-col ">
        <li>
          <Link href="/home/">Go back to home page</Link>
        </li>
        <li>
          <Link href="/about/">Go back to about page</Link>
        </li>
      </ol> */}
    </div>
  );
}
