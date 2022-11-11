import Link from "next/link";
import prisma from "../../lib/prisma";

async function getDMScreens() {
  const layouts = await prisma.layout.findMany();
  return layouts;
}

export default async function DMScreensPage() {
  const layouts = await getDMScreens();
  return (
    <div>
      <h1>Screens</h1>
      {layouts.map((layout) => (
        <Link href={`/dm-screens/${layout.id}`} key={layout.id}>
          {layout.id}
        </Link>
      ))}
    </div>
  );
}
