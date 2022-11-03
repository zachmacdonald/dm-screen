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
        <p key={layout.id}>{layout.type}</p>
      ))}
    </div>
  );
}
