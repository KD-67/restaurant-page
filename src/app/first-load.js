const firstLoad = () => {
  // navBar html elements
  const body = document.body;
  const content = document.querySelector(".content");
  const navBar = document.createElement("nav");
  const logoContainer = document.createElement("div");
  const btnsContainer = document.createElement("div");
  const contactBtn = document.createElement("button");
  const locationBtn = document.createElement("button");
  const reviewBtn = document.createElement("button");
  // main html elements
  const mainContainer = document.createElement("div");
  const mainHeading = document.createElement("h1");
  const mainArticle = document.createElement("article");
  // setting class names
  logoContainer.classList.add("logo-container");
  btnsContainer.classList.add("btns-container");
  mainContainer.classList.add("main-container");
  mainHeading.classList.add("main-heading");
  mainArticle.classList.add("main-article");
  contactBtn.classList.add("nav-btn");
  locationBtn.classList.add("nav-btn");
  reviewBtn.classList.add("nav-btn");
  // adding the elements to the DOM
  content.appendChild(navBar);
  content.appendChild(mainContainer);
  navBar.appendChild(logoContainer);
  navBar.appendChild(btnsContainer);
  btnsContainer.appendChild(contactBtn);
  btnsContainer.appendChild(locationBtn);
  btnsContainer.appendChild(reviewBtn);
  mainContainer.appendChild(mainHeading);
  mainContainer.appendChild(mainArticle);
  // populate with content
  mainHeading.innerText = "Chef KD's Gastronomical Wonderland";
  mainArticle.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur possimus quam dolor, animi deserunt quod dicta similique rerum assumenda recusandae ea doloribus debitis commodi fugiat nulla dolores nobis praesentium fugit vitae! Quas fugiat, eum facere nulla fugit at a sequi officiis rerum, esse dolor accusamus consequatur. Assumenda distinctio perspiciatis ex, magni placeat sunt. Asperiores vitae voluptatum earum fugiat sapiente voluptatem a obcaecati expedita cum, beatae error alias sit ipsum assumenda eaque, ullam dolorum aliquam. Vero repellendus fugit reprehenderit dolorum asperiores fugiat provident neque pariatur dolore, quidem necessitatibus accusantium labore sunt adipisci voluptatem molestiae eveniet animi, nemo laborum, perspiciatis aliquam sequi.";
  contactBtn.innerText = "Contact Us";
  locationBtn.innerText = "Our location";
  reviewBtn.innerText = "Leave a review";
};

export { firstLoad };
