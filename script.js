// PASSWORD LOCK WITH FADE
function unlockSite(){
  let pw = document.getElementById("passwordInput").value.toLowerCase();
  if(pw === "jessa"){
    let lock = document.getElementById("lockScreen");
    lock.classList.remove("fadeIn");
    lock.classList.add("fadeOut");
    setTimeout(()=>{
      lock.style.display = "none";
      document.getElementById("mainSite").style.display = "block";
      let music = document.getElementById("bgMusic");
      music.play();
    },1000);
  } else {
    document.getElementById("lockMessage").innerHTML = "Only Jessa can enter ❤️";
  }
}

// OPEN ENVELOPE FUNCTION
function openLetter(){
  document.getElementById("envelope").classList.toggle("open");
}

// FLOATING HEARTS
setInterval(()=>{
  let heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="💗";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(Math.random()*20+15)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},500);