import { createSlice } from "@reduxjs/toolkit";

const PaymentSlice = createSlice({
    name: "Payment",
    initialState:{
        Momo:{
                data:null,
                isFetching: false,
                error:false,
            },
        NotifyMomo:{
            data:null,
            isFetching: false,
            error:false,
        },
    },
    reducers:{
        MomoStart: (state) =>{
            state.Momo.isFetching = true;
        },
        MomoSuccess: (state,action) => {
            state.Momo.isFetching = false;
            state.Momo.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.Momo.error = false;
        },
        MomoFailed: (state) =>{
            state.Momo.isFetching = false;
            state.Momo.error = true;
        },
        NotifyMomoStart: (state) =>{
            state.Momo.isFetching = true;
        },
        NotifyMomoSuccess: (state,action) => {
            state.Momo.isFetching = false;
            state.Momo.data= action.payload;//nhan du lieu dc truyen vao apirequest
            state.Momo.error = false;
        },
        NotifyMomoFailed: (state) =>{
            state.Momo.isFetching = false;
            state.Momo.error = true;
        },
    }
});

export const {
    MomoStart,
    MomoFailed,
    MomoSuccess,
    NotifyMomoStart,
    NotifyMomoSuccess,
    NotifyMomoFailed
} = PaymentSlice.actions;

export default PaymentSlice.reducer;