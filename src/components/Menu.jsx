import { Link } from 'react-router-dom'
function Menu() {
    return (
        <ul className="hidden items-center justify-center gap-8 md:flex">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/login">Register</Link>
            {/* <Link>Shop</Link>
            <Link>Elements</Link>
            <Link>Blog</Link> */}
        </ul>
    )
}

export default Menu
