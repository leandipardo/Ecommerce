import header from "./header.js";
import home from "./home.js";
import footer from "./footer.js";
import searchFilter from "./searchFilter.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  home();
  footer();
  header();
  searchFilter("");
});
