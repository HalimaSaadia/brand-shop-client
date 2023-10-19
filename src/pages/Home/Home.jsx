import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import HomePageBrands from "../../components/HomePageBrands/HomePageBrands";
import HomePageChatBox from "../../components/HomePageChatBox/HomePageChatBox";
import HomePageDrawer from "../../components/HomePageDrawer/HomePageDrawer";
import Reviews from "../../components/Reviews/Reviews";


const Home = () => {
    return (
        <div className="-z-10">
            <HomePageBanner />
            <HomePageBrands />
            <Reviews />
            <div className=" space-y-10">
            <HomePageDrawer />
            <HomePageChatBox />
            </div>
           
        </div>
    );
};

export default Home;