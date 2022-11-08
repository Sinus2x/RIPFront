import styled from "styled-components";

export const MainPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1340px;
    padding: 20px 0;
    h1 {
        color: #bf283c;
        font-size: 80px;
    }
    h2 {
        color: #525252;
    }
`;

export const AlbumsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100%);
    gap: 16px;
    text-align: center;
`;

export const TableStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 60px;
`;

