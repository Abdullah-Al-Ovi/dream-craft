
import Banner from "../../Sections/Banner/Banner";


import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import Services from "../../Components/Services/Services";
import Features from "../../Components/Features/Features";



const Home = () => {
    
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