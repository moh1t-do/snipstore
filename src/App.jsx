import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    ScrollRestoration,
} from 'react-router-dom'
import { productsData } from './api/api'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: productsData
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
])

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
