import styled from "styled-components";
import { FaMusic } from "@react-icons/all-files/fa/FaMusic";

export const AuthContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 600px;
    height: 500px;
    padding: 40px;
    background: transparent;

    span {
        font-size: 130px;
    }
`;

export const FaMusicStyled = styled(FaMusic)``;
