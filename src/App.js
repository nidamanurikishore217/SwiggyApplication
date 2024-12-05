import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
// import Grocery from './Components/Grocery';
import Error from './Components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurentMenu from './Components/RestaurentMenu';
import ShimmerUi from './Components/ShimmerUi';

const Grocery = lazy(() => import("./Components/Grocery"))

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },

            {
                path: '/about',
                element: < About />
            },

            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<ShimmerUi />}><Grocery /></Suspense>
            },
            {
                path: "/restaurents/:resId",
                element: <RestaurentMenu />
            },


        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);


