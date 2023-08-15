console.log("Let's get this party started!");

const userInput = document.querySelector('#input');
const searchButton = document.querySelector('#search');
const removeButton = document.querySelector('#remove');
const gifHolder = document.querySelector('#container');

searchButton.addEventListener('click', async function(){
    let id = 'teL1cyX1wGb7D9NodBM42yfE4kaqpzmj';
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${id}&q=${userInput.value}`);
    console.log(res);
    console.log(res.data.data);
    addGif(res.data.data);
});

function addGif(results){
    let ranIndex = Math.floor(Math.random()*results.length);
    console.log(ranIndex);
    console.log(results[ranIndex].url);
    let newGif = document.createElement('img');
    newGif.classList.add('gif');
    newGif.src = results[ranIndex].images.original.url;
    gifHolder.appendChild(newGif);
}

$('#remove').on('click', function(){
    $('.gif').remove();
})