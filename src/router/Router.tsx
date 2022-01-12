import { useEffect, VFC } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { PageTask } from "../components/pages/PageTask";
import { HeaderLayout } from "../components/template/HeaderLayout";
import { auth } from "../firebase";

export const Router: VFC = () => {
  const navigete = useNavigate();
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      user && navigete("/tasks");
      !user && navigete("/");
    });
    return () => unSub();
  }, [navigete]);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/tasks"
        element={
          <HeaderLayout>
            <PageTask />
          </HeaderLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
