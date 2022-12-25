import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { productReducer } from "./products/products.reducer";
import { orderReducer } from "store/order";
import { authReducer } from "store/auth";
import { cartReducer } from "store/cart";

export const makeStore = () =>
    configureStore({
        reducer: {
            product: productReducer,
            auth: authReducer,
            cart: cartReducer,
            order: orderReducer,
        },
    });

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
