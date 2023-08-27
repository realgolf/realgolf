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
