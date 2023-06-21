import { routerType } from "../types/router.types";
import About from "./About/About";
import ColorSystem from "./ColorSystem/ColorSystem";
import Home from "./Home/Home";

const pagesData: routerType[] = [
    {
        path: "Home",
        element: <Home />,
        title: "Home",
    },
    {
        path: "ColorSystem",
        element: <ColorSystem />,
        title: "Color System"
    },
    {
        path: "About",
        element: <About />,
        title: "about"
    }
];

export default pagesData;