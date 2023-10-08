import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const [service,setService]=useState({})
    const {id}=useParams()
    const services = useLoaderData()
    

    useEffect(()=>{
        const find = services?.find(data=>data.id === parseInt(id))
        setService(find)
    },[id,services])
    console.log(service,id);

    return (
        <div className="w-[75%] mx-auto my-11 text-center shadow-2xl p-7">
            <div>
                <img className="h-[70vh] mx-auto w-[80%] object-cover" src={service.image} />
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-red-500 my-5">{service.title}</h1>
            </div>
            <div>
                <p className="text-gray-500">{service.description}</p>
            </div>
            <div>
                <button className="p-1 my-4 bg-red-400 rounded text-lg font-medium text-white w-[100%]">Make a plan</button>
            </div>
        </div>
    );
};

export default ServiceDetails;