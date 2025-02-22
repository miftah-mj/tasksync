import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <StrictMode>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </StrictMode>
    </AuthProvider>
);
