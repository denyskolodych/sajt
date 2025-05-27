


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1';

var lete = [];
for (var i = 0; i < 27 ; i++) {
  lete.push(letters[i]);
  lete.push(letters[i]);
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(lete);
function spawnElemts(letter){
for(var i = 0;i<54;i++){
  var elem = document.createElement('div');
  elem.classList.add('element');
  elem.classList.add('hidden');
  elem.classList.add('matched');
  elem.textContent = letter[i];
  document.body.appendChild(elem);
}
  var elq = document.getElementsByTagName('div');
  var erstleft = 380;
  var ersttop = 80;
  var a = 0;
for(var i = 0;i<54;i++){
  if(i%9 === 0 && i !== 0){
    erstleft = 380;
    ersttop += 85;
    a=0;
  }
  elq[i].style.left = erstleft + 85 * a + 'px';
  elq[i].style.top = ersttop + 'px';
  a++;
  
}
return elq;
}
function changeElementBg(element, color){
  element.style.backgroundColor = color;
}
var elements = spawnElemts(lete);
let selected = [];

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
    // Якщо вже вибрано 2 елементи фбо ці елементи вже вгадані, ігноруємо натискання
    if (selected.length === 2 || this.classList.contains('matched')) return;
    this.classList.remove('hidden');
    changeElementBg(this, 'rgb(112, 0, 182)');
    selected.push(this);

    if (selected.length === 2) {
      setTimeout(function() {
        // Повертаємо початковий фон
        changeElementBg(selected[0], 'rgb(144, 21, 231)');
        changeElementBg(selected[1], 'rgb(144, 21, 231)');
        selected[0].classList.add('hidden');
        selected[1].classList.add('hidden');
        if (selected[0].textContent === selected[1].textContent) {
          changeElementBg(selected[0], 'rgb(0, 255, 0)');
          changeElementBg(selected[1], 'rgb(0, 255, 0)');
          selected[0].classList.add('matched');
          selected[1].classList.add('matched');
          
        }
        selected = [];
      }, 1000);
    }
  });
}
function playMusic() {
  const music = document.getElementById('bgMusic');
  music.play();
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('matched');
  }

}
