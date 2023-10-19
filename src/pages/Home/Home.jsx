import { useState } from "react";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import HomePageBrands from "../../components/HomePageBrands/HomePageBrands";
import HomePageChatBox from "../../components/HomePageChatBox/HomePageChatBox";
import HomePageDrawer from "../../components/HomePageDrawer/HomePageDrawer";
import Reviews from "../../components/Reviews/Reviews";

const Home = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div data-theme={theme}  className="-z-10 px-3 md:px-10">
      <div className="form-control">
        <label className="label cursor-pointer">
        
          <button className="flex items-center gap-3" onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
             {theme == 'light' ? 'Enable': 'Disable'} Dark Mode
            <input type="checkbox" className="toggle" />
          </button>
        </label>
      </div>
      <HomePageBanner />
      <HomePageBrands theme={theme} />
      <Reviews theme={theme} />

      <HomePageDrawer theme={theme} />
      <HomePageChatBox />
    </div>
  );
};

export default Home;
