//-------------------------------------Import files and elements--------------------------------//

//-----------------------------------Get elements from HTML--------------------------------------//
//-------------------------------------------------------------------------------------------//
let header_menu = document.getElementById("header_menu");
let header_box = document.getElementById("header_box");
let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");
let logo_contacto = document.getElementById("logo_contacto");
let arrow_up = document.getElementById("arrow_up");
let serviciosButton = document.getElementById("serviciosButton");
let contactoButton = document.getElementById("contactoButton");
let servicios = document.getElementById("servicios");
let contacto = document.getElementById("contacto");
//-------------------------------Importar botones del menu de servicios----------------------//
let renovablesButton = document.getElementById("renovablesButton");
let smarthomeButton = document.getElementById("smarthomeButton");
let seguridadButton = document.getElementById("seguridadButton");
let webappsButton = document.getElementById("webappsButton");

//-------------------------------Importar slides de servicios---------------------------------//
let renovables = document.getElementById("renovables");
let smarthome = document.getElementById("smarthome");
let seguridad = document.getElementById("seguridad");
let webapps = document.getElementById("webapps");
//-------------------------------Importar elementos de popup-----------------------------------//
let popup_screen = document.getElementById("popup_screen");
let popup_interconexion = document.getElementById("popupInterconexion");
let popup_aislado = document.getElementById("popupAislado");
let popup_close_button = document.getElementById("popup_close_button");
let popup_title = document.getElementById("popup_title");
//---------------------------------Variables de control---------------------------------------//

//---------------------------------Seteo de inicio-------------------------------------------//
renovables.style.display = "none";
smarthome.style.display = "none";
seguridad.style.display = "none";
webapps.style.display = "none";

//------------------------------Animaciones de inicio------------------//
setTimeout(() => {
  setTimeout(function () {
    header_box.style.transform = "translate(0)";
  }, 300);
  setTimeout(function () {
    header_menu.style.height = "300px";
  }, 800);
  setTimeout(function () {
    serviciosButton.style.opacity = 1;
    contactoButton.style.opacity = 1;
  }, 1050);
}, 1000);

//---------------------------------Fin seteo Inicio ------------------------------------------//

//----------------------------------Funcion de flecha up -------------------------------------//
function goUp() {
  navbar.scrollIntoView({ behavior: "smooth", block: "start" });
}
//-------------------------------Funciones para monitorear cambios en el scroll --------------//
var logoObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      logo_contacto.style.opacity = 1;
      arrow_up.style.backgroundColor = "#f4f4f4";
    } else {
      logo_contacto.style.opacity = 0;
      arrow_up.style.backgroundColor = "#1c50ba";
    }
  },
  { threshold: [0.35] }
);
var arrowObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      arrow_up.style.opacity = 0;
    } else {
      arrow_up.style.opacity = 1;
      arrow_up.style.backgroundColor = "#1c50ba";
    }
  },
  { threshold: [0.35] }
);

//-----------------------Ejecucion de funciones de monitoreo de scroll ------------------//
arrowObserver.observe(document.querySelector(".section--1"));
logoObserver.observe(document.querySelector(".section--3"));

function menuClick(buttonPressed) {
  switch (buttonPressed) {
    case "serviciosButton":
      servicios.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "contactoButton":
      contacto.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "logo":
      break;
  }
}
//----------------Display de slides del menu de servicios-------------------------//
function display(slide) {
  switch (slide) {
    case "renovables":
      renovables.style.display = "flex";
      smarthome.style.display = "none";
      seguridad.style.display = "none";
      webapps.style.display = "none";
      break;
    case "smarthome":
      renovables.style.display = "none";
      smarthome.style.display = "flex";
      seguridad.style.display = "none";
      webapps.style.display = "none";
      break;
    case "seguridad":
      renovables.style.display = "none";
      smarthome.style.display = "none";
      seguridad.style.display = "flex";
      webapps.style.display = "none";
      break;
    case "webapps":
      renovables.style.display = "none";
      smarthome.style.display = "none";
      seguridad.style.display = "none";
      webapps.style.display = "flex";
      break;
  }
}
//-----------------Estado de los links del menu servicios -----------------------
function changeButtonStyle(button) {
  switch (button) {
    case "renovables":
      renovablesButton.classList.add("servicios_menu__link__selected");
      smarthomeButton.classList.remove("servicios_menu__link__selected");
      seguridadButton.classList.remove("servicios_menu__link__selected");
      webappsButton.classList.remove("servicios_menu__link__selected");
      break;
    case "smarthome":
      renovablesButton.classList.remove("servicios_menu__link__selected");
      smarthomeButton.classList.add("servicios_menu__link__selected");
      seguridadButton.classList.remove("servicios_menu__link__selected");
      webappsButton.classList.remove("servicios_menu__link__selected");
      break;
    case "seguridad":
      renovablesButton.classList.remove("servicios_menu__link__selected");
      smarthomeButton.classList.remove("servicios_menu__link__selected");
      seguridadButton.classList.add("servicios_menu__link__selected");
      webappsButton.classList.remove("servicios_menu__link__selected");
      break;
    case "webapps":
      renovablesButton.classList.remove("servicios_menu__link__selected");
      smarthomeButton.classList.remove("servicios_menu__link__selected");
      seguridadButton.classList.remove("servicios_menu__link__selected");
      webappsButton.classList.add("servicios_menu__link__selected");
      break;
  }
}
//-------------------------Funcionalidad del menu de servicios-----------------------------------//
function serviciosMenuClick(buttonPressed) {
  switch (buttonPressed) {
    case "renovablesButton":
      changeButtonStyle("renovables");
      display("renovables");
      break;
    case "smarthomeButton":
      changeButtonStyle("smarthome");
      display("smarthome");
      break;
    case "seguridadButton":
      changeButtonStyle("seguridad");
      display("seguridad");
      break;
    case "webappsButton":
      changeButtonStyle("webapps");
      display("webapps");
      break;
  }
}
//-----------------------------Funcionalidad popup ------------------------------------------------//
function openPopup(selection) {
  switch (selection) {
    case "interconexion":
      popup_screen.style.display = "flex";
      setTimeout(() => {
        popup_screen.classList.add("section--4__active");
      }, 200);
      setTimeout(() => {
        popup_interconexion.style.display = "flex";
      }, 300);
      setTimeout(() => {
        popup_interconexion.style.transform = "translateX(0)";
      }, 400);
      break;

    case "aislado":
      popup_screen.style.display = "flex";
      setTimeout(() => {
        popup_screen.classList.add("section--4__active");
      }, 200);
      setTimeout(() => {
        popup_aislado.style.display = "flex";
      }, 300);
      setTimeout(() => {
        popup_aislado.style.transform = "translateX(0)";
      }, 400);
      break;
    case "industrial":
      break;
    case "PTAR":
      break;
    case "captacion":
      break;
    case "iluminacion":
      break;
    case "audio":
      break;
    case "cine":
      break;
    case "internet":
      break;
  }
}
function popupClose(selection) {
  switch (selection) {
    case "interconexion":
      popup_interconexion.style.transform = "translateX(-200%)";
      setTimeout(() => {
        popup_screen.classList.remove("section--4__active");
        popup_interconexion.style.display = "none";
      }, 300);
      setTimeout(() => {
        popup_screen.style.display = "none";
      }, 2000);
      servicios.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "aislado":
      popup_aislado.style.transform = "translateX(-200%)";
      setTimeout(() => {
        popup_screen.classList.remove("section--4__active");
        popup_aislado.style.display = "none";
      }, 300);
      setTimeout(() => {
        popup_screen.style.display = "none";
      }, 2000);
      servicios.scrollIntoView({ behavior: "smooth", block: "start" });
      break;
    case "industrial":
      break;
    case "PTAR":
      break;
    case "captacion":
      break;
    case "iluminacion":
      break;
    case "audio":
      break;
    case "cine":
      break;
    case "internet":
      break;
  }
}
