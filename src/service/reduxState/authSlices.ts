import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        login:{
            data:null,
            isFetching: false,
            error:false,
        },
        register:{
            isFetching: false,
            error:false,
            success:false
        },
        getAllInfoUser:{
            data:null,
            isFetching: false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        loginStart: (state) =>{
            state.login.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.login.isFetching = false;
            state.login.data = action.payload;//nhan du lieu dc truyen vao apirequest
            state.login.error = false;
            state.msg = "";
        },
        loginFailed: (state) =>{
            state.login.isFetching = false;
            state.login.error = true;
        },
        registerStart: (state) =>{
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: (state) =>{
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },
        logOutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.data = null;
            state.login.error = false;
        },
        logOutFailed: (state) =>{
            state.login.isFetching = false;
            state.login.error = true;
        },
        logOutStart: (state) =>{
            state.login.isFetching = true;
        },
        getAllInfoUserStart: (state) =>{
            state.getAllInfoUser.isFetching = true;
        },
        getAllInfoUserSuccess: (state,action) => {
            state.getAllInfoUser.isFetching = false;
            state.getAllInfoUser.data = action.payload;
            state.getAllInfoUser.error = false;
        },
        getAllInfoUserFailed: (state,action) =>{
            state.getAllInfoUser.isFetching = false;
            state.getAllInfoUser.error = true;
            state.msg = action.payload;
        }
    }
});

export const {
    loginStart,
    loginFailed,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailed,
    logOutStart,
    logOutSuccess,
    logOutFailed,
    getAllInfoUserStart,
    getAllInfoUserSuccess,
    getAllInfoUserFailed,
} = authSlice.actions;

export default authSlice.reducer;