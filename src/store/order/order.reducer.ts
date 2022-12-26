import { ActionCreatorWithoutPayload, createSlice } from "@reduxjs/toolkit";
import { getOrdersAction, changeOrderStatusAction, getAllOrdersAction } from "./order.actions";
import { Order } from "generated/types";
import { AsyncState, FetchStatus } from "types/asyncState";

export interface OrderState extends AsyncState {
    orders?: Order[];
    order?: Order;
    changeStatus?: FetchStatus;
}

const initialState: OrderState = {
    orders: undefined,
    order: undefined,
    error: undefined,
    status: FetchStatus.IDLE,
    changeStatus: FetchStatus.IDLE,
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getOrdersAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(getOrdersAction.fulfilled, (state, { payload }) => {
            state.orders = payload;
        });
        builder.addCase(getOrdersAction.rejected, (state, { error }) => {
            state.error = error;
        });

        builder.addCase(getAllOrdersAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(getAllOrdersAction.fulfilled, (state, { payload }) => {
            state.orders = payload;
        });
        builder.addCase(getAllOrdersAction.rejected, (state, { error }) => {
            state.error = error;
        });

        builder.addCase(changeOrderStatusAction.pending, (state) => {
            state.error = null;
            state.changeStatus = FetchStatus.PENDING;
        });
        builder.addCase(changeOrderStatusAction.fulfilled, (state, { payload }) => {
            state.order = payload;
            state.changeStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(changeOrderStatusAction.rejected, (state, { error }) => {
            state.error = error;
            state.changeStatus = FetchStatus.REJECTED;
        });
    },
});

// Action creators are generated for each case reducer function

export const resetOrderState = orderSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const orderReducer = orderSlice.reducer;
