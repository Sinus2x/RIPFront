import { AlbumCard } from "../components/AlbumCard";
import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import {MainPageStyled, ContentStyled, TableStyled, AlbumsStyled} from "./HomePageStyle";
import {AlbumListContext} from '../contexts/AlbumListContext';

import {getAlbums} from "../api/api";

export function HomePage() {
    const [albumList, setAlbumList] = useState([]);
    const navigate = useNavigate();
    const handleCardClick = useCallback(
        (id) => {
            navigate(`/albums/${id}`);
        },
        [navigate]
    );

    useEffect(()=>{
        getAlbums().then((data)=>{setAlbumList((data))});
    },[])

    return (
            <MainPageStyled>
                <ContentStyled>
                    <h1>Apple music albums</h1>
                    <h2>Выберите пластинку</h2>
                        <AlbumsStyled>
                            {albumList?.map((album, index) => (
                                <AlbumCard key={index} album={album} onClick={() => handleCardClick(album.pk)} />
                            ))}
                        </AlbumsStyled>
                </ContentStyled>
            </MainPageStyled>
    );
};