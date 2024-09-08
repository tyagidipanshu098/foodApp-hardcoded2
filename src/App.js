import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Bottom from "./Components/Bottom.js";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./Components/About.js";
import Header from "./Components/Header.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import Cart from "./Components/Cart.js";

const App = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Bottom />
        </>
    );

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/card/:id",
                element: <RestaurantMenu/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);