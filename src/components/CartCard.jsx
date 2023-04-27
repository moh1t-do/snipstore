function CartCard({ title, quantity, netPrice }) {
    return (
        <div className="grid h-20 grid-cols-3 items-center justify-center rounded border px-4 py-4">
            <div className="mx-auto">{title}</div>
            <div className="mx-auto">{quantity}</div>
            <div className="mx-auto">{netPrice}</div>
        </div>
    )
}

export default CartCard
