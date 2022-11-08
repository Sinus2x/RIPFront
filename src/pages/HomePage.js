import { AlbumCard } from "../components/AlbumCard";
import { ALBUMS } from "../constants/albums";
import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import {MainPageStyled, ContentStyled, TableStyled, AlbumsStyled} from "./HomePageStyle";

export function HomePage() {
    const navigate = useNavigate();
    const handleCardClick = useCallback(
        (id) => {
            navigate(`/albums/${id}`);
        },
        [navigate]
    );
    return (
        <MainPageStyled>
            <ContentStyled>
                <h1>Apple music albums</h1>
                <h2>Выберите пластинку</h2>
                    <AlbumsStyled>
                        {ALBUMS.map((album) => (
                            <AlbumCard key={album.id} album={album} onClick={() => handleCardClick(album.id)} />
                        ))}
                    </AlbumsStyled>
            </ContentStyled>
        </MainPageStyled>
    );
};