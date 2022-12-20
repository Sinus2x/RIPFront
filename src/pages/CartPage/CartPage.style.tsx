import { Button } from "components/Button";
import { COLORS } from "constants/colors";
import styled from "styled-components";

export const CartPageStyled = styled.div`
    display: flex;
    margin-top: 40px;
    min-height: 100vh;
    gap: 32px;
    padding-bottom: 60px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const NothingStyled = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.TextGrey};
    font-size: 40px;
`;

export const HrStyled = styled.hr`
    width: 100%;
    margin-top: 20px;
    border: none;
    border-bottom: 1px solid ${COLORS.TextColor};
`;

export const ResultStyled = styled.div`
    margin-top: 20px;
    width: fit-content;
    align-self: flex-end;
    font-size: 24px;
    font-weight: 400;
`;

export const ButtonStyled = styled(Button)`
    align-self: flex-end;
    margin-top: 20px;
`;

export const ProductsBlockStyled = styled.div`
    width: calc(100% - 400px);
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ResultBlockStyled = styled.div`
    width: 400px;
    border-left: 1px solid ${COLORS.TextColor};
    padding-left: 16px;
`;
