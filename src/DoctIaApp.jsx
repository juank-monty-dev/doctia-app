
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/AppRoutes";
import { AppTheme } from "./theme";

export const DoctIaApp = () => {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRoutes />
      </AppTheme>
    </BrowserRouter>
  );
};
