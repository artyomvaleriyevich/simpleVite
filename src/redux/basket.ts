import {createSlice} from "@reduxjs/toolkit";

type BasketType = {
    order: any[],
    status: boolean,
}

const initialState: BasketType = {
    order: [],
    status: false,
};

const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        addProduct: (state,action) => {
            state.order = [...state.order, action.payload]
        },
        removeProduct:(state,action) => {
            state.order = state.order.filter(item => item.id !== action.payload)
        },
        removeAllProduct: (state) =>{
            state.order = []
        },
        openPopupBasket: (state) => {
            state.status = true
        },
        closePopupBasket: (state) => {
            state.status = false
        }
    }
})




export const {addProduct,removeAllProduct,removeProduct,openPopupBasket, closePopupBasket} = basketSlice.actions
export default basketSlice.reducer






