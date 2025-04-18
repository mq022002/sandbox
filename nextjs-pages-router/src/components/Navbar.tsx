import Link from "next/link";

export default function Navbar() {
  const navLinkClasses = "hover:text-white";
  return (
    <nav className="bg-slate-800 py-4">
      <div className=" flex items-center justify-between">
        <div className="text-gray-300  flex justify-around mx-auto">
          <div className="flex flex-row gap-2">
            <Link href="/" className={navLinkClasses}>
              Home
            </Link>
            <div className="cursor-default"> | </div>
            <Link href="/products" className={navLinkClasses}>
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
