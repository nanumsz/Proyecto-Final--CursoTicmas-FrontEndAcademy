//////////////////////////////////////////
// DATOS CV
//////////////////////////////////////////

//JSON persona
const persona = {
    nombre:"Eleanor",
    apellido:"Coleman",
    txtPresentacion:"Profesional en el mundo IT con más de 5 años de experiencia.",
    dni:"12.345.678",
    fNacimiento:"12/2/1984", //hacer date despues
    domicilio:"Saddle Street 3538",
    ciudad:"San Francisco",
    telefono:"(321) 965-2010",
    email:"eleanor.coleman@example.com",
    redes:{
        red:["linkedin", "facebook", "twitter"],
        link:["https://www.linkedin.com/in/eleanor-coleman", "https://www.facebook.com/e.coleman", "https://www.twitter.com/E.Coleman"] 
    },
    foto: {
        source:"https://randomuser.me/api/portraits/women/76.jpg",
        txtAlt:"Foto de Perfil de Eleanor Coleman"
    }
};


// EXPERIENCIA:
const experiencia1 = {
    fechaInicio:"2017",
    fechaFin:"2019",
    puesto:"Desarrollador Jr.",
    lugar:"Consultoria Mandarina",

    tareas: ["1Lorem ipsum dolor sit amet.", "Consectetur adipiscing elit.", "Quisque vel dictum orci."]
};

const experiencia2 = {
    fechaInicio:"2019",
    fechaFin:"2021",
    puesto:"Desarrollador Web",
    lugar:"Studio Infinit",

    tareas: ["2Lorem ipsum dolor sit amet.", "Consectetur adipiscing elit.", "Quisque vel dictum orci."]
};

const experiencia3 = {
    fechaInicio:"2021",
    fechaFin:"Actualidad",
    puesto:"Programador Web",
    lugar:"Banco Pepito",

    tareas: ["3Lorem ipsum dolor sit amet.", "Consectetur adipiscing elit.", "Quisque vel dictum orci."]
};


//HABILIDADES
const habilidades = {
    aptitudes: ["Trabajo en equipo", "Iniciativa", "Resolución de problemas", "Comunicaciónn efectiva."],

    conocimientosAreas: ["HTML, CSS, JS", "PHP", "MySQL", "Bootstrap"],
    conocimientosNiveles: ["5", "4", "3", "3"], // valores sobre 5

    idiomas: ["Ingles", "Frances"],
    idiomasNiveles: ["intermedio-avanzado", "intermedio"]
};


//////////////////////////////////////////
// FUNCIONALIDADES CV
//////////////////////////////////////////

function cargarExperiencia (experiencia, idContenedor) {
    
    let periodo = experiencia.fechaInicio + " - " + experiencia.fechaFin ;  
    console.log(periodo);
    document.getElementById(idContenedor).getElementsByClassName("fechaExp").item(0).innerHTML = periodo;
    
    document.getElementById(idContenedor).getElementsByClassName("puestoExp").item(0).innerHTML = experiencia.puesto;
    document.getElementById(idContenedor).getElementsByClassName("lugarExp").item(0).innerHTML = experiencia.lugar;
    
    for (let i = 0; i < experiencia.tareas.length; i++){
        let li = document.createElement("li"); 
        document.getElementById(idContenedor).getElementsByTagName("ul")[0].appendChild(li);                          
        
        li.innerHTML = experiencia.tareas[i];

        console.log("se ha cargado la tarea " + (i+1));
    };    
};

function cargarDatosCV() {
    console.log("Inicio de carga de datos de CV");

    // Header
    document.getElementById("fotoCV").src = persona.foto.source;
    document.getElementById("fotoCV").alt = persona.foto.txtAlt;

    document.getElementById("nombreCV").innerHTML = persona.nombre + " " + persona.apellido;

    document.getElementById("txtPresentacionCV").innerHTML = persona.txtPresentacion;
    
    // Info Personal
    document.getElementById("dniCV").innerHTML = persona.dni;
    document.getElementById("fNacimientoCV").innerHTML = persona.fNacimiento;

    document.getElementById("domicilioCV").innerHTML = persona.domicilio;
    document.getElementById("ciudadCV").innerHTML = persona.ciudad;
    document.getElementById("telCV").innerHTML = persona.telefono;
    document.getElementById("emailCV").innerHTML = persona.email;

    // Experiencia
    cargarExperiencia(experiencia1, "experiencia1CV");
    console.log("Se ha cargado la experiencia 1");
    
    cargarExperiencia(experiencia2, "experiencia2CV");
    console.log("Se ha cargado la experiencia 2");
    
    cargarExperiencia(experiencia3, "experiencia3CV");
    console.log("Se ha cargado la experiencia 3");
    
    // Habilidades
        //Aptitudes
        for (let i = 0; i < habilidades.aptitudes.length; i++){
            let li = document.createElement("li"); 
            document.getElementById("listaAptitudes").appendChild(li);                          
            
            li.innerHTML = habilidades.aptitudes[i];
    
            console.log("se ha cargado la aptitud " + (i+1));
        }; 
    
        console.log("Se han cargado las aptitudes");

        //Conocimientos        
        for (let i = 0; i < habilidades.conocimientosAreas.length; i++){
            let tr = document.createElement("tr"); 
            document.getElementById("tablaConocimientos").appendChild(tr);                          
            
            let td = document.createElement("td");
            td.innerHTML = habilidades.conocimientosAreas[i];            
            tr.appendChild(td);    

            let nivel = parseInt(habilidades.conocimientosNiveles[i]);
            for (let n = 0; n < nivel; n++) {
                let tdN = document.createElement("td");
                tr.appendChild(tdN);    
            };
    
            console.log("se ha cargado el conocimiento " + (i+1));
        }; 

        console.log("Se han cargado los conocimientos");

        //Idiomas        
        for (let i = 0; i < habilidades.idiomas.length; i++){
            let tr = document.createElement("tr"); 
            document.getElementById("tablaIdiomas").appendChild(tr);                          
            
            let td = document.createElement("td");
            td.innerHTML = habilidades.idiomas[i];            
            tr.appendChild(td);

            let tdN = document.createElement("td");
            tdN.innerHTML = habilidades.idiomasNiveles[i];            
            tr.appendChild(tdN); 
    
            console.log("se ha cargado el idioma " + (i+1));
        }; 

        console.log("Se han cargado los idiomas");


    console.log("Fin de carga de datos")
};

cargarDatosCV(document.persona);


//////////////////////////////////////////
// EVENTOS
//////////////////////////////////////////

function btnMostrar(idExp) {
    let contenedor = document.getElementById(idExp).getElementsByClassName("contenedorTareasOculto")[0];

    if(document.getElementById(idExp).getElementsByClassName("ver+")[0].innerHTML == "Ver más") {
        contenedor.style = "display:block";
        document.getElementById(idExp).getElementsByClassName("ver+")[0].innerHTML = "Ver menos";
    } else {
        contenedor.style = "display:none";
        document.getElementById(idExp).getElementsByClassName("ver+")[0].innerHTML = "Ver más";
    };
};

document.getElementById("experiencia3CV").getElementsByClassName("ver+")[0].addEventListener('click', function() {
    btnMostrar("experiencia3CV");  
});

document.getElementById("experiencia2CV").getElementsByClassName("ver+")[0].addEventListener('click', function() {
    btnMostrar("experiencia2CV");  
});

document.getElementById("experiencia1CV").getElementsByClassName("ver+")[0].addEventListener('click', function() {
    btnMostrar("experiencia1CV");  
});