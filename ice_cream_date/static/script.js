function nextPage() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

const noButton = document.getElementById("noButton");

const messages = [
    "Are you sure? 🥺",
    "Really sure? 🍦",
    "Come on... it'll be fun! 😊",
    "Free ice cream! 🍨",
    "You know there's no escape... 🍦❤️"
];

let attempt = 0;

noButton.addEventListener("mouseover", moveButton);

function moveButton() {

    if (attempt < messages.length) {
        document.getElementById("message").innerHTML = messages[attempt];
    }

    // Last message
    if (attempt === messages.length - 1) {

        setTimeout(function () {

            noButton.style.display = "none";

            document.getElementById("message").innerHTML =
                "There we go... now press Yes. ❤️";

        }, 2000);

    }

    attempt++;

    const maxX = window.innerWidth - 160;
    const maxY = window.innerHeight - 120;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

function yesClicked() {

    document.getElementById("page2").classList.add("hidden");

    setTimeout(function () {

        document.getElementById("page3").classList.remove("hidden");

        startConfetti();

    }, 300);

}


function startCelebration() {

    // create hearts
    for (let i = 0; i < 20; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.className = "heart";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

function startConfetti() {

    for (let i = 0; i < 100; i++) {

        let confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.transform =
            "rotate(" + Math.random() * 360 + "deg)";

        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, 5000);

    }

}

function flavorPage() {

    document.getElementById("page3").classList.add("hidden");

    document.getElementById("page4").classList.remove("hidden");

}


function chooseFlavor(flavor) {

    document.getElementById("page4").classList.add("hidden");

    document.getElementById("page5").classList.remove("hidden");


    document.getElementById("chosenFlavor").innerHTML =
        "You chose: " + flavor + " ❤️";

}