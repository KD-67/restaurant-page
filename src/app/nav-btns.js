const loadNavBtns = () => {
  // Home Button
  const homeBtn = document.createElement("button");
  btnsContainer.appendChild(homeBtn);
  homeBtn.innerText = "Home";

  // Menu Button
  const menuBtn = document.createElement("button");
  btnsContainer.appendChild(menuBtn);
  menuBtn.innerText = "Menu";

  // Location Button
  const locationBtn = document.createElement("button");
  btnsContainer.appendChild(locationBtn);
  locationBtn.innerText = "Our location";

  // Contact Button
  const contactBtn = document.createElement("button");
  btnsContainer.appendChild(contactBtn);
  contactBtn.innerText = "Contact Us";

  // Review Button
  const reviewBtn = document.createElement("button");
  btnsContainer.appendChild(reviewBtn);
  reviewBtn.innerText = "Leave a review";
};

export { loadNavBtns };
