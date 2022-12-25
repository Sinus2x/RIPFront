import { MainLayout } from "layouts/MainLayout";
import { NothingStyled, OrderPageStyled } from "./OrderPage.style";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { getAllOrdersAction, getOrdersAction } from "store/order/order.actions";
import { OrderCard } from "components/OrderCard";
import { FetchStatus } from "types/asyncState";
import { SortBlock } from "components/SortBlock";

export const OrderPage = () => {
    const dispatch = useAppDispatch();
    const { orders, changeStatus } = useAppSelector((store) => store.order);
    const { isAdmin, isStaff } = useAppSelector((store) => store.auth);

    useEffect(() => {
        if (isStaff || isAdmin) {
            dispatch(getAllOrdersAction());
        } else {
            dispatch(getOrdersAction());
        }
    }, [dispatch, isAdmin, isStaff]);

    useEffect(() => {
        if (changeStatus === FetchStatus.FULFILLED) {
            if (isStaff || isAdmin) {
                dispatch(getAllOrdersAction());
            } else {
                dispatch(getOrdersAction());
            }
        }
    }, [changeStatus, dispatch, isAdmin, isStaff]);

    return (
        <MainLayout>
            {orders?.length ? (
                <OrderPageStyled>
                    <SortBlock isStaff={isStaff || isAdmin} />

                    {orders.map((order, index) => (
                        <OrderCard key={`${index}_${order.id ?? ""}`} order={order} isStaff={isAdmin || isStaff} />
                    ))}
                </OrderPageStyled>
            ) : (
                <NothingStyled>Заказов нет</NothingStyled>
            )}
        </MainLayout>
    );
};
