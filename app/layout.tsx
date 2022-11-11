import Link from "next/link";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/dm-screens">DM Screens</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
