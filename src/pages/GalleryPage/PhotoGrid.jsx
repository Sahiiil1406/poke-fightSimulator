import React, { useState } from 'react';
import WaterFall from "./WaterFall";

const PhotoGrid = () => {
  const categories = [
    "All",
    "INCUB8",
    "StartupFoolies",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9"
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="flex flex-col gap-5 w-full px-4 md:px-8 lg:px-16">
      <nav className="w-full overflow-x-auto">
        <ul className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 min-w-max md:min-w-0 py-2">
          {categories.map((category, index) => (
            <li 
              key={index}
              className={`bg-[#333C45] px-3 py-1 rounded-full text-sm whitespace-nowrap hover:bg-[#F34C19] hover:cursor-pointer transition-colors duration-200 ${selectedCategory === category ? 'bg-[#F34C19]' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <WaterFall selectedCategory={selectedCategory} />
    </div>
  );
};

export default PhotoGrid;
