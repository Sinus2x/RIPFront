import { AlbumCard } from "../components/AlbumCard";
import { ALBUMS } from "../constants/albums";
import React, {useCallback, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router";
import {MainPageStyled, ContentStyled, TableStyled, AlbumsStyled} from "./HomePageStyle";
import {AlbumListContext} from '../contexts/AlbumListContext';

const getAlbums = async () =>{
    const res = await fetch(`http://127.0.0.1:8000/albums`)
        .then((response) => {
            return response.json();
        }).catch(()=>{
            return {resultCount:0, results:[]}
        })
    return res
}


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
        <AlbumListContext.Provider value={albumList}>
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
        </AlbumListContext.Provider>
    );
};