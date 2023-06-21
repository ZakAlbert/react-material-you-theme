import { Navigate, Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";
import MainLayout from "./Layout/MainLayout";

const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return (
        <Routes>
            <Route element={<MainLayout />} path="/">
                <Route index element={<Navigate to="/Home" replace />} />
                {pageRoutes}
            </Route>
        </Routes>
    );
};

export default Router;