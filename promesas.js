const obtenerAlbumesPorId =  async (albumId) =>{
    const url = "https://jsonplaceholder.typicode.com/photos";
    try{
        const response = await fetch(url)
        const albumes = await response.json() //todos los albumes, son 5000
        // console.log(albumes)
        const AlbumesSegunAlbumId = albumes.filter(a => a.albumId == albumId) //todos los albumes del AlbumId solicitado
        // console.log(veinteAlbumesSegunAlbumId)
        const veinteAlbumesSegunAlbumId = AlbumesSegunAlbumId.slice(0,20); //el slice es de la forma [a,b)
        console.log(veinteAlbumesSegunAlbumId)
    }
    catch(e){
        console.log(e)
    }
}


const mensajeInformacion = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{resolve("Información Enviada")},3000)
    })
}

//segun lo conversado en clases con Brian entregaremos el mensaje a través de una IIFE
(async () => {
    obtenerAlbumesPorId(2)
    const mensajeDePromesaResuelta = await mensajeInformacion()
    console.log(mensajeDePromesaResuelta)
})()