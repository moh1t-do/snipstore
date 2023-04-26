import ProductCard from './ProductCard'
import Layout from './Wrapper'

function Product({ products }) {
    return (
        <Layout className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 items-center justify-center">
            {products.map((item) => (
                <ProductCard key={item.id} title={item.title} image={item.image}/>
            ))}
        </Layout>
    )
}

export default Product
