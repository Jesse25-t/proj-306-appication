"use client";
import { useState, useEffect } from "react";

export default function ItemList() {
  const [listItem, setListItem] = useState("");

  const handleForm = (event) => {
    // prevent default submission
    event.preventDefault();
    alert(`This is the item ${listItem}`);
    console.log(listItem);
    setListItem("");
  };

  return (
    <main className="flex justify-center container mx-auto px-4 ">
      <nav className="p-2"> 
        <ul>
            <li>number 1</li>
        </ul>
      </nav>
      <div className="flex grow-0  p-2">
        <form onSubmit={handleForm}>
          <div>
            <input
              className="text-black"
              type="text"
              placeholder="item name"
              required
              value={listItem}
              onChange={(event) => setListItem(event.target.value)}
            />
          </div>
          <button className="bg-green-500" type="submit">
            {" "}
            +
          </button>
        </form>
      </div>
    </main>
  );
}
