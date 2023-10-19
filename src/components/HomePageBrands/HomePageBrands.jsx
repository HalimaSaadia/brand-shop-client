import React, { useEffect, useState } from "react";
import HomePageBrand from "../HomePageBrand/HomePageBrand";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

const HomePageBrands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="my-16 ">
      <SectionHeading text="Buy Products Of your Favorite Brand" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {brands.map((brand) => (
          <HomePageBrand key={brand.Id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default HomePageBrands;
