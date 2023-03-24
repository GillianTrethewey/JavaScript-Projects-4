const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  key.classList.add("playing");
  audio.play();
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
};

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// e is the TransitionEvent
// within TransitionEvent is key:value pair of type:"transitionend"

window.addEventListener("keydown", playSound);
// e is the KeyboardEvent
// within is the key: value pair of keyCode: "65"
