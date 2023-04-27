import Layout from './Wrapper'
import {
    AiOutlineShoppingCart,
    AiOutlineAlignRight,
    AiOutlineClose,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import { useEffect, useState } from 'react'
import MenuMobile from './MenuMobile'
import { useSelector } from 'react-redux'

function Header() {
    const [showMobileNav, handleNav] = useState(false)
    const [showNav, handleShow] = useState('translate-y-0')
    const [lastScrollY, setScrollY] = useState(0)

    const productData = useSelector((state) => state.snip.productData)
    const currQuan = useSelector((state) => state.snip.netQuantity)

    const controlNavbar = () => {
        if (window.scrollY > 200 && !showMobileNav) {
            if (window.scrollY > lastScrollY) {
                handleShow('-translate-y-20')
            } else {
                handleShow('translate-y-0')
            }
        } else {
            handleShow('translate-y-0')
        }
        setScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY])

    return (
        <div
            className={`sticky top-0 z-20 w-full  bg-white py-1 shadow-md ${showNav} transition-transform duration-300`}
        >
            <Layout className="relative flex justify-between">
                <Link to="/" className="text-4xl uppercase">
                    Shopzz
                </Link>

                <Menu />
                {showMobileNav && (
                    <MenuMobile showMobileNav={showNav} handleNav={handleNav} />
                )}
                <ul className="flex items-center justify-center gap-8">
                    <li>
                        <div className="relative">
                            <Link to="/cart">
                                <AiOutlineShoppingCart size={25} />
                            </Link>
                            <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
                                {currQuan}
                            </span>
                        </div>
                    </li>

                    <li className="md:hidden">
                        <button onClick={() => handleNav(!showMobileNav)}>
                            {showMobileNav ? (
                                <AiOutlineClose size={20} />
                            ) : (
                                <AiOutlineAlignRight size={20} />
                            )}
                        </button>
                    </li>
                </ul>
            </Layout>
        </div>
    )
}

export default Header
