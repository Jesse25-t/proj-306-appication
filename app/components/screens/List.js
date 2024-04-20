"use client";
import { useState, useEffect } from "react";
import { addItem, getItems, deleteItem } from "../_services/list-services";
import Footer from "./footer";
import Link from "next/link";

// This is a temporary variable for getting list from a block of the code
let listData = [];
console.log(listData);

const SavedList = ({ list }) => {
  const [userSavedList, setUserSavedList] = useState([]);
  const [listTitle, setListTitle] = useState("");
  useEffect(() => {
    setUserSavedList(list);
    setListTitle(list != null ? list[0]?.activityTitle : "");
  }, [list]);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">{listTitle}</h2>
      <ul className="divide-y divide-gray-200">
        {userSavedList.map((item, index) => (
          <li key={index} className="py-2">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-500">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedList;

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

export function AddItem({ user }) {
  const [activityTitle, setActivityTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const handleRemove = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  // This method will be implemented when firestore system is fixed
  // const handleAddItem = async (newItem) => {
  //   if (user) {
  //     const newItemId = await addItem(user.uid, newItem);
  //     setList((prevItems) => [...prevItems, { ...newItem, id: newItemId }]);
  //   } else {
  //     console.log("error: cannot resolve user");
  //   }
  // };

  const handleAddItem = (newItem) => {
    setList([...list, newItem]);
  };

  const handleForm = (event) => {
    event.preventDefault();
    const newItem = {
      name: activityTitle,
      description: description,
    };
    handleAddItem(newItem);
    setActivityTitle("");
    setDescription("");
  };

  const handleSaveChanges = (list) => {
    if (list.length > 0) {
      listData = list;
      console.log(listData);
      console.log("Your list has been saved");
    } else {
      console.log("There was an error saving your list");
    }
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
          <button
            onClick={() => handleSaveChanges(list)}
            className="bg-blue-500 px-4 py-2 m-2 rounded-full text-white"
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center h-screen">
        <Link
          href="/"
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
  return (
    <div>
      <p className="text-3xl text-black text-center p-3">Your List So Far</p>
      <p>
        {listData.length < 0 ? (
          <div>You have to make a list first</div>
        ) : (
          <SavedList list={listData} />
        )}
      </p>
      <Link
        href="/"
        className="bg-gray-800 text-blue-500 hover:text-blue-700 py-2 px-4 rounded-lg"
      >
        Home Page
      </Link>
    </div>
  );
}

// For this project, at this time the export feature will not be enabled yet. A small paymet process will be required
export function ExportList() {
  return <p>This Feature is not yet available. Please Try again later</p>;
}
