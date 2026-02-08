let scale = 1;

const noBtn = document.querySelector(".btn4");
const yesBtn = document.querySelector(".btn3");

function moveButton() {
    const maxX = window.innerWidth / 2;
    const maxY = window.innerHeight / 2;

    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// When user HOVERS on NO
noBtn.addEventListener("mouseenter", moveButton);

// When user somehow CLICKS NO
noBtn.addEventListener("click", () => {
    scale += 0.4;
    yesBtn.style.transform = `scale(${scale})`;
    moveButton();
});

// YES click (victory)
yesBtn.addEventListener("click", () => {
     window.location.href = "../pages/yes.html";
});

noBtn.innerText = "WAIT 😭";
