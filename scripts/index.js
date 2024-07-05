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

function getCardElement(data) {
  const cardTemplate = document.querySelector("#post").content;
  const cardElement = cardTemplate.querySelector(".post").cloneNode(true);
  cardElement.querySelector(".post__image").src = data.link;
  cardElement.querySelector(".post__image").alt = data.name;
  cardElement.querySelector(".post__title").textContent = data.name;

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

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardGallery.prepend(cardElement);
});
