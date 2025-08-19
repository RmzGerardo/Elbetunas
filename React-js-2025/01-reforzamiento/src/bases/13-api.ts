import type { GiphyResponse, Gif  } from "./giphy.response";

const API_KEY  = 'mVlLgIq4Rdp9Ow2vskSt6BMmhj7DcGBj&tag=&rating=g';

const myPeticion = fetch
(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

);

const createImagesDom = (url:string) => {
 const img = document.createElement('img');
        img.src = url;
        document.body.append(img);  
}



myPeticion.then( (response) => response.json())
    .then(({data}: GiphyResponse) => {

        const images = data.images.original.url;
        createImagesDom(images); 
    })
    .catch( (err) => {
        console.error(err);
    });