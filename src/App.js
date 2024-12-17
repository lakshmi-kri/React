import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/grocery';

//lazy loading
const Grocery = lazy(() => import('./components/grocery'));
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>

    );
};
const appRouter = createBrowserRouter([
    {
        path: "/", element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },

            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<p>Loading..</p>}><Grocery /></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }

        ],
        errorElement: <Error />
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


