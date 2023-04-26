import { useEffect, useState } from 'react'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'

function Home() {
    const [products, setProducts] = useState([])
    const data = useLoaderData()
    useEffect(() => {
        setProducts(data.data)
    }, [data])
    console.log(products);
    return (
        <>
            <Products products={products} />
        </>
    )
}

export default Home
