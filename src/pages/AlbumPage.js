import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import {AlbumListContext} from "../contexts/AlbumListContext";

import {getAlbum} from "../api/api";

export function AlbumPage() {
    const params = useParams();
    const [album, setAlbum] = useState();

    useEffect(()=>{
        getAlbum(Number(params.id)).then(
            (data) => {setAlbum(data)}
        )},[]
    )
    return (
        <div>
            <h1>{album?.name}</h1>
            <h2>{album?.artist}</h2>
            <h3>{album?.n_songs} песен в альбоме</h3>
            <p>{album?.description}</p>
        </div>
    );
};