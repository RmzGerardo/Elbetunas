import type { GiphyResponse, Gif  } from "./giphy.response";

const API_KEY  = 'mVlLgIq4Rdp9Ow2vskSt6BMmhj7DcGBj&tag=&rating=g';



const createImagesDom = (url:string) => {
 const img = document.createElement('img');
        img.src = url;
        document.body.append(img);  
}

const getImages = async () => {

    const response = await fetch
    (`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    );
    
    const {data}: GiphyResponse = await response.json();
    return data.images.original.url;
}

getImages().then(createImagesDom);


