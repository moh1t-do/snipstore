import { configureStore } from '@reduxjs/toolkit'
import snipSlice from './snipSlice'

// creating a store
export const store = configureStore({
    reducer: {
        snip: snipSlice,
    },
})
