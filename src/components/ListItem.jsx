import React from "react";
import useListItem from "../talons/useListItem";
import { SubCategory } from "./SubCategory";

export const ListItem = ({ data }) => {
  const { showMenu, setShowMenu } = useListItem();
  return (
    <div>
      <li
        className="py-3 px-3 mx-4 uppercase font-semibold flex justify-center items-center"
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        <span className="mx-2">{data.category}</span>
        <i className="fa fa-angle-down " aria-hidden="true"></i>
      </li>
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        {showMenu ? (
          <div className="absolute text-black mx-auto bg-white max-w-4xl w-full left-0 right-0 border-2 shadow-md">
            <ul className=" flex">
              {data.subCategory.map((subCat, index) => (
                <SubCategory key={index} data={subCat.fields} />
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};
