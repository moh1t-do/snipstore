import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    netQuantity: 0,
    useInfo: null,
}

export const snipSlice = createSlice({
    name: 'snip',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            state.netQuantity++

            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload._id
            )

            if (state.netQuantity === 0) {
                state.netQuantity = 0
            } else {
                state.netQuantity--
            }
        },
    },
})

export const { addToCart, removeFromCart } = snipSlice.actions
export default snipSlice.reducer
