// help
function log(message) {
  console.log(message);
}

// app
const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach(card => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

// cada card
function dragstart() {
  // log("Started dragging");
  dropzones.forEach(dropzone => dropzone.classList.add("highlight"));
  this.classList.add("is-dragging");
}

function drag() {
  // log("Card is dragging");
}

function dragend() {
  // log("Dragging stopped");
  dropzones.forEach(dropzone => dropzone.classList.remove("highlight"));
  this.classList.remove("is-dragging");
}

// cada dropzone
dropzones.forEach(dropzone => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});
function dragenter() {
  // log("Entered dropzone");
}

function dragover() {
  // log("In the zone");
  this.classList.add("over");

  // get dragged card
  const cardBeingDragged = document.querySelector(".is-dragging");
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  // log("Left the zone");
  this.classList.remove("over");
}
function drop() {
  // log("Dropped in the zone");
  this.classList.remove("over");
}
