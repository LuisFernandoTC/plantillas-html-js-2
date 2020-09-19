function elementos(option) {
    var elements=document.getElementsByTagName('li');
    var libro=["Meg", "Agua para elefantes","Oscura","Plenitud","Testamento Maya"],
        peliculas=["Gladiador", "Titanic","X-Men", "Avengers", "Rey León"],
        musicas=["Pablo Alborán","Laura Pausini", "Robbie Williams","Katy Perry","Coldplay"];
    switch (option) {
        case 'libro':
            for (let i = 0; i < libro.length; i++) {
                elements[i].innerHTML= libro[i];  
            }
            break;
        case 'pelicula':
            for (let i = 0; i < peliculas.length; i++) {
                elements[i].innerHTML= peliculas[i];  
            }
            break;
        case 'musica':
            for (let i = 0; i < musicas.length; i++) {
                elements[i].innerHTML= musicas[i];  
            }
            break;
    }
}

function elementos2(option1) {
    var elements=document.getElementsByTagName('img');
    var libro=["imagen/libros/libro1.jpg", "imagen/libros/libro2.jpg","imagen/libros/libro3.jpg","imagen/libros/libro4.jpg"],
        peliculas=["imagen/peliculas/peliculas1.jpg", "imagen/peliculas/peliculas2.jpg","imagen/peliculas/peliculas3.jpg","imagen/peliculas/peliculas4.jpg"],
        musicas=["imagen/musica/musica1.jpg", "imagen/musica/musica2.jpg","imagen/musica/musica3.jpg","imagen/musica/musica4.jpg"];
    switch (option1) {
        case 'libro':
            for (let i = 0; i < libro.length; i++) {
                elements[i].src= libro[i];
                elements[i].style.width='250px'; 
                elements[i].style.height='300px'; 
            }
            break;
        case 'pelicula':
            for (let i = 0; i < libro.length; i++) {
                elements[i].src= peliculas[i];
                elements[i].style.width='250px'; 
                elements[i].style.height='300px'; 
            }
            break;
        case 'musica':
            for (let i = 0; i < libro.length; i++) {
                elements[i].src= musicas[i];
                elements[i].style.width='250px'; 
                elements[i].style.height='300px'; 
            }
            break;
    }
}