"use client";
import { useState, useEffect } from "react";

export default function AddItem() {
  const [listItem, setListItem] = useState("");

  const handleForm = (event) => {
    // prevent default submission
    event.preventDefault();
    console.log(listItem);
    setListItem("");
  };

  return (
    <main className="flex justify-center container mx-auto px-4 min-h-screen">
      <div className="p-2 bg-gray-400 w-full md:w-1/4">
        <ul>
          <li>List</li>
        </ul>
      </div>
      <div className="flex p-2 grow justify-center">
        <form onSubmit={handleForm}>
          <div className="flex flex-col">
            <input
              className="bg-gray-400 text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-2 placeholder-black"
              type="text"
              placeholder="Activity title"
              required
              value={listItem}
              onChange={(event) => setListItem(event.target.value)}
            />
            <textarea
              className="text-black border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 resize-none bg-gray-400 placeholder-black"
              placeholder="Description"
              required
              rows={9}
              onChange={(event) => setListItem(event.target.value)}
            ></textarea>
          </div>
          <button
            className="bg-green-500 px-4 py-2 m-2  rounded-full "
            type="submit"
          >
            +
          </button>
        </form>
      </div>
      <div className="p-2 bg-gray-400 w-full md:w-1/4">
        <ul>
          <li>List</li>
        </ul>
      </div>
    </main>
  );
}
