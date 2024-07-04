const profileOpenButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector(".modal__profile");
const profileCloseButton = profileModal.querySelector(".modal__close-button");
const profileSubmitButton = profileModal.querySelector(".form__save-button");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");
const inputName = document.querySelector(".form__input-name");
const inputDesc = document.querySelector(".form__input-description");

const postOpenButton = document.querySelector(".profile__post-button");
const postModal = document.querySelector(".modal__post");
const postCloseButton = postModal.querySelector(".modal__close-button");
const postSubmitButton = postModal.querySelector(".form__save-button");

const postTitle = postModal.querySelector(".form__input-title");
const postLink = postModal.querySelector(".form__input-link");

const openModal = (modal) => {
  modal.classList.add("modal_opened");
};

const closeModal = (modal) => {
  modal.classList.remove("modal_opened");
};

profileOpenButton.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
  openModal(profileModal);
});

postOpenButton.addEventListener("click", () => {
  openModal(postModal);
});

profileSubmitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;
  closeModal(profileModal);
});

function getCardElement(title, link) {
  const cardTemplate = document.querySelector("#post").content;
  const cardElement = cardTemplate.querySelector(".post").cloneNode(true);
  cardElement.querySelector(".post__image").src = link;
  cardElement.querySelector(".post__image").alt = title;
  cardElement.querySelector(".post__title").textContent = title;
  return cardElement;
}

postSubmitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const newPost = getCardElement(postTitle.value, postLink.value);
  cardGallery.prepend(newPost);
  postTitle.value = "Title";
  postLink.value = "Image URL";
  closeModal(postModal);
});

profileCloseButton.addEventListener("click", () => {
  closeModal(profileModal);
});

postCloseButton.addEventListener("click", () => {
  closeModal(postModal);
});
