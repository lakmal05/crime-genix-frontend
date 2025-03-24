import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import OtherRoutes from "../Routes/Routes";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const Index = () => {
  return (
    <Suspense>
      <Routes>
        {OtherRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
        <Route key={"2323"} path={"/"} element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
