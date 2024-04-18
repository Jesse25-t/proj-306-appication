"use client";
import { useState } from "react";
import Footer from "./footer";
import Link from "next/link";

const Card = ({ name, description, onRemove }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-md hover:shadow-lg bg-gray-800 p-4 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex justify-between items-center mb-2">
        <p className="text-xl font-semibold text-white">{name}</p>
        <button className="text-red-500 hover:text-red-700" onClick={onRemove}>
          Remove
        </button>
      </div>
      <div className="overflow-y-auto max-h-40">
        {" "}
        {/* Adjust max height as needed */}
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export function AddItem() {
  const [activityTitle, setActivityTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const handleRemove = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleForm = (event) => {
    event.preventDefault();
    setList([
      ...list,
      {
        name: activityTitle,
        description: description,
      },
    ]);
    setActivityTitle("");
    setDescription("");
  };

  const handleSaveChanges = () => {
    setList([]);
  };

  return (
    <main className="flex justify-center flex-col font-mono p-4">
      <p className="text-3xl text-black text-center p-3">Make Your To Do</p>
      <div className="flex justify-center container mx-auto px-4">
        <div className="flex p-2 flex-grow justify-center">
          <form onSubmit={handleForm} className="flex flex-col w-full">
            <input
              className="bg-gray-800 text-blue-300 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 mb-2 placeholder-blue-300"
              type="text"
              placeholder="Activity title"
              required
              value={activityTitle}
              onChange={(event) => setActivityTitle(event.target.value)}
            />
            <textarea
              className="text-blue-300 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 resize-none bg-gray-800 placeholder-blue-300"
              placeholder="Description"
              required
              rows={9}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
            <button
              className="bg-green-500 px-4 py-2 m-2 rounded-full"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
        <div className="p-2 bg-gray-800 md:w-1/4">
          <p className="text-xl text-center py-2 font-bold text-white">
            Your list
          </p>
          {list.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              description={item.description}
              onRemove={() => handleRemove(index)} // Pass remove function with index
            />
          ))}
          {!list.length ? (
            <div className="text-white">Make a plan then save</div>
          ) : (
            <button
              className="bg-blue-500 px-4 py-2 m-2 rounded-full text-white"
              onClick={handleSaveChanges}
            >
              Save
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center h-screen">
        <Link
          href="\components\screens"
          className="bg-gray-800 text-blue-500 hover:text-blue-700 py-2 px-4 rounded-lg"
        >
          Home Page
        </Link>
        <Footer />
      </div>
    </main>
  );
}

export function ViewList() {
  return <p>please choose</p>;
}

export function ExportList() {
  return <p>please choose</p>;
}
