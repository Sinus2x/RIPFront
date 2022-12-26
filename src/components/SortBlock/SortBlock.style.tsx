import styled from "styled-components";
import { COLORS } from "constants/colors";

export const SortBlockStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 24px;

    span {
        font-size: 30px;
        cursor: pointer;
    }

    .sort-block {
        display: flex;
        align-items: center;

        cursor: pointer;
    }
`;

export const SortTooltipStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    height: fit-content;
    background-color: ${COLORS.BackgroundMainPale};
    backdrop-filter: blur(8px);
    transform: translate3d(0, 0, 0);
    border-radius: 8px;

    h3 {
        font-weight: 100;
        color: ${COLORS.TextColor};
        margin-bottom: 8px;
    }

    h4 {
        font-weight: 100;
        color: ${COLORS.TextColor};
        margin-bottom: 8px;
    }

    .options {
        display: flex;

        gap: 16px;
    }
`;

export const StyledBackDrop = styled.div<{ isShow: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    display: ${({ isShow }) => (isShow ? "flex" : "none")};
`;
