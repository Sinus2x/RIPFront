import { ALBUMS } from "../constants/albums";
import React, {useContext} from "react";
import { useParams } from "react-router";
import {AlbumListContext} from "../contexts/AlbumListContext";

export function AlbumPage() {
    const params = useParams();
    const albumContext = useContext(AlbumListContext);
    console.log(albumContext)
    return (
        <div>
            <h1>{albumContext.find((album) => album.pk === Number(params.pk))?.title}</h1>
            <h2>{albumContext.find((album) => album.pk === Number(params.pk))?.artist}</h2>
            <h3>{albumContext.find((album) => album.pk === Number(params.pk))?.n_songs} песен в альбоме</h3>
            <p>{albumContext.find((album) => album.pk === Number(params.pk))?.description}</p>
        </div>
    );
};