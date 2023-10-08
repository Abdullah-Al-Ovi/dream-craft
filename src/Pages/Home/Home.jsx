import { useLoaderData } from "react-router-dom";
import Banner from "../../Sections/Banner/Banner";
import Reviews from "../../Sections/Reviews/Reviews";

import ReviewSection from "../../Components/ReviewSection/ReviewSection";


const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            
           <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;