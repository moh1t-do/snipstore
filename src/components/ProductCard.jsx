function ProductCard({ title, image }) {
    return (
        <div className="flex h-80 flex-col items-center justify-center border">
            <img src={image} width="150"></img>
            <div className="py-4">{title}</div>
            <button className="px-4 border border-solid py-1 rounded">Add to cart</button>
        </div>
    )
}

export default ProductCard
