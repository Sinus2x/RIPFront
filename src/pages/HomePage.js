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
                <h3>Выберите пластинку</h3>
                <TableStyled>
                    <AlbumsStyled>
                        {ALBUMS.map((album) => (
                            <AlbumCard key={album.id} album={album} onClick={() => handleCardClick(album.id)} />
                        ))}
                    </AlbumsStyled>
                </TableStyled>
            </ContentStyled>
        </MainPageStyled>
    );
};