import Banner from "../../Components/Banner/Banner";
import Box1 from "../../Components/Shared/Box1";
import SwipeBars from "../../Components/SwiperBars/SwipeBars";
import SectionTitle from "../../Components/Titles/SectionTitle";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import CallUs from "../../Components/Shared/CallUs";
import ChefRecommends from "../../Components/Shared/ChefRecommends";
import OurMenu from "../../Components/Shared/OurMenu";
import Testimonials from "../../Components/Shared/Testimonials";
import { Helmet } from "react-helmet-async";


const Home = () => {
 
  return (
    <>
    <Helmet>
                <title>Bistro Cafe | Home</title>
            </Helmet>
      <div>
        <Banner />
      </div>
      <div className="w-[80%] mx-auto py-10">
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"Order Here"}
        />
        <SwipeBars />
      </div>
      <div className="bg-[url('/assets/home/chef-service.jpg')] w-[80%] mx-auto py-16">
        <Box1 />
      </div>
      <div className="w-[80%] mx-auto py-10">
        <PopularMenu />
      </div>
      <div className="w-[80%] mx-auto py-10">
        <CallUs/>
      </div>
      <div className="w-[80%] mx-auto py-10">
        <ChefRecommends/>
      </div>
      <div className="bg-[url('/assets/home/featured.jpg')] bg-fixed">
        <OurMenu />
      </div>
      <div className="w-[80%] mx-auto py-10">
        <Testimonials/>
      </div>
    </>
  );
};

export default Home;
