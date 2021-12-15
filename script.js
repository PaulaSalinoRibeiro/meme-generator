
let memeText = document.getElementById('meme-text');
let textInput = document.getElementById('text-input');

textInput.addEventListener('keyup', writting);

function writting(){
    memeText.innerText = textInput.value;  
}
