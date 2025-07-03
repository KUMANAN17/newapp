import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className='m-6'>
        <h1 className='text-xl font-semibold'>About Us</h1>
      </div>
      <Link href={'/'}>Home</Link>
    </>
  );
};
export default page;