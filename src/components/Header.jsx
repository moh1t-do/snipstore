import Layout from './Wrapper'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Layout>
            <div className="flex w-full items-center justify-between rounded-sm bg-white px-4 py-4 shadow-md sticky top z-20">
                <Link to="/" className="text-4xl uppercase">
                    Shop
                </Link>
                <ul className="flex items-center justify-center gap-8">
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Shop</li>
                    <li>Elements</li>
                    <li>Blog</li>
                </ul>
                <ul className="flex items-center justify-center gap-8">
                    <li>
                        <div className="relative">
                            <Link to="/cart">
                                <AiOutlineShoppingCart size={25} />
                            </Link>
                            <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
                                1
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default Header
