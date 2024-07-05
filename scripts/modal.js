const profileOpenButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector(".modal__profile");
const profileSubmitButton = profileModal.querySelector(".form__save-button");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");
const inputName = document.querySelector(".form__input-name");
const inputDesc = document.querySelector(".form__input-description");

const postOpenButton = document.querySelector(".profile__post-button");
const postModal = document.querySelector(".modal__post");
const postSubmitButton = postModal.querySelector(".form__save-button");

const inputTitle = postModal.querySelector(".form__input-title");
const inputLink = postModal.querySelector(".form__input-link");

const closeButtons = document.querySelectorAll(".modal__close-button");

const toggleModal = (modal) => {
  modal.classList.toggle("modal_opened");
};

profileOpenButton.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
  toggleModal(profileModal);
});

postOpenButton.addEventListener("click", () => {
  toggleModal(postModal);
});

profileSubmitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;
  toggleModal(profileModal);
});

function getCardElement(title, link) {
  const cardTemplate = document.querySelector("#post").content;
  const cardElement = cardTemplate.querySelector(".post").cloneNode(true);
  cardElement.querySelector(".post__image").src = link;
  cardElement.querySelector(".post__image").alt = title;
  cardElement.querySelector(".post__title").textContent = title;

  const postImage = cardElement.querySelector(".post__image");
  postImage.addEventListener("click", () => {
    const imageModal = document.querySelector(".modal__post-image");
    imageModal.querySelector(".modal__image").src =
      cardElement.querySelector(".post__image").src;
    imageModal.querySelector(".modal__image").alt =
      cardElement.querySelector(".post__image").alt;
    imageModal.querySelector(".modal__image-title").textContent =
      cardElement.querySelector(".post__title").textContent;
    imageModal.classList.toggle("modal_opened");
  });

  const likeButton = cardElement.querySelector(".post__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("post__like-button--active");
  });

  const deleteButton = cardElement.querySelector(".post__delete-button");
  deleteButton.addEventListener("click", () => {
    const post = deleteButton.closest(".post");
    post.remove();
  });

  return cardElement;
}

postSubmitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const newPost = getCardElement(inputTitle.value, inputLink.value);
  cardGallery.prepend(newPost);
  inputTitle.value = "Title";
  inputLink.value = "Image URL";
  toggleModal(postModal);
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const parentModal = button.closest(".modal");
    toggleModal(parentModal);
  });
});
