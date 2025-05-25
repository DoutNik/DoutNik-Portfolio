
const switcher = document.getElementById("languageSwitcher");
const elements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

const defaultLang = localStorage.getItem("lang") || "en";
setLanguage(defaultLang);
switcher.value = defaultLang;

switcher.addEventListener("change", () => {
  const selectedLang = switcher.value;
  localStorage.setItem("lang", selectedLang);
  setLanguage(selectedLang);
});
