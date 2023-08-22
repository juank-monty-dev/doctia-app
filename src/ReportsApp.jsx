import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/AppRoutes";
import { AppTheme } from "./theme";

export const ReportsApp = () => {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRoutes />
      </AppTheme>
    </BrowserRouter>
  );
};
