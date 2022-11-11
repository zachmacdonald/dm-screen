import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Some content</p>
      <Link href="/dm-screens">DM Screens Here</Link>
    </div>
  );
}
