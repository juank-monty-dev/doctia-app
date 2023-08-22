import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { DoctiaRoutes } from "../doctia/routes/DoctiaRoutes";

export const AppRoutes = () => {
  // ! change to test:  "not-authenticated" | "checking"
  const status = "authenticated";
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<DoctiaRoutes />} />
      ) : (
        <Route path="/*" element={<AuthRoutes />} />
      )}
    </Routes>
  );
};
