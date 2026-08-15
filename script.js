const TEST_MODE = true;

const birthday =
  new Date("2026-08-15T00:00:00+05:30").getTime();


function startJourney() {

  document.getElementById("home").style.display = "none";

  document.getElementById("journey").style.display = "block";

  setTimeout(() => {

    document.getElementById("journey").style.display = "none";

    if (TEST_MODE) {
      showSite();
    } else {
      showCountdown();
    }

  }, 4000);
}


function showCountdown() {

  document.getElementById("countdown").style.display = "flex";

  updateCountdown();
}


function updateCountdown() {

  const d = birthday - Date.now();

  if (d <= 0) {
    showSite();
    return;
  }

  document.getElementById("days").textContent =
    String(Math.floor(d / 86400000)).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(
      Math.floor((d % 86400000) / 3600000)
    ).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(
      Math.floor((d % 3600000) / 60000)
    ).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(
      Math.floor((d % 60000) / 1000)
    ).padStart(2, "0");
}


function showSite() {

  document.getElementById("home").style.display = "none";

  document.getElementById("journey").style.display = "none";

  document.getElementById("countdown").style.display = "none";

  document.getElementById("site").style.display = "block";

  window.scrollTo(0, 0);
}


function makeWish() {

  document.getElementById("wish").textContent =
    "✨ May Bhavya always keep smiling and spreading happiness everywhere! 🩷🎀";
}


function openGift() {

  const letter = document.getElementById("letter");

  letter.style.display = "block";

  setTimeout(() => {

    letter.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }, 100);
}


setInterval(() => {

  if (!TEST_MODE) {
    updateCountdown();
  }

}, 1000);
