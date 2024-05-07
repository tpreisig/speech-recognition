const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const diagnostic = document.getElementById("output");
const bg = document.querySelector("body");
const hints = document.querySelector(".hints");

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


let bgColor = "";
colors.forEach((color, n) => {
    console.log(color, n);
    bgColor += `<span style="background-color:${color};">${color} </span>`;
});
hints.innerHTML = `Click then say a color to change the background color <br> _${bgColor}`;

document.body.onclick = () => {
    recognition.start();
};

recognition.onresult = (event) => {
    const color = event.results[0][0].transcript;
    diagnostic.textContent = `Result received: ${color}.`;
    bg.style.backgroundColor = `${color.replace(' ', '')}`;
    console.log(`Confidence: ${event.results[0][0].confidence}`);
};

recognition.onspeechend = () => {
    recognition.stop();
};