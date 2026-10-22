function  converterParaSegundos(minutos, segundos){
    let total = (minutos*60) + segundos
    return total
}

function calcularTempoPlaylist(playlist){
    let tempototal = 0 
    playlist.forEach(musica => {
        tempototal += converterParaSegundos(musica.minutos, musica.segundos)
        
    });
    return tempototal
}

// mais ou menos tbm