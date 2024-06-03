"use client";

import Head from "next/head";
import { use, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; 

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  // Function to fetch data from the API route
  async function fetchPopupContent() {
    const res = await fetch("/api/Popup-Content");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data.content;
  }

  useEffect(() => {
    if (isOpen) {
      fetchPopupContent()
        .then((content) => setPopupContent(content))
        .catch(console.error);
    }
  }, [isOpen]);
  return (
    <>
      <div
        className={`popupHome flex items-center justify-center relative min-h-screen ${
          isOpen ? "filter blur-md" : ""
        }`}
      >
        <div className="flex flex-col rounded-3xl buttonBg ">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <p className="mt-2 text-sm text-gray-100 customFont">
                  Ready to pop up? Click to begin!
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-8 px-6 py-3 pb-12 sm:px-8">
            <button
              onClick={() => setIsOpen(true)}
              className="customFont bg-gray-600 text-slate-200 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            >
              <span className="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Open Popup
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-16 bg-white w-96 rounded shadow-lg ">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose size={24} />
            </button>
            <div className="p-2 flex items-center justify-center">
              <div className="newtons-cradle">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
              </div>
            </div>

            <h2 className=" customFont mb-4 text-lg font-semibold text-center">
              {popupContent}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
