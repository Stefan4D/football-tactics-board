const field = document.querySelector(".pitch");
const players = document.querySelectorAll(".draggable");
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

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move);
});
