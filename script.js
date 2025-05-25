let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("java");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("React-Redux");
        habilidades[4].classList.add("Nodejs-Express");
        habilidades[5].classList.add("PostgreSQL-Sequelize");
        habilidades[6].classList.add("WebSockets");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("proyect");
    }
}


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


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 