import { Route, Routes } from "react-router-dom";

import SignUp from "../views/SignUp";
import Home from "../views/Home";
import Login from "../views/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRoutes;
