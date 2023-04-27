import { useSelector } from 'react-redux'
import Wrapper from '../components/Wrapper'
import CartCard from '../components/CartCard'
function Cart() {
    const cartData = useSelector((state) => state.snip.productData)
    const totalQuantity = useSelector((state) => state.snip.netQuantity)

    let sz = cartData.length

    let netPrice = 0
    cartData.map((item) => {
        netPrice += item.quantity * item.price
    })
    netPrice.toPrecision(5)
    return (
        <Wrapper className="flex flex-col gap-4">
            {sz === 0 ? (
                <div>Cart Empty</div>
            ) : (
                <CartCard
                    title={'Product'}
                    quantity={'Qunatity'}
                    netPrice={'Net Price'}
                />
            )}

            {cartData.map((item) => (
                <CartCard
                    key={item._id}
                    title={item.title}
                    quantity={item.quantity}
                    netPrice={item.quantity * item.price}
                />
            ))}
            {sz != 0 ? (
                <CartCard
                    title={''}
                    quantity={totalQuantity}
                    netPrice={netPrice}
                />
            ) : (
                ''
            )}
        </Wrapper>
    )
}

export default Cart
