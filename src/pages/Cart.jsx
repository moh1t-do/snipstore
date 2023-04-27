import { useSelector } from 'react-redux'
import Wrapper from '../components/Wrapper'
import CartCard from '../components/CartCard'
function Cart() {
    const cartData = useSelector((state) => state.snip.productData)

    let sz = cartData.length

    let netPrice, netQuantity
    netPrice = netQuantity = 0
    cartData.map((item) => {
        netQuantity += item.quantity
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
                    quantity={'Quantity'}
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
                    quantity={netQuantity}
                    netPrice={netPrice}
                />
            ) : (
                ''
            )}
        </Wrapper>
    )
}

export default Cart
