import { COLORS } from "constants/colors";
import styled, { css } from "styled-components";

export const StyledOrderCard = styled.div<{ disabled: boolean }>`
    width: 100%;
    border: 1px solid ${COLORS.BorderColor};
    padding: 16px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${({ disabled }) =>
        disabled &&
        css`
            border-color: ${COLORS.TextGrey};

            &,
            * {
                color: ${COLORS.TextGrey};
            }
        `}

    .see-all {
        width: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;
        margin-top: 4px;

        span {
            font-weight: 100;
        }
    }

    .expanded {
        width: 100%;
        margin-top: 16px;
        display: flex;
        flex-direction: column;

        span {
            cursor: pointer;
        }
    }
`;

export const StyledMainInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
        color: ${COLORS.TextGrey};
        font-weight: 100;
    }
`;

export const StyledButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const StyledProducts = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;

    & > * {
        width: calc(100% / 6 - 12px);
    }
`;
