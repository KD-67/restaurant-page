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
  btnsContainer.appendChild(homeBtn);
  homeBtn.innerText = "Home";

  // Menu Button
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  btnsContainer.appendChild(menuBtn);
  menuBtn.innerText = "Menu";

  // Location Button
  const locationBtn = document.createElement("button");
  locationBtn.classList.add("nav-btn");
  btnsContainer.appendChild(locationBtn);
  locationBtn.innerText = "Our location";

  // Contact Button
  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav-btn");
  btnsContainer.appendChild(contactBtn);
  contactBtn.innerText = "Contact Us";

  // Review Button
  const reviewBtn = document.createElement("button");
  reviewBtn.classList.add("nav-btn");
  btnsContainer.appendChild(reviewBtn);
  reviewBtn.innerText = "Leave a review";
};

export { loadHeaderBar };
