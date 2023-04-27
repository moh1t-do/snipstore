import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/snipSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ProductCard({ _id, title, image, price, quantity, decription }) {
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex h-80 flex-col items-center justify-center border">
                <img src={image} width="150"></img>
                <div className="py-4">{title}</div>
                <button
                    className="rounded border border-solid px-4 py-1"
                    onClick={() => {
                        dispatch(
                            addToCart({
                                _id: _id,
                                title: title,
                                image: image,
                                price: price,
                                quantity: 1,
                                decription: decription,
                            })
                        ) &&
                            toast.success(`${title} added to cart`, {
                                position: 'bottom-left',
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: 'dark',
                            })
                    }}
                >
                    Add to cart
                </button>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    )
}

export default ProductCard
