const selectElement = document.querySelector(".countries");

const USER_FROM = "Where are you from?";
const SELECTED = "selected";

function saveSubmit(a) {
  localStorage.setItem(USER_FROM, a);
}

function loadSubmit() {
  const userFromInfo = localStorage.getItem(USER_FROM);
  if (userFromInfo === null) {
  } else {
    const base = document.querySelector(`#${userFromInfo}`);
    base.setAttribute("selected", SELECTED);
    console.log(base);
  }
}

selectElement.addEventListener("change", (event) => {
  const countrySelected = event.target.value;
  saveSubmit(countrySelected);
});

function init() {
  loadSubmit();
}

init();
