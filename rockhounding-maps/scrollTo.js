document.addEventListener("DOMContentLoaded", function () {
  const fullListButton = document.getElementById("full-list-button");

  fullListButton.addEventListener("click", function () {
    const rocksFoundHereSection = document.getElementById("popular-rocks");
    rocksFoundHereSection.scrollIntoView({ behavior: "smooth" });
  });
});