import { AlbumCard } from "../components/AlbumCard";
import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import {MainPageStyled, ContentStyled, AlbumsStyled} from "./HomePageStyle";

// redux
import {getAlbums} from "../api/api";
import {useDispatch, useSelector} from "react-redux";
import {actionCashAlbumList} from "../store/actions";

export function HomePage() {
    const navigate = useNavigate();
    const handleCardClick = useCallback(
        (id) => {
            navigate(`/albums/${id}`);
        },
        [navigate]
    );

    const dispatch = useDispatch();
    const albumList = useSelector(state => state.albumList)

    useEffect(()=>{
        getAlbums().then((data) => {dispatch(actionCashAlbumList(data))});
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