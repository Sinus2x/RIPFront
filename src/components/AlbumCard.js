import React from "react";
import {ImageStyled} from "./CardStyle";


export function AlbumCard({album, ...props}) {
    return <div {...props} >
        <h1>{album.title}</h1>
        <ImageStyled src={require(`/src/images/${album.img}`)} />
    </div>;
}