
import { useLoaderData } from "react-router-dom";


const Career = () => {
    const careers = useLoaderData()
    return (
      
        <div className="bg-gray-100" data-aos="fade-up"
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
          <h2 className="text-4xl font-semibold text-center my-7">Build career with us</h2>

        <div className="grid gap-5 gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {
                careers.map((career,idx)=>{
                    return <div key={idx} className="card bg-base-100 shadow-xl" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    
                    <div className="card-body">
                      <h2 className="card-title text-red-900">{career.designation}</h2>
                      
                      <p className="text-lg font-medium text-red-500">Salary:{career.salary}</p>
                      <ol>
                        {
                            career.requirements.map((requ,index)=>{
                               return <li key={index}><span><i className="fa-solid fa-arrow-right mr-1"></i></span><span>{requ}</span></li>
                            })
                        }
                      </ol>
                      <div className="card-actions justify-end">
                        <button className="p-1 bg-red-400 text-lg font-medium text-white rounded ">Apply</button>
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

export default Career;