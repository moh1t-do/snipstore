import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
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

            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            if (item) {
                if (item.quantity != 1) item.quantity -= action.payload.quantity
                else {
                    state.productData = state.productData.filter((item) => {
                        return item._id != action.payload._id
                    })
                }
            }
        },
    },
})

export const { addToCart, removeFromCart } = snipSlice.actions
export default snipSlice.reducer
