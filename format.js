const pageContainer = document.getElementById("pageContainer");
const page = document.querySelector(".page");
const lastButton = document.getElementById("lastPageButton");
const nextButton = document.getElementById("nextPageButton");


function funcctionName () {
    // What to do
}

nextButton.addEventListener("click", (event) => {
  const pageWidth = page.clientWidth;
    pageContainer.scrollLeft += pageWidth;
});