const firstLoad = () => {
  // navBar html elements
  const body = document.body;
  const content = document.querySelector(".content");
  const navBar = document.createElement("nav");
  const logoContainer = document.createElement("div");
  const btnsContainer = document.createElement("div");
  // main html elements
  const mainContainer = document.createElement("div");
  const mainHeading = document.createElement("h1");
  const mainArticle = document.createElement("article");
  //setting class names
  logoContainer.classList.add("logo-container");
  btnsContainer.classList.add("btns-container");
  mainContainer.classList.add("main-container");
  mainHeading.classList.add("main-heading");
  mainArticle.classList.add("main-article");
  //adding the elements to the DOM
  content.appendChild(navBar);
  content.appendChild(mainContainer);
  navBar.appendChild(logoContainer);
  navBar.appendChild(btnsContainer);
  mainContainer.appendChild(mainHeading);
  mainContainer.appendChild(mainArticle);
};

export { firstLoad };
