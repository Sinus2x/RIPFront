import { ProductCard } from "components/ProductCard";
import { MainLayout } from "layouts/MainLayout";
import {
    ButtonStyled,
    CartPageStyled,
    NothingStyled,
    ProductsBlockStyled,
    ResultBlockStyled,
    ResultStyled,
} from "./CartPage.style";
import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "store";
import { createOrderAction } from "store/cart/cart.actions";

export const CartPage = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((store) => store.cart.cart?.products);

    const navigate = useNavigate();

    const handleCardClick = useCallback(
        (id: number) => {
            navigate(`/products/${id}`);
        },
        [navigate]
    );

    const totalSum = useMemo(() => cart?.reduce((prev, current) => prev + Number(current?.price), 0), [cart]);

    const handleCreateOrder = useCallback(() => {
        dispatch(createOrderAction());
    }, [dispatch]);

    return (
        <MainLayout>
            {cart?.length ? (
                <CartPageStyled>
                    <ProductsBlockStyled>
                        {cart.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={() => handleCardClick(product?.id ?? 0)}
                                inCart
                            />
                        ))}
                    </ProductsBlockStyled>
                    <ResultBlockStyled>
                        <ResultStyled>ИТОГО: {totalSum} ₽</ResultStyled>
                        <ButtonStyled onClick={handleCreateOrder}>Оформить заказ</ButtonStyled>
                    </ResultBlockStyled>
                </CartPageStyled>
            ) : (
                <NothingStyled>Корзина пуста</NothingStyled>
            )}
        </MainLayout>
    );
};
