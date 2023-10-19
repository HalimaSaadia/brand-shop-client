import React from "react";
import {FaQuestion} from "react-icons/fa"

import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import FAQ from "../FAQ/FAQ";

const HomePageDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="z-50">
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={310}
        className="bla bla bla w-[500px]"
      >
        <div>
          <FAQ toggleDrawer={toggleDrawer} />
        </div>
      </Drawer>
      {/* FaQuestion */}

      <div className="avatar cursor-pointer fixed bottom-20 z-50" onClick={toggleDrawer}>
        <div className="w-8 sm:w-14 rounded-full ring  ring-offset-base-100 ring-offset-2 bg-[#E74C3C] ring-[#E74C3C]">
          <div className="h-full flex justify-center items-center">
         
            <FaQuestion  className="text-2xl sm:text-4xl"/>
            {/* <button onClick={toggleDrawer}>Show</button> */}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default HomePageDrawer;
