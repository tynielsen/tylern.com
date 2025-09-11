// Set copyright year automatically
var copyright = document.getElementById('c-yr');
copyright.innerHTML = new Date().getFullYear();

// Duplicating logo slider to minimize jarring "jump" when reaching the end
const slideDuplicate = document.querySelector('.tech-stack-slider ul')?.cloneNode(true);
document.querySelector('.tech-stack-slider')?.appendChild(slideDuplicate);


/* ****************************************************************************
  Theming Logic
******************************************************************************* */
const colorThemes = document.querySelectorAll('[name="theme"]');

// store/cache selected theme
const storeTheme = function(theme) {
  localStorage.setItem("theme", theme);
}

// Retrieve and set the stored theme if one exists
const setTheme = function() {
  const activeTheme = localStorage.getItem("theme");

  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });

  document.documentElement.className = activeTheme; // Fallback for browsers w/o :has() support
}

// click-event handler
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener('click', () => {
    storeTheme(themeOption.id);
    console.log(themeOption.id);
  })
});

document.onload = setTheme();


/* ****************************************************************************
  Resources List JSON file - Simple Array Use
******************************************************************************* */
import data from "../data/resources-list.json" with { type: "json" };

fetch("../data/resources-list.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error loading JSON file", error));

const container = document.getElementById("loop");
data.resources.map((element) => {
  let newDiv = document.createElement("li");
  container.className = "resource-links";
  newDiv.innerHTML = `<a href="${element.url}" target="_blank">${element.name}</a>`;
  container.appendChild(newDiv);
});
