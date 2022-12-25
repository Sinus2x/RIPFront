import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrder, getOrderGet_orders, postOrderIdChange_status } from "generated/services";
import { StatusEnum } from "generated/types";

export const getOrdersAction = createAsyncThunk("order/getOrders", async (queryParams?: string) => {
    return await getOrderGet_orders(queryParams ?? "");
});

export const getAllOrdersAction = createAsyncThunk("order/getAllOrders", async (queryParams?: string) => {
    return await getOrder(queryParams ?? "");
});

export const changeOrderStatusAction = createAsyncThunk(
    "order/changeOrderStatus",
    async ({ id, status }: { id: number; status: StatusEnum }) => {
        return await postOrderIdChange_status(id, { status });
    }
);
