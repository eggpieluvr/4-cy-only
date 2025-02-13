"use strict";

const tontonGifs = [
  "https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif",
  "https://media.tenor.com/pZk_U5JVWzUAAAAi/tonton-friends-tonton.gif",
  "https://media.tenor.com/Jkha__Yjf0oAAAAi/sad-depression.gif",
  "https://media.tenor.com/U0OPHZokzkUAAAAi/what-seriously.gif",
  "https://media.tenor.com/WKXMmSk3JJsAAAAi/chubby-tonton.gif",
  "https://media.tenor.com/ZHWV13jliTAAAAAi/chubby-tonton.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "yayyy 🥰💗"
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.90;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "no",
    "???",
    "iisa pa yan sha",
    "...",
    "ok, wag na lang : (",
    "jkkk, say yes na po, pretty please 🥺👉👈",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "https://media.giphy.com/media/7Itkmm1CWfyTahEwfi/giphy.gif?cid=790b7611pzah7fneub3g5enxmujrc0atlnu9n2b37suzee0m&ep=v1_stickers_search&rid=giphy.gif&ct=s"
      : tontonGifs[image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}
