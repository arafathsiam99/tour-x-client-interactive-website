import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

import React from "react";

const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;
