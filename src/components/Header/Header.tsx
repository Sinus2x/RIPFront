import {
    ContainerStyled,
    HeaderStyled,
    CartStyled,
    LengthStyled,
    CartIconStyled,
    FaRecordVinylStyled,
} from "components/Header/Header.style";
import React, { useCallback } from "react";

import { HeaderProps } from "./Header.types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getPageTitle } from "utils";
import { Button } from "components/Button";
import { useAppSelector } from "store";

export const Header = (props: HeaderProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isAuth = useAppSelector((store) => store.auth.isAuth);
    const cartLength = useAppSelector((store) => store.cart.cart?.products.length);

    const handleButtonClick = useCallback(() => {
        navigate("/auth");
    }, [navigate]);

    const handleUserClick = useCallback(() => {
        navigate("/user");
    }, [navigate]);

    const handleCartClick = useCallback(() => {
        navigate("/cart");
    }, [navigate]);

    return (
        <HeaderStyled {...props}>
            <ContainerStyled>
                <Link to="/">
                    <FaRecordVinylStyled size={40} />
                </Link>
                <h2>{getPageTitle(location.pathname)}</h2>
                <div>
                    <Link to="/order">
                        <span className="material-symbols-outlined">order_approve</span>
                    </Link>
                    {isAuth ? (
                        <>
                            <CartStyled onClick={handleCartClick}>
                                {!!cartLength && <LengthStyled>{cartLength}</LengthStyled>}

                                <CartIconStyled className="material-symbols-outlined">shopping_cart</CartIconStyled>
                            </CartStyled>
                            <span className="material-symbols-outlined" onClick={handleUserClick}>
                                account_circle
                            </span>
                        </>
                    ) : (
                        <Button onClick={handleButtonClick} rounded>
                            Войти
                        </Button>
                    )}
                </div>
            </ContainerStyled>
        </HeaderStyled>
    );
};
