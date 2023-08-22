import { Navigate, Route, Routes } from "react-router-dom";
import { DoctiaPage } from "../pages/DoctiaPage";

export const DoctiaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DoctiaPage/>} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
