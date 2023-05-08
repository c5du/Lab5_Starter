// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  var name = 'select';
  const selectHorn = document.getElementById("horn-select");
  const volume = document.getElementById("volume");
  const btn = document.querySelector('button');
  selectHorn.addEventListener("change", imageChange);
  volume.addEventListener("input",volumeChange);
  btn.addEventListener("click", playAudio);
  function imageChange(e){
    name = e.target.value;
    document.querySelector('#expose img').src = "assets/images/" + name + ".svg";
    document.querySelector('audio').src = "assets/audio/" + name + ".mp3";
    
  } 
  function volumeChange(e){ 
    let num = 0;
    let volumeNum = e.target.value;
    if(volumeNum >= 67){
      num = 3;
    }else if(volumeNum >= 33){
      num = 2;
    }else if(volumeNum >= 1){
      num = 1;
    }
    document.querySelector('audio').volume = volumeNum * 0.01; 
    document.querySelector('#volume-controls img').src = "assets/icons/volume-level-" + num + ".svg";
  }
  function playAudio(){
    var audio = document.querySelector('audio');
    if(name == 'party-horn'){
      jsConfetti.addConfetti({
        confettiRadius: 5,
      });
    }
    audio.play();    
  }
}
