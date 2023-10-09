import { useEffect, useState } from "react";


const Reviews = () => {
   const [reviews,setReviews]= useState([])
   useEffect(()=>{
    fetch('/reviews.json')
    .then(res=>res.json())
    .then(data=>setReviews(data))
   },[])
 
    return (
        
       <div data-aos="fade-up"
       data-aos-duration="1000">

            

        <div  className=" flex gap-5">

{
    reviews?.map(review=>{
        return <div key={review.rev_id} className="w-32  shadow-2xl  text-center border-l-2 border-b-2
         border-blue-500">
        <p className="text-purple-600 text-lg font-medium">{review.rev_name}</p>
        <h3>
            {
                review.rev.length > 27 && review.rev.slice(0,27)
            }
            <span>...<span className="text-blue-500">Read more</span></span>
        </h3>
        </div>
    })
}
        </div>
       </div>
    );
};

export default Reviews;