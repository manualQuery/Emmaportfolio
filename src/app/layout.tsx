import "./globals.css";

export const metadata = {
  title: "My Country Home",
  description: "A beautiful Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
