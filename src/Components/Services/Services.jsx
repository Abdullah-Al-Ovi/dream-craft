import { useEffect, useState } from "react";


const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
            fetch('/eventdata.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])
    return (
        <div className="bg-gray-100 " data-aos="fade-up"
        data-aos-duration="1000">
        <div className="w-[85%] mx-auto">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-indigo-100"
            >
              <circle fill="currentColor" cx="44" cy="44" r="15.5" />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          {/*  */}
          <h2 className="text-4xl font-semibold text-center my-7">Our Services</h2>

        <div className="grid gap-3 gap-x-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                services.map((service,idx)=>{
                    return <div key={idx} className="card bg-base-100 shadow-xl" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title text-red-900">{service.title}</h2>
                      <p>
                        {
                            service.description.slice(0,99)
                        }
                        <span>...</span>
                      </p>
                      <p className="text-lg font-medium text-red-500">Price:${service.price}</p>
                      <div className="card-actions justify-end">
                        <button className="p-1 bg-red-400 text-lg font-medium text-white rounded ">See Details</button>
                      </div>
                    </div>
                  </div>
                })
            }
        </div>

        </div>
        </div>
      </div>
    );
};

export default Services;