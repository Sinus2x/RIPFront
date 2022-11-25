export const getAlbums = async () =>{
    const res = await fetch(`http://127.0.0.1:8000/albums`)
        .then((response) => {
            return response.json();
        }).catch(()=>{
            return {resultCount:0, results:[]}
        })
    return res
}

export const getAlbum = async (id) =>{
    const res = await fetch(`http://127.0.0.1:8000/albums/${id}`)
        .then((response) => {
            return response.json();
        }).catch(()=>{
            return []
        })
    return res
}