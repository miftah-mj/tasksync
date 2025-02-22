import { Route, Routes } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Tasks from "../pages/tasks/Tasks";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
