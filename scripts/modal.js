let openButton = document.querySelector(".profile__edit-button");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".modal__close-button");

openButton.addEventListener("click", function () {
  modal.classList.add("modal__opened");
});

closeButton.addEventListener("click", function () {
  modal.classList.remove("modal__opened");
});
