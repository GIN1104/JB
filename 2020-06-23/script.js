
let albums = [],
    url = "https://jsonplaceholder.typicode.com/albums",
    selectedAlbum = [];

let getAlbums = () => {
    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: url,
        async: false,
        success: function (data) {   
            albums = data;
            addRateToAlbum();
        },
        error: function (error) {
            console.log("error : ", error);
        }
    });
}

getAlbums();

let addRateToAlbum = (albums) => {
albums.map( album =>{
    album.rate = Math.floor(Math.random() * 100) + 1;
    if(album.rate > 80){
        selectedAlbum.push(album);
    }
       
    
    })
}
// albums.range = Math.floor(Math.random() * 100) + 1;
 //console.log("Albums : ", albums);
