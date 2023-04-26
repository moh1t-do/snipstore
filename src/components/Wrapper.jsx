function Layout({ children, className }) {
    return <div className={`mx-auto max-w-6xl px-4 py-2 relative ${className || ''}`}>{children}</div>
}

export default Layout
