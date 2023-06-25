import { createHomePage } from "./home-page";
import { loadHeaderBar } from "./header-bar";

const initialLoad = () => {
  loadHeaderBar();
  createHomePage();
};

export { initialLoad };
