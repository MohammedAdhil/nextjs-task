"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bgColorHome ">
      <div className="box">
        <span></span>
        <div className="content">
          <div className="p-6 rounded">
            <button
              onClick={() => navigateToPage("/popup-page")}
              className="m-2 border-2 border-yellow-600 rounded-lg text-orange-500 bg-white px-6 py-3 text-base hover:border-yellow-200 cursor-pointer transition customFont"
            >
              Button Page
            </button>
            <button
              onClick={() => navigateToPage("/animation-page")}
              className="m-2 border-2 border-yellow-600 rounded-lg text-orange-500 bg-white px-6 py-3 text-base hover:border-yellow-200 cursor-pointer transition customFont"
            >
              Animation Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
