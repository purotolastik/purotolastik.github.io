
let idx = 0;
setInterval(()=>{
  const track = document.querySelector('.track');
  idx = (idx + 1) % 3;
  track.style.transform = `translateX(-${idx * 400}px)`;
},3000);

const form = document.getElementById('yorumForm');
form.addEventListener('submit', e=>{
  e.preventDefault();
  const ad = document.getElementById('ad').value;
  const yorum = document.getElementById('yorum').value;
  if(!ad || !yorum) return;
  const div = document.createElement('div');
  div.textContent = ad + ": " + yorum;
  div.style.padding = "10px";
  div.style.background = "#111";
  div.style.borderLeft = "4px solid #ff6a00";
  document.getElementById('yorumListesi').appendChild(div);
  localStorage.setItem("yorumlar", document.getElementById('yorumListesi').innerHTML);
});

window.onload = ()=>{
  const stored = localStorage.getItem("yorumlar");
  if(stored) document.getElementById('yorumListesi').innerHTML = stored;
};
