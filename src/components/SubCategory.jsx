import React from "react";

export const SubCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="mx-3">
      <li className=" uppercase px-2 mx-3 py-3 text-sm font-bold ">
        {data.title}
      </li>
      <ul>
        {data.subCategoryItems.map((item, index) => (
          <li
            className="capitalize text-center py-1 last-of-type:mb-3 text-[#555]"
            key={index}
          >
            {item.fields.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
