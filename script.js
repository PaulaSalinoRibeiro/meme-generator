
let body = document.querySelector('body');

let inputText = document.createElement('input');
inputText.type = 'text';
inputText.id = 'text-input';
inputText.maxLength = '60';
inputText.placeholder = 'Digite seu texto aqui';
body.appendChild(inputText);

let inputImage = document.createElement('input');
inputImage.id = 'meme-insert';
inputImage.type = 'file';
body.appendChild(inputImage);

let container = document.createElement('div');
container.id = 'meme-image-container';
body.appendChild(container);

let textDiv = document.createElement('div');
textDiv.id = 'meme-text';
container.appendChild(textDiv);

let imageDiv =document.createElement('div');
imageDiv.id = 'meme-image';
container.appendChild(imageDiv);

let textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', printText);
function printText(){
    let memeText = document.getElementById('meme-text');
    memeText.innerText = textInput.value; 
}

let memeImage = document.getElementById('meme-image');
let memeInsert = document.getElementById('meme-insert');

memeInsert.addEventListener('change', loadFile);

function loadFile(){                           // ref.: https://www.codegrepper.com/code-examples/javascript/display+image+upload+javascript
    let img = document.createElement('img');
    memeImage.appendChild(img);
    img.src = URL.createObjectURL(memeInsert.files[0]); 
    /* img.change = function(){
        URL.revokeObjectURL(img.src)
    } */
} 

let fireButton = document.createElement('button');
fireButton.id = 'fire';
fireButton.innerText = 'Fire';
body.appendChild(fireButton);

let waterButton = document.createElement('button');
waterButton.id = 'water';
waterButton.innerText = 'Water';
body.appendChild(waterButton);

let earthButton = document.createElement('button');
earthButton.id = 'earth';
earthButton.innerText = 'Earth';
body.appendChild(earthButton);

fireButton.addEventListener('click', styleFire);
function styleFire(){
    container.style.border = '3px dashed red'
}

waterButton.addEventListener('click', styleWater);
function styleWater(){
    container.style.border = '5px double blue'
}

earthButton.addEventListener('click', styleEarth);
function styleEarth(){
    container.style.border = '6px groove green'
}