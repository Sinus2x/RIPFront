import { ALBUMS } from "../constants/albums";
import React from "react";
import { useParams } from "react-router";


export function AlbumPage() {
    const params = useParams();

    return (
        <div>
            <h1>{ALBUMS.find((album) => album.id === Number(params.id))?.title}</h1>
            <h2>{ALBUMS.find((album) => album.id === Number(params.id))?.artist}</h2>
            <h3>{ALBUMS.find((album) => album.id === Number(params.id))?.n_songs} песен в альбоме</h3>
            <p>{ALBUMS.find((album) => album.id === Number(params.id))?.description}</p>
        </div>
    );
};