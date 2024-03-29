function Wrapper({ children, className }) {
    return <div className={`mx-auto max-w-6xl px-4 py-2 ${className || ''}`}>{children}</div>
}

export default Wrapper
