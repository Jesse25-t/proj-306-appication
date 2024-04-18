"use client";
import React, { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./components/firebase";
import HomePage from "./screens/Page";

export function validUser(user){
  return user
}
export default function Login(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setIsLoggedIn(true);
        validUser(result.user)
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
      });
  };

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        setUser(null);
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 font-mono bg-blue-900 min-h-screen">
      {isLoggedIn ? (
        <div className="text-center">
          <p className="text-3xl text-black ">
            MAKE YOUR TO DO LIST
          </p>
          <HomePage user={user.displayName}/>
          <button
            onClick={signOutWithGoogle}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={signInWithGoogle}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign in with Google
          </button>
          <p className="mt-4">Please sign in to continue.</p>
        </div>
      )}
    </div>
  );
};
