const loadMenuPage = () => {
  // body & content divs
  const content = document.querySelector(".content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);

  // menu main heading
  const mainHeading = document.createElement("h1");
  mainHeading.classList.add("main-heading");
  pageContent.appendChild(mainHeading);
  mainHeading.innerText = "MENU";

  // menu section 1
  // heading 1
  const appetizerSection = document.createElement("h2");
  appetizerSection.classList.add("section-heading");
  pageContent.appendChild(appetizerSection);
  appetizerSection.innerText = "Appetizers";
  // list 1
  const appetizerList = document.createElement("ul");
  appetizerList.classList.add("main-article");
  pageContent.appendChild(appetizerList);
  // list items 1
  const liMozzarellaSticks = document.createElement("li");
  liMozzarellaSticks.classList.add("menu-list-item");
  appetizerList.appendChild(liMozzarellaSticks);
  liMozzarellaSticks.innerText = "Mozzarella Sticks";
  //
  const liSamosas = document.createElement("li");
  liSamosas.classList.add("menu-list-item");
  appetizerList.appendChild(liSamosas);
  liSamosas.innerText = "Samosas";
  //
  const liGardenSalad = document.createElement("li");
  liGardenSalad.classList.add("menu-list-item");
  appetizerList.appendChild(liGardenSalad);
  liGardenSalad.innerText = "Garden Salad";
};

export { loadMenuPage };
