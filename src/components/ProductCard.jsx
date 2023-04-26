function ProductCard({ title, image }) {
    return <div className="w-80 h-80 flex items-center justify-center">
        <img src={image} width="200px"></img>
    </div>
}

export default ProductCard
