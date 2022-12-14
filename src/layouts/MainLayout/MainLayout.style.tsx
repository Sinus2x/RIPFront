import { COLORS } from "constants/colors";
import { MAX_WIDTH } from "constants/common";
import styled from "styled-components";

export const MainLayoutStyled = styled.div<{ bgColor: COLORS }>`
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: fit-content;
    min-height: 100vh;
    background-color: ${({ bgColor }) => bgColor};
`;

export const ContainerStyled = styled.div`
    width: 100%;
    max-width: ${MAX_WIDTH}px;
    padding: 0 20px;
    align-self: center;
    height: inherit;
    overflow-y: visible;
`;

export const FooterStyled = styled.div`
    width: 100%;
    border-top: 1px solid ${COLORS.BorderColor};
    margin: 60px 0;
    padding: 8px 0;
    font-weight: 100;
    font-size: 16px;
`;
