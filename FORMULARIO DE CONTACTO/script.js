var api = [
  {
    name: "Juan Carlos",
    email: "juanca@garajedeideas.com",
    interest: "datos",
    message: "Me gustaria formar parte del equipo!",
  },
  {
    name: "Maria",
    email: "maria@garajedeideas.com",
    interest: "diseno",
    message: "Tengo una propuesta para hacerles...",
  },
];

function handleSubmit() {
  event.preventDefault();
  toogleAside("block")
  console.log("api", api);
  //AQUI TU MAGIA
  var form = document.querySelector("body > form")
  console.log("nombre", form.name.value)
}



/*FUNCIONES YA CREADAS QUE SE UTILIZAN Y NO DEBERIAN DE SER MODIFICADAS */
function closeAside(){
    toogleAside("none")
}

function toogleAside(value) {
  var aside = document.querySelector("#aside");
  aside.style.display = value;
}
