import { VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { PageTask } from "../components/pages/PageTask";

export const Router: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<PageTask />} />
    </Routes>
  );
};
