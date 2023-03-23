import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "./Context";

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="max-w-6xl mx-auto h-full flex justify-center items-center gap-6 flex-wrap py-6">
      {categories.map((item) => {
        return (
          <div key={item.idCategory}>
            <img
              className="w-[180px] transistion-all duration-300 ease-in hover:-mt-2 cursor-pointer"
              src={item.strCategoryThumb}
              alt={item.strCategory}
            />
            <h4>{item.Category}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
