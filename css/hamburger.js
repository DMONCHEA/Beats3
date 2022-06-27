const openButton = document.querySelector("#openOverlay");
const body = document.body;

openButton.addEventListener("click", e => {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  overlayElement.addEventListener("click", e => {
    if (e.target == overlayElement) {
      closeElement.click();
    }
  })
  
  const containerElement = document.createElement("div");
  containerElement.classList.add("modal-container");

  contentElement.innerHTML = ("menu__list");

  const contentElement = document.createElement("div");
  containerElement.classList.add("content");

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";

  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  })


  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);
  body.appendChild(overlayElement);
})




openOverlay.onclick = function (event) {
  event.preventDefault()
  let value = mainInput.value;
  if (document.getElementsByClassName("selected").length == 0) {
  thirdRow.innerHTML = value;
  } else {
  document.getElementsByClassName("selected")[0].innerHTML = value;
  }
};
  

