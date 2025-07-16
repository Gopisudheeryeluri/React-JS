import ReactDOM from 'react-dom/client';
import Header from './src/components/Header'; //default import
// //it is possible to have named import and default ipmport
// import {Header} from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Cart from './src/components/Cart';
import ErrorPage from './src/components/ErrorPage';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router';
import RestaurantMenu from './src/components/RestaurantMenu';
// import { useState } from 'react';

const App = () =>{
   return (
    <div className='app'>
        <Header/>
        <Outlet/>
    </div>
   )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <ErrorPage/> 
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);