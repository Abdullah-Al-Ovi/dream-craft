import { useLoaderData } from "react-router-dom";
import Banner from "../../Sections/Banner/Banner";
import Reviews from "../../Sections/Reviews/Reviews";

import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import Services from "../../Components/Services/Services";
import Features from "../../Components/Features/Features";



const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            
           <ReviewSection></ReviewSection>
           <Services></Services>
           <Features></Features>
           
        </div>
    );
};

export default Home;