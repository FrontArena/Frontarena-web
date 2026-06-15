import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import MonsterPage from "../pages/MonsterPage/MonsterPage";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "monster",
                element: <MonsterPage />,
            },
        ],
    },
]);