let body = document.querySelector("body");
let homepageContainer = document.querySelector(".homepage-container");
let timelineContainer = document.querySelector(".timeline-container");
let startButton = document.querySelector("#start");

// let button = document.createElement("button");
// button.textContent = "start time";
// homepageContainer.appendChild(button);
// button.style.color = "black";

startButton.addEventListener("click", ()=> {
    timelineContainer.style.display = "block";
    homepageContainer.style.display = "none";
})

//ONE!!!
let eventOne = document.querySelector("#event1");
let learnOne = document.querySelector("#learn1");
let expandOne = document.querySelector("#expand1");

learnOne.addEventListener("click", ()=> {

    learnOne.classList.add("hidden-learn");
    expandOne.classList.remove("expand-div");
    expandOne.classList.add("shown");
})

//TWO!!
let eventTwo = document.querySelector("#event2");
let learnTwo = document.querySelector("#learn2");
let expandTwo = document.querySelector("#expand2");

learnTwo.addEventListener("click", ()=> {
    learnTwo.classList.add("hidden-learn");
    expandTwo.classList.remove("expand-div");
    expandTwo.classList.add("shown");
})

//THREE
let eventThree = document.querySelector("#event3");
let learnThree = document.querySelector("#learn3");
let expandThree = document.querySelector("#expand3");

learnThree.addEventListener("click", ()=> {
    learnThree.classList.add("hidden-learn");
    expandThree.classList.remove("expand-div");
    expandThree.classList.add("shown");
})



let expandArray = document.querySelectorAll(".expand-div");
let learnArray = document.querySelectorAll(".learn-more")
console.log(expandArray);


