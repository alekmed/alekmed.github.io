
// Listen for changes in the user's preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', invertColors);
function invertColors() {
  const root = document.documentElement;
  root.classList.toggle('dark-mode');
}

// Check if the user's browser is in dark mode
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  invertColors();
}

// Listen for changes in the user's preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', invertColors);


// I USED GOOGLE GEMINI FOR THIS IM NOT LEARNING HOW TO USE JAVASCRIPT ON MY PHONE LMAO