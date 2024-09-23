const showImage = document.querySelectorAll(".image__box");

for (i = 0; i < showImage.length; i++) {
  showImage[i].addEventListener("click", function () {
    this.classList.add("active");
  });
}
