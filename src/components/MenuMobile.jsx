import { Link } from 'react-router-dom'
function MenuMobile({handleNav }) {
    return (
        <ul className="absolute left-0 top-[60px] flex h-[calc(100vh-60px)] w-full flex-col gap-4 bg-white px-4 py-4 md:hidden">
            <li className='border-b py-3'>
                <Link onClick={() => handleNav(false)}>Home</Link>
            </li>
            <li className='border-b py-3'>
                <Link onClick={() => handleNav(false)}>Pages</Link>
            </li>
            <li className='border-b py-3'>
                <Link onClick={() => handleNav(false)}>Shop</Link>
            </li>
            <li className='border-b py-3'>
                <Link onClick={() => handleNav(false)}>Elements</Link>
            </li>
            <li className='border-b py-3'>
                <Link onClick={() => handleNav(false)}>Blog</Link>
            </li>
        </ul>
    )
}

export default MenuMobile
