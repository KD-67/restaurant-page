import { loadHomePage } from "./home-page";
import { loadHeaderBar } from "./header-bar";

const initialLoad = () => {
  loadHeaderBar();
  loadHomePage();
};

export { initialLoad };
