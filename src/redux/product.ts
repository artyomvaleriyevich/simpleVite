import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../axios";



export const getProduct = createAsyncThunk<{  [key: string]: string | number; },number>(
    'product/getProduct',
    async (id,{rejectWithValue}) =>{
        try{
            const res = await  axios.get(`/product/${id}`)
            if (res.status !== 200){
                throw new Error('Server error!')
            }
            return res.data
        }catch (err) {
            if (err instanceof Error)
                return rejectWithValue(err.message);
        }
    }
)


type  ProductSliceType = {
    status: string,
    product: {
        category?: string,
        id?: number,
        imgOne?: string,
        imgThree?: string,
        imgTwo?: string,
        info?: string,
        price?: string,
        title?: string,
        titleCategory?: string
    },
}

const initialState: ProductSliceType = {
    status:'',
    product: {},
};

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) =>{
                state.status = 'loading...'
            })
            .addCase(getProduct.rejected,(state) => {
                state.status = 'error'
            })
            .addCase(getProduct.fulfilled,(state,action)=>{
                state.status = 'success'
                state.product = action.payload
            })
    }})




export const {} = productSlice.actions
export default productSlice.reducer






