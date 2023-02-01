import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "../axios";

export const getAllProduct = createAsyncThunk(
    'allProduct/getAllProduct',
    async (_,{rejectWithValue}) =>{
        try{
            const res = await  axios.get(`/product`)
            if (res.status !== 200){
                throw new Error('Server error!')
            }
            return res
        }catch (err) {
            if (err instanceof Error)
                return rejectWithValue(err.message);
        }
    }
)

type  AllProductSliceType = {
    status: string,
    product: [],
}

const initialState: AllProductSliceType = {
    status:'',
    product: []
};

const allProductSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, (state) =>{
            state.status = 'loading...'
            })
            .addCase(getAllProduct.rejected,(state) => {
            state.status = 'error'
    })
            .addCase(getAllProduct.fulfilled,(state,action)=>{
                state.status = 'ready'
                state.product = action.payload.data
    })

}})




export const {} = allProductSlice.actions
export default allProductSlice.reducer






