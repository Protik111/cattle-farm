const galleryImages = document.querySelectorAll(".gallery-image");
const modal = document.querySelector(".modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        modalImage.src = image.src;
        modal.classList.add("show");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});
