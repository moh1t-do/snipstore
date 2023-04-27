import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/snipSlice'
import { CiCircleRemove } from 'react-icons/ci'
import { ToastContainer, toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'

function ProductCard({ _id, title, image, price, description }) {
    const dispatch = useDispatch()
    console.log(description)
    return (
        <>
            <div className="flex h-96 flex-col items-center justify-center border">
                <img src={image} width="150"></img>
                <div className="py-2">
                    <ul>
                        <li>
                            <h1 className="font-bold">{title}</h1>
                        </li>
                        <li>PRICE : {price}</li>
                    </ul>
                </div>
                <div className="flex gap-4">
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
                                    description: description,
                                })
                            ) &&
                                toast.success(`${title} added to cart`, {
                                    position: 'bottom-left',
                                    autoClose: 1000,
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
                    <button
                        onClick={() => {
                            dispatch(
                                removeFromCart({
                                    _id: _id,
                                    quantity: 1,
                                })
                            )
                            // if (true) {
                            //     toast.warn(`${title} removed from cart`, {
                            //         position: 'bottom-left',
                            //         autoClose: 1000,
                            //         hideProgressBar: false,
                            //         closeOnClick: true,
                            //         pauseOnHover: true,
                            //         draggable: true,
                            //         progress: undefined,
                            //         theme: 'light',
                            //     })
                            // }
                        }}
                    >
                        <CiCircleRemove size="30px" className="text-red-500" />
                    </button>
                </div>
                <ToastContainer
                    position="bottom-left"
                    autoClose={500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </>
    )
}

export default ProductCard
