const pageContainer = document.getElementById("pageContainer");
const page = document.querySelector(".page");
const lastButton = document.getElementById("lastPageButton");
const nextButton = document.getElementById("nextPageButton");


function funcctionName () {
    // What to do
}

nextButton.addEventListener("click", (event) => {
    const lastImage = document.getElementById("lastPageImage");
    lastImage.src = "https://file.garden/Z9NesCn881IguicE/greyleftarrow.png";
    const pageWidth = page.clientWidth;
    pageContainer.scrollLeft += pageWidth;
});

lastButton.addEventListener("click", () => {
  const pageWidth = page.clientWidth;
  pageContainer.scrollLeft -= pageWidth;
});
