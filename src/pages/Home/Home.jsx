import { useContext, useEffect, useState } from "react";
import { PiToggleRightFill, PiToggleLeftLight } from "react-icons/pi";

import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import HomePageBrands from "../../components/HomePageBrands/HomePageBrands";
import HomePageChatBox from "../../components/HomePageChatBox/HomePageChatBox";
import HomePageDrawer from "../../components/HomePageDrawer/HomePageDrawer";
import Reviews from "../../components/Reviews/Reviews";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
  const {theme, toggleTheme} = useContext(AuthContext)

  return (
    <div data-theme={theme} className="-z-10 px-3 md:px-10">
      <div className="cursor-pointer">
        <div className="block w-32" onClick={() => toggleTheme(theme)}>
          {theme === 'dark' ? <PiToggleRightFill className="text-4xl" /> : <PiToggleLeftLight className="text-4xl" /> }
        </div>
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
