import { useContext } from "react";
import { authContex } from "../../AuthProvider/AuthProvider";


const Booking = () => {
    const{user}=useContext(authContex)
    return (
        <div className="space-y-3 bg-[#F3F3F3] py-7">
            <h1 className="text-3xl font-semibold text-center my-3">Book Your Event </h1>
            
           
            <div className="w-[40%] mx-auto">
    <label htmlFor="username" className="block text-md text-gray-500 dark:text-gray-300">Username</label>

    <input type="text" readOnly  placeholder={user.displayName} className="block  mt-2 w-full placeholder-gray-800 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300" />
    
            </div>
            <div className="w-[40%] mx-auto">
    <label htmlFor="username" className="block text-md text-gray-500 dark:text-gray-300">Primary Email</label>

    <input type="text" readOnly  placeholder={user.email} className="block  mt-2 w-full placeholder-gray-800 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300" />
    
            </div>
            <div className="w-[40%] mx-auto">
    <label htmlFor="username" className="block text-md text-gray-500 dark:text-gray-300">Secondary Email</label>

    <input type="text"  placeholder='john@example.com'  className="block  mt-2 w-full placeholder-gray-400 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300" />
    
            </div>
            
            <div className="w-[40%] mx-auto">
    <label htmlFor="username" className="block text-md text-gray-500 dark:text-gray-300">Contact</label>

    <input type="text" required  placeholder='Phone no.' className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300" />
    
            </div>

            <div className="w-[40%] mx-auto">
                <h3  className="block text-md text-gray-500 dark:text-gray-300">Select your event type</h3>
                 <div className="bg-[#FFF] p-3 rounded">
                   {/*  */}
                   <div className="dropdown dropdown-bottom">
                   <label tabIndex={0} className="btn     m-1">Click to see event types.</label>
             <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
             <div className="form-control">
                      <label className="label cursor-pointer">
                      <span className="label-text text-gray-500 ml-2">Weddings</span> 
                       <input type="checkbox"                     className="checkbox checkbox-primary" />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                      <span className="label-text text-gray-500 ml-2">Birthday Parties</span> 
                       <input type="checkbox"                     className="checkbox checkbox-primary" />
                      </label>
                    </div>  
                    <div className="form-control">
                      <label className="label cursor-pointer">
                      <span className="label-text text-gray-500 ml-2">Anniversaries</span> 
                       <input type="checkbox"                     className="checkbox checkbox-primary" />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                      <span className="label-text text-gray-500 ml-2">Engagement Parties</span> 
                       <input type="checkbox"                     className="checkbox checkbox-primary" />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                      <span className="label-text text-gray-500 ml-2">Retirement Parties</span> 
                       <input type="checkbox"                     className="checkbox checkbox-primary" />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                      <span className="label-text text-gray-500 ml-2">Baby Shower</span> 
                       <input type="checkbox"                     className="checkbox checkbox-primary" />
                      </label>
                    </div>
                    </ul>
                </div>
                   {/*  */}
                  
                 </div>
            </div>

            <div  className="w-[40%] mx-auto">
    <label htmlFor="Birthday" className="block text-md text-gray-500 dark:text-gray-300">Event date</label>

    <input type="date" required placeholder="John Doe" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300" />

</div>

<div className="w-[40%] mx-auto">
    <label htmlFor="username" className="block text-md text-gray-500 dark:text-gray-300">Address</label>

    <input type="text" required  placeholder='Your complete address' className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-5 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300" />
    
            </div>

<div className="w-[40%] mx-auto">
    <label htmlFor="Description" className="block text-sm text-gray-500 dark:text-gray-300">Description</label>

    <textarea placeholder="Tell us if you have any requirements..." className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-red-400 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-red-300"></textarea>
    
    
</div>
        <div className="w-[40%] mx-auto">
        <button className="p-1 my-4 bg-red-400 rounded text-lg font-medium text-white w-[100%]">Proceed to checkout</button>
        </div>
            


        



        </div>
    );
};

export default Booking;