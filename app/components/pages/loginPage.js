"use client"
import React, {useState, Link} from 'react';
// import { doSignInWithEmailAndPassword, doSignInWithGoogle } from './app/firebase/auth.js'
import { doSignInWithEmailAndPassword } from '@/app/firebase/auth';
import AddItem from './addItem.js';
import { useAuth } from '../pages/loginDetails.js';

export const Login = () => {
  const {userLogin} = useAuth();
  // const userLogin = "mylogin";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async(e) => {
    e.preventDefault();
    if(!isSignedIn) {
      setIsSignedIn(true);
      await doSignInWithEmailAndPassword(email, password)
    }
  }

  const onGoogleLogin = (e) => {
    e.preventDefault();
    if(!isSignedIn) {
        setIsSignedIn(true);
        doSignInWithGoogle().catch((err) => {
          setIsSignedIn(false);
        });
    }
  }

  return(
    // <div className="flex flex-col items-center">
    //     <p>{userLogin ? <Link href="proj-306-appication\app\components\pages\homePage.js">Continue, and create your list</Link>: notLoggedIn}</p>
    //     {userLogin} 
    //     <p>
    //         {userLogin ? (
    //             <button className="text-green-700" onClick={onGoogleLogin}>Sign Out</button>
    //         ) : (
    //             <button className="text-green-700" onClick={onGoogleLogin}>Sign in with GitHub</button>
    //         )}
    //     </p>
    // </div>
    1
);
}
