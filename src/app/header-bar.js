import { loadHomePage } from "./home-page";
import { loadMenuPage } from "./menu-page";
import { clearContent } from "./clear-content";

const loadHeaderBar = () => {
  const headerBar = document.querySelector(".header-bar");

  // Logo (within Header)
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");
  headerBar.appendChild(logoContainer);

  const logo = document.createElement("img");
  logo.src = "https://i.redd.it/6v85zvzox7131.jpg";
  logo.classList.add("logo-img");
  logoContainer.appendChild(logo);

  // Buttons Container (within Header)
  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");
  headerBar.appendChild(btnsContainer);

  // Home Button
  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.setAttribute("id", "home-btn");
  btnsContainer.appendChild(homeBtn);
  homeBtn.innerText = "Home";
  homeBtn.addEventListener("click", () => {
    clearContent();
    loadHomePage();
  });

  // Menu Button
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.setAttribute("id", "menu-btn");
  btnsContainer.appendChild(menuBtn);
  menuBtn.innerText = "Menu";
  menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenuPage();
  });

  // Location Button
  const locationBtn = document.createElement("button");
  locationBtn.classList.add("nav-btn");
  locationBtn.setAttribute("id", "location-btn");
  btnsContainer.appendChild(locationBtn);
  locationBtn.innerText = "Our location";
  locationBtn.addEventListener("click", () => {
    //stuff
  });

  // Contact Button
  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-btn");
  contactBtn.setAttribute("id", "contact-btn");
  btnsContainer.appendChild(contactBtn);
  contactBtn.innerText = "Contact Us";
  contactBtn.addEventListener("click", () => {
    //stuff
  });

  // Review Button
  const reviewBtn = document.createElement("button");
  reviewBtn.classList.add("nav-btn");
  reviewBtn.setAttribute("id", "review-btn");
  btnsContainer.appendChild(reviewBtn);
  reviewBtn.innerText = "Leave a review";
  reviewBtn.addEventListener("click", () => {
    //stuff
  });
};

export { loadHeaderBar };
