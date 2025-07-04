
"use client"

import { PlusCircle } from 'lucide-react';
import React , { useEffect, useState } from 'react'

const book = () => {

  const[reviews, setReviews]= useState([]);
  const [newReview, setNewReview] = useState({
    Title: "",
    price: 0,
    Author: "",
    rating: 0,
    review: ""
  });
const fetchReview = async()=>{
    const querysnapshort = await getDocs(collection(db,"review"));

    const reviewData = querysnapshort.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    }));
    setReviews(reviewsData);
}


  const handleAddReview = async()=>{
    await addDoc(collection(db,"reviews"),{
        Title:newReview.Title,
        price:newReview.price,
        Author:newReview.Author,
        rating:newReview.rating,
        review:newReview.review,
        createAt: new Date().toISOString(),
    })

    setNewReview({
        Title: "",
    price: 0,
    Author: "",
    rating: 0,
    review: ""
      
    })
    fetchReview();
  }

  useEffect(()=>{
    fetchReview()
  },[]);

  console.log(reviews)
  return (
    <div className='m-8'>
      <div className=''>
        <h1 className='text-2xl font-semibold mb-5'>Add Review</h1>

        <div className='max-w-md flex flex-col gap-4'>
          <>
            <input type="text" placeholder='Book Title' className='p-2 border border-blue-300 rounded' value={newReview.Title} onChange={(e)=>setNewReview({...newReview, Title:e.target.value})} />

            <input type="number" placeholder='Book price' className='p-2 border border-blue-300 rounded'value={newReview.price} onChange={(e)=>setNewReview({...newReview, price:e.target.value})} />

            <input type="text" placeholder='Book Author Name' className='p-2 border border-blue-300 rounded'value={newReview.Author} onChange={(e)=>setNewReview({...newReview, Author:e.target.value})} />

            <input type="number" placeholder='Book rating' className='p-2 border border-blue-300 rounded'value={newReview.rating} onChange={(e)=>setNewReview({...newReview, rating:e.target.value})} />

            <textarea placeholder='Book Review ' className='p-8 border border-gray-300 rounded'value={newReview.review} onChange={(e)=>setNewReview({...newReview, review:e.target.value})}
            ></textarea>
          </>

          <button className='bg-blue-500 flex items-center justify-center py-2 gap-2 text-white rounded cursor-pointer' onClick={handleAddReview}><PlusCircle className='w-4'/>Add Review</button>
      

      
      </div>
<div classname="grid grid-cols-1 sm:grid-cols-2">
        {
            reviews.map((review)=>(
                <div key={review.id} className="flex flex-col gap-2 border m-4 p-4 rounded">
                    <span>Title:{review.title}</span>
                    <span>Price:{review.price}</span>
                    <span>Author:{review.author}</span>
                    <span>Rating:{review.rating}</span>
                    <span>Review:{review.reeview}</span>
                    </div>
            ))
        }
      </div>

        
      </div>
    </div>
  );
}

export default book;