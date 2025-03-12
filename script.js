const button = document.getElementById("start");
const output = document.getElementById("output");

 const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
recognition.interimResults = false;

recognition.onresult = function (event) {
    const speechText = event.results[0][0].transcript.toLowerCase();
    output.textContent = "You said: " + speechText;

     let response = getAIResponse(speechText);
    speak(response);
};

 function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

 function getAIResponse(text) {
    if (text.includes("hello")) {
        return "Hello! How can I assist you?";
    } else if (text.includes("your name")) {
        return "I am your AI Virtual Assistant.";
    } else if (text.includes("time")) {
        return "The current time is " + new Date().toLocaleTimeString();
    } else {
        return "I am still learning. Can you repeat that?";
    }
}

 button.addEventListener("click", () => {
    recognition.start();
});
