// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let intervalId;
  let timeoutID;
  const synth = window.speechSynthesis;
  const btn = document.querySelector('button');
  const voiceSelect = document.querySelector('select');
  var utterence;
  btn.addEventListener("click", speak);
  utterence.addEventListener("start", moveMouth);
  let voices = [];
  
  function populateVoiceList(){
    voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++){
      const option = document.createElement("option");
      option.textContent = '${voices[i].name} (${voices[i].lang})';
      if(voices[i].default){
        option.textContent += " - DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  function speak(){
    clearTimeout(timeoutID);
    clearInterval(intervalId);
    let text = document.getElementById("text-to-speak").value;
    utterence = new SpeechSynthesisUtterance(text);
    synth.speak(utterence);
    intervalId = setInterval(moveMouth, 1000);
  }

  function moveMouth(){
    if(!synth.speaking){
      clearTimeout(timeoutID);
      clearInterval(intervalId);
    }else{
      document.querySelector('img').src = "assets/images/smiling.png";
      timeoutID = setTimeout(closeMouth, 500);
    }
  }
  function closeMouth(){
    if(!synth.speaking){
      clearTimeout(timeoutID);
      clearInterval(intervalId);
    }else{
      document.querySelector('img').src = "assets/images/smiling-open.png";
    }
  }
}
