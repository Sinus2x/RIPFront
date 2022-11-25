import React, {useEffect, useState} from "react";
import { useParams } from "react-router";

import {getAlbum} from "../api/api";
import {useDispatch, useSelector} from "react-redux";
import {actionCashAlbum} from "../store/store";

export function AlbumPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const album = useSelector(state => state.currentAlbum)

    useEffect(()=>{
        getAlbum(Number(params.id)).then(
            (data) => {dispatch(actionCashAlbum(data))}
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