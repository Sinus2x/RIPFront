import styled from "styled-components";
import { COLORS } from "constants/colors";

export const FiltersBlockStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    span {
        font-size: 30px;
        cursor: pointer;
    }
`;

export const FiltersTooltipStyled = styled.div`
    z-index: 10;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    height: fit-content;
    background-color: ${COLORS.BackgroundMainPale};
    border: 1px solid ${COLORS.BorderColor};
    border-radius: 2px;

    h4 {
        font-weight: 100;
        color: ${COLORS.TextColor};
        margin-bottom: 8px;
    }
`;

export const BlockStyled = styled.div`
    display: flex;
    gap: 8px;
`;
