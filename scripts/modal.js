const openButton = document.querySelector(".profile__edit-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close-button");
const submitButton = document.querySelector(".form__save-button");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");
const inputName = document.querySelector(".form__input-name");
const inputDesc = document.querySelector(".form__input-description");

openButton.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
  modal.classList.add("modal_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;
  modal.classList.remove("modal_opened");
}

submitButton.addEventListener("click", handleProfileFormSubmit);

closeButton.addEventListener("click", function () {
  modal.classList.remove("modal_opened");
});
