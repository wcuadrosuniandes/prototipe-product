const defaultData = [
    {
        'id': 1,
        'titulo': 'Volver al futuro II',
        'descripcion': 'Película de ciencia ficción y aventura de 1985 que sigue a Marty McFly, un adolescente que accidentalmente viaja al pasado en un DeLorean modificado por el excéntrico Dr. Emmett Brown. Enfrentándose a situaciones inesperadas, debe asegurarse de que sus padres se enamoren para no desaparecer del futuro. Con la ayuda del Doc, busca regresar a su época antes de que sea demasiado tarde.',
        'reparto': 'Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, Thomas F. Wilson, Claudia Wells',
        'grilla': './assets/images/grilla/volveralfuturo.jpg',
        'banner': '../images/banner/backgroundFuture.jpg',
        'tipo': 'Película',
        'genero': 'Ciencia ficción',
        'fecha': '1985',
        'class': 'baner-backgroundv',
        'video': './assets/video/video.mp4',
        'foundProducts': 5,
        'videoEnd': 246,
        'products': [
            {
                'id': 1,
                'name': 'Gorra futurista',
                'message': 'Lleva la gorra de la película, ¡es unica!',
                'price': 100,
                'start': 2,
                'end': 16,
                'found': false,
                'image': './assets/images/productos/gorra.jpg'

            },
            {
                'id': 2,
                'name': 'Super tabla',
                'message': 'La replica de la super tabla de la película, ¿la llevarías?',
                'price': 2,
                'start': 54,
                'end': 73,
                'found': false,
                'image': './assets/images/productos/tabla.jpg'
            },
            {
                'id': 3,
                'name': 'Bate inspirado en la pelicula',
                'message': '¿Te gustaría tener el bate de la película?',
                'price': 300,
                'start': 109,
                'end': 127,
                'found': false,
                'image': './assets/images/productos/bate.jpg'
            },
            {
                'id': 4,
                'name': 'Zapatos de Martin McFly',
                'message': '¿Te gustaría tener los zapatos de Martin McFly?',
                'price': 400,
                'start': 134,
                'end': 142,
                'found': false,
                'image': './assets/images/productos/zapatos.jpg'
            },
            {
                'id': 5,
                'name': 'Chaqueta futurista',
                'message': 'Te gusta la chaqueta que lleva Martín McFly en la pelicula?, ¡llevatela!',
                'price': 400,
                'start': 225,
                'end': 243,
                'found': false,
                'image': './assets/images/productos/chaqueta.jpg'
            }
        ]
    },
    {
        'id': 2,
        'titulo': 'Sonic la película',
        'descripcion': 'Sonic: La Película es una aventura de acción y comedia de 2020 basada en el famoso personaje de videojuegos de Sega. La historia sigue a Sonic, un erizo azul con supervelocidad, quien debe escapar del malvado Dr. Robotnik, que quiere capturarlo para aprovechar su poder. Con la ayuda de su amigo humano, Tom Wachowski, Sonic emprende una carrera contra el tiempo para salvar el mundo',
        'reparto': 'Ben Schwartz, James Marsden, Jim Carrey, Tika Sumpter, Lee Majdoub, Adam Pally',
        'grilla': './assets/images/grilla/sonic.jpg',
        'banner': '../images/banner/poster1.jpg',
        'tipo': 'Película',
        'genero': 'Acción, Comedia',
        'fecha': '2020',
        'class': 'baner-backgrounds',
        'video': './assets/video/sonic.mp4',
        'videoEnd': 240,
        'foundProducts': 4,
        'products': [
            {
                'id': 1,
                'name': 'Zapatos de Sonic',
                'message': '¿Te gustaría tener los zapatos de Sonic?',
                'price': 100,
                'start': 6,
                'end': 20,
                'found': false,
                'image': './assets/images/productos/zapatosSonic.jpg'

            },
            {
                'id': 2,
                'name': 'Pijama de Sonic la película',
                'message': 'Lo que ves es lo que obtienes con este pijama de Sonic la película',
                'price': 2,
                'start': 90,
                'end': 140,
                'found': false,
                'image': './assets/images/productos/pijmaSonic.jpg'
            },
            {
                'id': 3,
                'name': 'Reloj de Sonic la película',
                'message': 'Controla el tiempo al igual que Sonic con este reloj',
                'price': 300,
                'start': 120,
                'end': 150,
                'found': false,
                'image': './assets/images/productos/reloj.jpg'
            },
            {
                'id': 4,
                'name': 'Anillo teletransportador Longclaw',
                'message': 'Accede a lugares secretos con este anillo teletransportador',
                'price': 400,
                'start': 175,
                'end': 195,
                'found': false,
                'image': './assets/images/productos/anillos.webp'
            }
        ]
    },
    {
        'id': 3,
        'titulo': 'Cobra Kai',
        'descripcion': 'Cobra Kai es una serie de televisión de acción y drama que continúa la historia de la película de 1984 Karate Kid. La trama sigue a Johnny Lawrence, un exestudiante de karate que reabre el dojo Cobra Kai para redimirse y enfrentarse a su rival de la infancia, Daniel LaRusso. La rivalidad entre ambos renace, desencadenando una serie de eventos que desafían sus creencias y los preparan para un enfrentamiento épico.',
        'reparto': 'Ralph Macchio, William Zabka, Courtney Henggeler, Xolo Maridueña, Tanner Buchanan, Mary Mouser',
        'grilla': './assets/images/grilla/cobrakai.jpg',
        'banner': '../images/banner/poster2.jpg',
        'tipo': 'Serie',
        'genero': 'Acción, Drama',
        'fecha': '2018',
        'class': 'baner-backgroundc',
        'video': './assets/video/cobra.mp4',
        'videoEnd': 141,
        'foundProducts': 3,
        'products': [
            {
                'id': 1,
                'name': 'Sudadera con capucha Miyagi-Do',
                'message': 'Esta sudadera con capucha ofrece comodidad y un estilo inspirado en las artes marciales.',
                'price': 100,
                'start': 18,
                'end': 40,
                'found': false,
                'image': './assets/images/productos/miyagi.jpg'

            },
            {
                'id': 2,
                'name': 'Camiseta Cobra Kai',
                'message': 'Enciende tu pasión por Cobra Kai con nuestra camiseta Fire Comfort Colors, diseñada para los fanáticos del exitoso programa.',
                'price': 2,
                'start': 90,
                'end': 111,
                'found': false,
                'image': './assets/images/productos/cobraKai.jpg'
            },
            {
                'id': 3,
                'name': 'Camiseta grulla Miyagi-Do de Cobra Kai',
                'message': '¡Adopta las enseñanzas de Miyagi-Do y demuestra tu lealtad con cada uso!',
                'price': 300,
                'start': 122,
                'end': 140,
                'found': false,
                'image': './assets/images/productos/patada.jpg'
            }
        ]
    },
    {
        'id': 4,
        'titulo': 'Gladiador',
        'descripcion': 'Película épica de acción y drama estrenada en el año 2000. La historia sigue a Máximo Décimo Meridio, un general romano traicionado por el emperador Cómodo, quien asesina a su familia y lo condena a la esclavitud. Convertido en gladiador, Máximo lucha en la arena para vengar la muerte de sus seres queridos y restaurar la justicia en Roma.',
        'reparto': 'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed, Richard Harris, Derek Jacobi',
        'grilla': './assets/images/grilla/gladiador.jpg',
        'banner': '../images/banner/poster4.jpg',
        'tipo': 'Película',
        'genero': 'Acción, drama, épico',
        'fecha': '2000',
        'class': 'baner-backgroundg',
        'video': './assets/video/gladiador.mp4',
        'videoEnd': 255,
        'foundProducts': 3,
        'products': [
            {
                'id': 1,
                'name': 'Espada épica conmemorativa de Gladiador',
                'message': 'Una poderosa espada de gladiador, símbolo de fuerza y honor en la arena',
                'price': 100,
                'start': 65,
                'end': 90,
                'found': false,
                'image': './assets/images/productos/espada.png'

            },
            {
                'id': 2,
                'name': 'Camiseta de gladiador',
                'message': 'Diseño épico inspirado en los guerreros romanos, ideal para verdaderos combatientes.',
                'price': 2,
                'start': 180,
                'end': 210,
                'found': false,
                'image': './assets/images/productos/camiseta.png'
            },
            {
                'id': 3,
                'name': 'Experiencia coliseo',
                'message': 'Descubre la grandeza de la Antigua Roma con un viaje inolvidable al Coliseo y disfruta con los actores de la película',
                'price': 300,
                'start': 225,
                'end': 252,
                'found': false,
                'image': './assets/images/productos/coliseo.png'
            }
        ]
    }
]

const products = [
    {
        'id': 1,
        'name': 'Gorra futurista',
        'message': 'Lleva la gorra de la película, ¡es unica!',
        'price': 100,
        'start': 2,
        'end': 16,
        'found': false,
        'image': './assets/images/productos/gorra.webp'

    },
    {
        'id': 2,
        'name': 'Super tabla',
        'message': 'La replica de la super tabla de la película, ¿la llevarías?',
        'price': 2,
        'start': 54,
        'end': 73,
        'found': false,
        'image': './assets/images/productos/tabla.jpg'
    },
    {
        'id': 3,
        'name': 'Bate inspirado en la pelicula',
        'message': '¿Te gustaría tener el bate de la película?',
        'price': 300,
        'start': 109,
        'end': 127,
        'found': false,
        'image': './assets/images/productos/bate.webp'
    },
    {
        'id': 4,
        'name': 'Zapatos de Martin McFly',
        'message': '¿Te gustaría tener los zapatos de Martin McFly?',
        'price': 400,
        'start': 134,
        'end': 142,
        'found': false,
        'image': './assets/images/productos/zapatos.webp'
    },
    {
        'id': 5,
        'name': 'Chaqueta futurista',
        'message': 'Te gusta la chaqueta que lleva Martín McFly en la pelicula?, ¡llevatela!',
        'price': 400,
        'start': 225,
        'end': 243,
        'found': false,
        'image': './assets/images/productos/chaqueta.webp'
    }

]

let data = JSON.parse(sessionStorage.getItem("userData")) || defaultData;

function saveData() {
    sessionStorage.setItem("userData", JSON.stringify(data));
}

const banner = document.querySelector('.banner-image');
const label = document.querySelector('.label');
const title = document.querySelector('.title');
const anio = document.querySelector('.anio');
const genero = document.querySelector('.genero');
const descripcion = document.querySelector('.description');
const actors = document.querySelector('.actors');
const grilla = document.querySelector('.grilla');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const videoOverlay = document.getElementById('videoOverlay');
const video = document.getElementById('video');
const videoContainer = document.getElementById('videoContainer');
const navbar = document.getElementById('navbar');
const cardOverlay = document.getElementById('cardOverlay');
const titleProduct = document.getElementById('titleProduct');
const cerrarCardOverlay = document.getElementById('cerrarCardOverlay');
const textProduct = document.getElementById('textProduct');
const videoOverlayEnd = document.getElementById('videoOverlayEnd');
const messageEnd = document.getElementById('messageEnd');
const contentEnd = document.getElementById('contentEnd');
const productImg = document.getElementById('productImg');
const videoSource = document.getElementById('video');
const foundObject = document.getElementById('foundObject');
let movieSelected = 1;


// Función para mostrar la información de la película o serie

const showDataMovie = (id) => {
    const dataMovie = data.find(movie => movie.id === id);
    item1.classList.remove('card-active');
    item2.classList.remove('card-active');
    item3.classList.remove('card-active');
    item4.classList.remove('card-active');
    switch (id) {
        case 1:
            item1.classList.add('card-active');
            break;
        case 2:
            item2.classList.add('card-active');
            break;
        case 3:
            item3.classList.add('card-active');
            break;
        case 4:
            item4.classList.add('card-active');
            break;
        default:
            break;
    }
    banner.classList.remove('baner-backgroundv');
    banner.classList.remove('baner-backgrounds');
    banner.classList.remove('baner-backgroundc');
    banner.classList.remove('baner-backgroundg');
    banner.classList.add(dataMovie.class);
    label.innerHTML = dataMovie.tipo;
    title.innerHTML = dataMovie.titulo;
    anio.innerHTML = dataMovie.fecha;
    genero.innerHTML = dataMovie.genero;
    descripcion.innerHTML = dataMovie.descripcion;
    actors.innerHTML = dataMovie.reparto;
    console.log(dataMovie.video);
    videoSource.src = dataMovie.video;
    console.log(dataMovie.foundProducts);
    if (dataMovie.foundProducts === 0) {
        foundObject.classList.remove('bg-danger');
        foundObject.classList.add('bg-success');
        foundObject.innerHTML = '¡Felicidades! Encontraste todos los objetos ocultos.';
    } else {
        foundObject.classList.remove('bg-success');
        foundObject.classList.add('bg-danger');
        foundObject.innerHTML = `Faltan ${dataMovie.foundProducts} objetos  Encuentralos ahora`;
    }
    foundObject.innerHTML = dataMovie.foundProducts != 0 ? `Faltan ${dataMovie.foundProducts} objetos  Encuentralos ahora` : '¡Felicidades! Has encontrado todos los objetos ocultos.';
    movieSelected = id;
}


window.onload = function () {
    showDataMovie(1);
};

function showVideo(id) {
    navbar.style.display = 'none';
    videoContainer.style.display = 'flex';
}

document.getElementById('playButton').addEventListener('click', function () {
    videoOverlay.style.display = 'none';
    video.play();
});

document.getElementById('closeButton').addEventListener('click', function () {
    video.pause();
    video.currentTime = 0;
    videoContainer.style.display = 'none';
    videoOverlay.style.display = '';
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'block';
    showDataMovie(movieSelected);
});

video.addEventListener("pause", function () {

    var currentTime = video.currentTime;
    const dataMovie = data.find(movie => movie.id === movieSelected);
    dataMovie.products.forEach(range => {
        if (currentTime >= range.start && currentTime <= range.end) {
            productImg.src = range.image;
            video.pause();
            cardOverlay.style.display = "";
            titleProduct.innerText = range.name;
            textProduct.innerText = range.message;
            range.found = true;
            video.pause();

        }
        const lengProducts = dataMovie.products.length
        let productsFound = 0;
        dataMovie.products.forEach(product => {
            if (product.found) {
                productsFound++;
            }
        });
        dataMovie.foundProducts = lengProducts - productsFound
        saveData()
    });
});

cerrarCardOverlay.addEventListener('click', () => {
    cardOverlay.style.display = "none";
    video.play();
});

video.addEventListener('timeupdate', function () {
    const dataMovie = data.find(movie => movie.id === movieSelected);
    if (Math.floor(video.currentTime) >= dataMovie.videoEnd) {
        video.pause();
        videoOverlayEnd.style.display = '';
        const dataMovie = data.find(movie => movie.id === movieSelected);
        const lengProducts = dataMovie.products.length
        let productsFound = 0;
        dataMovie.products.forEach(product => {
            if (product.found) {
                productsFound++;
            }
        });
        if (productsFound === lengProducts) {
            contentEnd.classList.remove('incmpleted');
            contentEnd.classList.add('completed');
            videoOverlayEnd.classNam = 'completed';
            messageEnd.innerText = '¡Felicidades! Has encontrado todos los objetos ocultos.';

        } else {
            dataMovie.foundProducts = lengProducts - productsFound
            contentEnd.classList.remove('completed');
            contentEnd.classList.add('incompleted');
            videoOverlayEnd.className = 'icompleted';
            videoOverlayEnd.style.display = '';
            messageEnd.innerText = '¡Casi lo logras! Te faltaron algunos objetos ocultos.';
        }
    }
});

video.addEventListener("fullscreenchange", (event) => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
});

video.addEventListener("webkitfullscreenchange", (event) => {
    if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen();
    }
});

video.addEventListener("mozfullscreenchange", (event) => {
    if (document.mozFullScreenElement) {
        document.mozCancelFullScreen();
    }
});

video.addEventListener("MSFullscreenChange", (event) => {
    if (document.msFullscreenElement) {
        document.msExitFullscreen();
    }
});

document.getElementById('closeOverlayEnd').addEventListener('click', function () {
    video.pause();
    video.currentTime = 0;
    videoOverlayEnd.style.display = 'none';
});

