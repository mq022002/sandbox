import Navbar from "./Navbar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-2">{children}</main>
    </>
  );
}
