import React, { useContext } from "react";

import { AppContext } from "../../App";

const NavMoblie = () => {
  const navLists = useContext(AppContext);
  return <>{navLists}</>;
};

export default NavMoblie;
