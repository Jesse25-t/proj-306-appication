import Login from "../Login";
import Footer from "./footer";
import Link from "next/link";

export default function HomePage({ userAuth }) {
    //TODO: replace user with userAuth.name
  return (
    <main className="flex flex-col items-center py-3 font-mono">
      <div className="text-center bg-gray-900 text-white py-8 m-5 rounded-lg shadow-lg">
        <p className="text-lg">Hey user, what do you plan to do today?</p>
        <div className="flex justify-around mt-6 max-w-xl mx-auto">
          <Link href="\components\screens\make-list" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline m-2">
            Start A List
          </Link>
          <Link href="\components\screens\view-list" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline m-2">
            View Previous List
          </Link>
          <Link href="\components\screens\export-list"  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline m-2">
            Export List
          </Link>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
