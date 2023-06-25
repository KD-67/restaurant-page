const createHomePage = () => {
  console.log("TESTING FUNCTION!!!");

  // Body & div.content
  const body = document.body;
  const content = document.querySelector(".content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);

  // Header
  const headerBar = document.createElement("div");
  pageContent.appendChild(headerBar);

  // Logo (within Header)
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");
  headerBar.appendChild(logoContainer);

  // Buttons Container (within Header)
  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");
  headerBar.appendChild(btnsContainer);

  // Main Container
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  pageContent.appendChild(mainContainer);

  // Main Heading (within Main)
  const mainHeading = document.createElement("h1");
  mainHeading.classList.add("main-heading");
  mainContainer.appendChild(mainHeading);
  mainHeading.innerText = "Chef KD's Gastronomical Wonderland :)";

  // Main Article (within Main)
  const mainArticle = document.createElement("article");
  mainArticle.classList.add("main-article");
  mainContainer.appendChild(mainArticle);
  mainArticle.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur possimus quam dolor, animi deserunt quod dicta similique rerum assumenda recusandae ea doloribus debitis commodi fugiat nulla dolores nobis praesentium fugit vitae! Quas fugiat, eum facere nulla fugit at a sequi officiis rerum, esse dolor accusamus consequatur. Assumenda distinctio perspiciatis ex, magni placeat sunt. Asperiores vitae voluptatum earum fugiat sapiente voluptatem a obcaecati expedita cum, beatae error alias sit ipsum assumenda eaque, ullam dolorum aliquam. Vero repellendus fugit reprehenderit dolorum asperiores fugiat provident neque pariatur dolore, quidem necessitatibus accusantium labore sunt adipisci voluptatem molestiae eveniet animi, nemo laborum, perspiciatis aliquam sequi.";
};

export { createHomePage };
