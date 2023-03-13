let body = document.querySelector("body");
let homepageContainer = document.querySelector(".homepage-container");
let timelineContainer = document.querySelector(".timeline-container");

// let button = document.createElement("button");
// button.textContent = "start time";
// homepageContainer.appendChild(button);
// button.style.color = "black";

button.addEventListener("click", ()=> {
    timelineContainer.style.display = "block";
    homepageContainer.style.display = "none";
})