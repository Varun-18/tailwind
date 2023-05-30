import React, { useState } from "react";

const useListItem = () => {
  const [showMenu, setShowMenu] = useState(false);

  return { showMenu, setShowMenu };
};

export default useListItem;
