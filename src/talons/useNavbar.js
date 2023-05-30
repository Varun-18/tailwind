import React, { useState } from "react";
import { useSelector } from "react-redux";

const useNavbar = () => {
  const { navbar } = useSelector((state) => state.data);
  const [menu, showMenu] = useState(false);

  return { navbar, menu, showMenu };
};

export default useNavbar;
