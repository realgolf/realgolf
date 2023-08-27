// const saved_theme = localStorage.getItem('theme');
// if (saved_theme) {
// 	document.body.setAttribute('data-theme', saved_theme);
// } else {
// const prefers_dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const theme = prefers_dark ? "dark" : "light";
// document.body.setAttribute("data-theme", theme);
// localStorage.setItem("theme", theme);
// }

function handlePrefersDarkChange(event) {
  const newTheme = event.matches ? "dark" : "light";
  document.body.setAttribute("data-theme", newTheme);
}

function setupPrefersDarkListener() {
  const prefersDarkMediaQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );
  handlePrefersDarkChange(prefersDarkMediaQuery);

  // Listen for changes in the prefers-color-scheme media query
  prefersDarkMediaQuery.addEventListener("change", handlePrefersDarkChange);
}

// Initial setup
setupPrefersDarkListener();
