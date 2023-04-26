import { Link } from 'react-router-dom'
function Menu() {
    return (
        <ul className="hidden items-center justify-center gap-8 md:flex">
            <Link>Home</Link>
            <Link>Pages</Link>
            <Link>Shop</Link>
            <Link>Elements</Link>
            <Link>Blog</Link>
        </ul>
    )
}

export default Menu
