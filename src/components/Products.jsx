import ProductCard from './ProductCard'
import Layout from './Wrapper'

function Product({ products }) {
    return (
        <Layout className="my-6">
            <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products.map((item) => (
                    <ProductCard
                        key={item._id}
                        _id={item._id}
                        price={item.price}
                        title={item.title}
                        quantity={item.quantity}
                        image={item.image}
                    />
                ))}
            </div>
        </Layout>
    )
}

export default Product
