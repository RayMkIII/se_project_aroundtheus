//initial posts
const cardGallery = document.querySelector(".posts");

const object1 = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const object2 = {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
};

const object3 = {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
};

const object4 = {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
};

const object5 = {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
};

const object6 = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
};

const initialCards = [object1, object2, object3, object4, object5, object6];

//profile modal
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector(".profile-modal");
const profileForm = profileModal.querySelector(".form");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");
const inputName = document.querySelector(".form__input-name");
const inputDesc = document.querySelector(".form__input-description");

//post modal
const postOpenButton = document.querySelector(".profile__post-button");
const postModal = document.querySelector(".post-modal");
const postForm = postModal.querySelector(".form");

const inputTitle = postModal.querySelector(".form__input-title");
const inputLink = postModal.querySelector(".form__input-link");

//image modal
const imageModal = document.querySelector(".image-modal");
const imagePopup = imageModal.querySelector(".modal__image");
const imagePopupTitle = imageModal.querySelector(".modal__image-title");

//close buttons - all modals
const closeButtons = document.querySelectorAll(".modal__close-button");

function getCardElement(title, link) {
  const cardTemplate = document.querySelector("#post").content;
  const cardElement = cardTemplate.querySelector(".post").cloneNode(true);
  const postImage = cardElement.querySelector(".post__image");
  const postTitle = cardElement.querySelector(".post__title");
  postImage.src = link;
  postImage.alt = title;
  postTitle.textContent = title;

  cardElement.querySelector(".post__image").addEventListener("click", () => {
    imagePopup.src = postImage.src;
    imagePopup.alt = postImage.alt;
    imagePopupTitle.textContent = postTitle.textContent;
    toggleModal(imageModal);
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

initialCards.forEach((item) => {
  const cardElement = getCardElement(item.name, item.link);
  cardGallery.prepend(cardElement);
});

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

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;
  toggleModal(profileModal);
});

postForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newPost = getCardElement(inputTitle.value, inputLink.value);
  cardGallery.prepend(newPost);
  postForm.reset();
  toggleModal(postModal);
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const parentModal = button.closest(".modal");
    toggleModal(parentModal);
  });
});
