import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import HomePageBrands from "../../components/HomePageBrands/HomePageBrands";


const Home = () => {
    return (
        <div className="-z-10">
            <HomePageBanner />
            <HomePageBrands />
        </div>
    );
};

export default Home;