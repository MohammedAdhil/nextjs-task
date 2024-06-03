// // app/page.tsx
// import Head from 'next/head';
// import Popup from './Components/Popup';

// const fetchPopupContent = async () => {
//   // Simulate fetching data from a server
//   return 'This content is fetched from the server.';
// };

// export default async function Page1() {
//   const popupContent = await fetchPopupContent();

//   return (
//     <div className="relative min-h-screen bg-gray-100">
//       <Head>
//         <title>Page 1</title>
//       </Head>
//       <Popup popupContent={popupContent} />
//     </div>
//   );
// }
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
      {/* <div className="p-6 bg-white rounded shadow-lg">
        <button
          className="px-4 py-2 m-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => navigateToPage('/popup-page')}
        >
          Button Page
        </button>
        <button
          className="px-4 py-2 m-2 text-white bg-green-500 rounded hover:bg-green-700"
          onClick={() => navigateToPage('/animation-page')}
        >
          Animation Page
        </button>
      </div> */}
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
