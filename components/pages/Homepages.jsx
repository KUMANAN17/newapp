"use client";
import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import useCounterStore from "@/store/useCounterStore";


const Homepages = () => {
    const name = "Kumanan";
    const age = "26";
    

const { count, increase } = useCounterStore();

    useEffect(() => {
        console.log("Render!")
    }, [])

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
            </div>
        </div>
    );
}

export default Homepages;
