// import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CookingBlog from "./unique/CookingBlog";
import FeaturedFoods from "./FeaturedFoods";
import DonationSection from "./unique/DonationSection";
import Impact from "./unique/Impact";

const Home = () => {
  return (
    <div>
      {/* <Helmet>Home-BiteBuddy</Helmet> */}
      <div>
        <Banner></Banner>
        <Impact></Impact>
        <FeaturedFoods></FeaturedFoods>
        <CookingBlog></CookingBlog>
        <DonationSection></DonationSection>
      </div>
    </div>
  );
};

export default Home;
