const field = document.querySelector(".pitch");
const players = document.querySelectorAll(".draggable");
const pitch = document.querySelector(".pitch");
let offsetX, offsetY;

function move(e) {
  //   console.log(this);
  e.target.style.left = `${e.clientX - offsetX}px`;
  e.target.style.top = `${e.clientY - offsetY}px`;
}

players.forEach((player) =>
  player.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - player.offsetLeft;
    offsetY = e.clientY - player.offsetTop;
    document.addEventListener("mousemove", move);
  })
);

function createPlayer() {
  const newPlayer = document.createElement("div");
  newPlayer.classList.add("draggable");
  pitch.appendChild(newPlayer);
}

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move);
});

document.addEventListener("click", createPlayer);
