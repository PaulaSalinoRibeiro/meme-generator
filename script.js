
let textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', printText);
function printText(){
    let memeText = document.getElementById('meme-text');
    memeText.innerText = textInput.value; 
}

let memeImage = document.getElementById('meme-image');
let memeInsert = document.getElementById('meme-insert');

memeInsert.addEventListener('change', loadFile);

function loadFile(event){                           // ref.: https://www.codegrepper.com/code-examples/javascript/display+image+upload+javascript
    let img = document.createElement('img');
    memeImage.appendChild(img);
    img.src = URL.createObjectURL(event.target.files[0]);
}