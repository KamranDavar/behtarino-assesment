import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <a
              href="#responsive-header"
              className="mt-4 inline-block lg:mt-0 text-gray-900 hover:text-gray-500 mr-4"
            >
              Home
            </a>
          </Link>
          <Link href="/products">
            <a
              href="#responsive-header"
              className="mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-500 mr-4"
            >
              products
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
