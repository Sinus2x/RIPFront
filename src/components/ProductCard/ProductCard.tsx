import { Button } from "components/Button";
import {
    ProductCardStyled,
    MainInfoStyled,
    TextStyled,
    DeleteIconStyled,
    DeleteButtonStyled,
    HeadStyled,
} from "./ProductCard.style";
import React, { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { changeCartAction } from "store/cart/cart.actions";
import { deleteProductAction } from "store/products/products.actions";
import { FaRecordVinyl } from "@react-icons/all-files/fa/FaRecordVinyl";
import { TbHandRock } from "react-icons/tb";
import { GiGuitar } from "@react-icons/all-files/gi/GiGuitar";

import { Genre, ProductCardProps } from "./ProductCard.types";
import { IconBaseProps } from "@react-icons/all-files";
import { BsRecordCircle } from "react-icons/bs";
import { BsRecordCircleFill } from "react-icons/bs";

export const ProductCard = ({ product, inCart = false, ...props }: ProductCardProps) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((store) => store.cart.cart?.products);
    const canDelete = useAppSelector((store) => store.auth.isAdmin);

    const handleCartClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            dispatch(changeCartAction([...(products?.map((product) => product.id) ?? []), product.id]));
        },
        [product.id, dispatch, products]
    );

    const handleDeleteProductFromCart = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            dispatch(
                changeCartAction([
                    ...(products?.filter((value) => value.id !== product.id).map((product) => product.id) ?? []),
                ])
            );
        },
        [product.id, dispatch, products]
    );

    const isInCart = useMemo(() => products?.map((product) => product.id).includes(product.id), [product.id, products]);

    const handleDeleteProduct = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();

            dispatch(deleteProductAction(product.id));
        },
        [product.id, dispatch]
    );

    const RenderVinyl = useCallback(
        (props: IconBaseProps) => {
            switch (product.brand) {
                case Genre.HARD_ROCK:
                    return <TbHandRock {...props} />;
                case Genre.HEAVY_METAL:
                    return <GiGuitar {...props} />;
                case Genre.METAL:
                    return <TbHandRock {...props} />;
                case Genre.ROCK:
                    return <FaRecordVinyl {...props} />;
                case Genre.ROCK_N_ROLL:
                    return <BsRecordCircleFill {...props} />;
                default:
                    return <BsRecordCircle {...props} />;
            }
        },
        [product.brand]
    );

    return (
        <ProductCardStyled {...props}>
            <MainInfoStyled inCart={inCart}>
                <HeadStyled>
                    {RenderVinyl({ size: 100 })}
                    <h2>{product.name}</h2>
                </HeadStyled>
                <div>
                    <span>
                        {` - Жанр: `}
                        <span>
                            <strong>{product.brand}</strong>
                        </span>
                    </span>
                    <span>
                        {` - Группа: `}
                        <span>
                            <strong>{product.type}</strong>
                        </span>
                    </span>
                    <span>
                        {` - Популярность: `}
                        <span>
                            <strong>{product.strength}</strong>
                        </span>
                    </span>
                </div>
            </MainInfoStyled>
            <p>{product.price} ₽</p>

            {!inCart ? (
                <>
                    {!isInCart ? (
                        <Button onClick={handleCartClick} styleType="outlined" filled>
                            в корзину
                        </Button>
                    ) : (
                        <TextStyled>В корзине</TextStyled>
                    )}
                    {canDelete && (
                        <DeleteButtonStyled styleType="link" onClick={handleDeleteProduct}>
                            Удалить
                        </DeleteButtonStyled>
                    )}
                </>
            ) : (
                <DeleteIconStyled className="material-symbols-outlined" onClick={handleDeleteProductFromCart}>
                    delete
                </DeleteIconStyled>
            )}
        </ProductCardStyled>
    );
};
