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
    width: 100%;
    max-width: 1340px;
    padding: 20px 0;
    h1 {
        color: #ffffff99;
        font-size: 80px;
    }
    h3 {
        color: #525252;
    }
`;

export const AlbumsStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 420px);
    gap: 16px;
`;

export const TableStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 60px;
`;

