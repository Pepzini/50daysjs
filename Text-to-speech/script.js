const inputText = document.getElementById('text-to-speech');
const btn = document.getElementById('button');


btn.addEventListener('click', ()=>{
   textToAudio();   
})


function textToAudio() {
    let message = inputText.value;

    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';

    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

