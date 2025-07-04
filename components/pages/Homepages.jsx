"use client";
import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import useCounterStore from "@/store/useCounterStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase"; // Make sure you have an auth export from your firebase config
import { signInWithPopup } from "firebase/auth";


const Homepages = () => {
    const name = "Kumanan";
    const age = "26";
const [user, setUser] = useState(null);

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
    return () => unsubscribe();
}, []);

console.log(user);

const { count, increase } = useCounterStore();
    return (
        <div className="m-4">
            
            <Header count={count} userName={name} age={age} />

            <div className='m-8'>
                <h1 className='text-4xl font-semibold'>
                    {count}
                </h1>
                <button
                    onClick={increase}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    +
                </button>
                {user && (
                    <h2>Welcome my project, {user.displayName}</h2>
                )}
            </div>
        </div>
    );
}

export default Homepages;
