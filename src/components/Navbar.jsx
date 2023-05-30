import _ from "lodash";
import React from "react";
import useNavbar from "../talons/useNavbar";
import { ListItem } from "./ListItem";

export const Navbar = () => {
  const { navbar, menu, showMenu } = useNavbar();

  return (
    <div>
      {_.size(navbar) > 0 ? (
        <ul className="flex justify-center bg-black text-white ">
          {navbar.map((items, index) => (
            <ListItem data={items} key={index} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
