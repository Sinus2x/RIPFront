import { Button } from "components/Button";
import { COLORS } from "constants/colors";
import styled, { css } from "styled-components";

export const ProductCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${COLORS.BorderColor};
    cursor: pointer;
    width: 100%;
    height: fit-content;
    color: ${COLORS.TextGrey};
    padding: 16px;
    transition: all 0.2s;

    h2 {
        font-family: "Unbounded", cursive !important;
        padding: 0;
        font-size: 20px !important;
        margin-bottom: 12px;
    }

    p {
        font-size: 30px;
        margin-left: auto;
    }

    &:hover {
        border: 1px solid ${COLORS.TextColor2};
        transform: scale(1.01, 1.01);
    }

    button {
        margin: 8px 0;
    }
`;

export const MainInfoStyled = styled.div<{ inCart: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;

    span {
        font-weight: 400;
        width: 100%;
        color: ${COLORS.TextGrey};
        text-align: start;
        display: flex;

        span {
            width: fit-content;
            justify-self: flex-end;
            text-align: end;
            margin-left: auto;
        }
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 12px;
    }

    p {
        white-space: nowrap;
    }

    ${({ inCart }) =>
        inCart &&
        css`
            flex-direction: row;
            justify-content: space-between;

            p {
                margin-left: 12px;
            }

            span {
                width: fit-content;
                text-align: start;

                span {
                    margin-left: 22px;
                }
            }
        `}
`;

export const HeadStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center !important;
    width: fit-content !important;
`;

export const TextStyled = styled.div`
    white-space: nowrap;
    color: ${COLORS.TextGrey};
    font-weight: 400;
`;

export const DeleteIconStyled = styled.span`
    color: ${COLORS.TextGrey};
    transition: all 200ms;
    margin-left: auto;
    margin-top: 16px;

    &:hover {
        color: ${COLORS.ErrorRed};
    }
`;

export const DeleteButtonStyled = styled(Button)`
    color: ${COLORS.ErrorRed};

    &:hover {
        color: ${COLORS.ErrorRed};
        background-color: transparent;
    }
`;
