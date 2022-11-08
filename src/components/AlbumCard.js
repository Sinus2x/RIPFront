import React from "react";
import {ImageStyled} from "./CardStyle";


export function AlbumCard({album, ...props}) {
    return <div {...props} >
        <h3>{album.title}</h3>
        <ImageStyled src={require(`/src/images/${album.img}`)} />
    </div>;
}