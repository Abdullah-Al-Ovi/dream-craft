import { useLoaderData } from "react-router-dom";
import Banner from "../../Sections/Banner/Banner";


const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <p>{services.length}</p>
        </div>
    );
};

export default Home;