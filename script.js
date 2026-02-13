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

// 💗 INTRO LOADING SCREEN
window.addEventListener("load", ()=>{
  setTimeout(()=>{
    let intro=document.getElementById("introScreen");
    if(intro){
      intro.style.opacity="0";
      setTimeout(()=>intro.style.display="none",1000);
    }

    document.getElementById("mainSite").style.display="block";
  },2500);
});


// 💌 TYPING LOVE MESSAGE
const message = `Happy Valentine's Day my baby.

I made this little website for you because even if I can't always be beside you,
I still want you to feel how much I love you.

Every second, every minute, I miss you.
If distance didn't exist, I would already be holding your hand,
giving you flowers, and looking into your eyes right now.

But for now, this website will carry my love to you.
And one day... I won't just send love like this,
I'll be there beside you for real.

I love you always, my darling. ❤️`;

let i=0;
function typeEffect(){
  let target=document.getElementById("typingText");
  if(!target) return;

  if(i<message.length){
    target.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeEffect,35);
  }
}

setTimeout(typeEffect,3000);