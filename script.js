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

//FOUR
let eventFour = document.querySelector("#event4");
let learnFour = document.querySelector("#learn4");
let expandFour = document.querySelector("#expand4");

learnFour.addEventListener("click", ()=> {
    learnFour.classList.add("hidden-learn");
    expandFour.classList.remove("expand-div");
    expandFour.classList.add("shown");
})

//FIVE
let eventFive = document.querySelector("#event5");
let learnFive = document.querySelector("#learn5");
let expandFive = document.querySelector("#expand5");

learnFive.addEventListener("click", ()=> {
    learnFive.classList.add("hidden-learn");
    expandFive.classList.remove("expand-div");
    expandFive.classList.add("shown");
})

//SIX
let eventSix = document.querySelector("#event6");
let learnSix = document.querySelector("#learn6");
let expandSix = document.querySelector("#expand6");

learnSix.addEventListener("click", ()=> {
    learnSix.classList.add("hidden-learn");
    expandSix.classList.remove("expand-div");
    expandSix.classList.add("shown");
})

//SEVEN
let eventSeven = document.querySelector("#event7");
let learnSeven = document.querySelector("#learn7");
let expandSeven = document.querySelector("#expand7");

learnSeven.addEventListener("click", ()=> {
    learnSeven.classList.add("hidden-learn");
    expandSeven.classList.remove("expand-div");
    expandSeven.classList.add("shown");
})

//EIGHT
let eventEight = document.querySelector("#event8");
let learnEight = document.querySelector("#learn8");
let expandEight = document.querySelector("#expand8");

learnEight.addEventListener("click", ()=> {
    learnEight.classList.add("hidden-learn");
    expandEight.classList.remove("expand-div");
    expandEight.classList.add("shown");
})

//NINE
let eventNine = document.querySelector("#event9");
let learnNine = document.querySelector("#learn9");
let expandNine = document.querySelector("#expand9");

learnNine.addEventListener("click", ()=> {
    learnNine.classList.add("hidden-learn");
    expandNine.classList.remove("expand-div");
    expandNine.classList.add("shown");
})

//TEN
let eventTen = document.querySelector("#event10");
let learnTen = document.querySelector("#learn10");
let expandTen = document.querySelector("#expand10");

learnTen.addEventListener("click", ()=> {
    learnTen.classList.add("hidden-learn");
    expandTen.classList.remove("expand-div");
    expandTen.classList.add("shown");
})

let expandArray = document.querySelectorAll(".expand-div");
let learnArray = document.querySelectorAll(".learn-more")
console.log(expandArray);

let homeButtonTl = document.querySelector(".homeButton");
homeButtonTl.addEventListener("click", () => {
    timelineContainer.style.display = "none";
    homepageContainer.style.display = "flex";
})


