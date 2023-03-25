

function cambia_de_pagina() {
    location.href = "list.html"
}


const list = JSON.parse(localStorage.getItem("listStudents"));


// function filtrado(){
//     let datosBusqueda = list.filter(function(Alumno){
//         return Alumno.Name=="Yunuen"
//     })
//     console.log(datosFiltrados);
// }

/////////////////////////////////////////////////////////////////////
//Selectors



// function filtrado(){
//     let datosFiltrados = list.filter(function(Alumno){
//         return Alumno.Name=="Yunuen"
//     })
//     console.log(datosFiltrados);
// }

/////////////////////////////////////////////////////////////////////
//Selectors
let Name = document.querySelector('#t2');
let lastName = document.querySelector('#t3');
let age = document.querySelector('#t4');
let subject = document.querySelector('#t5');
let group = document.querySelector('#t6');
let resultado = document.querySelector('.global-list')

function showlist(list){
     console.log(list)
}


///Datos de búsqueda

const datosBusqueda = {

    Name: '',
    lastName: '',
    age: '',
    subject: '',
    group: ''
}

document.addEventListener('DOMContentLoaded', () => {
    showlist(list);
});

//EventListener para formulario


Name.addEventListener('input', e => {
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});

lastName.addEventListener('input', e => {
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});

age.addEventListener('input', e => {
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});


subject.addEventListener('input', e => {
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});

group.addEventListener('input', e => {
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});



function cleanHTML() {

    //leer el elemento resultado

  

}

const contenedor = document.querySelector('#resultado');



//construir el componente de estudiante

list.forEach(student => {
    const studentHTML = document.createElement('p');
    studentHTML.innerHTML = `
    <p>${student.Name} ${student.lastName} - ${student.age} ${student.subject} ${student.group}</p>`;

    contenedor.appendChild(studentHTML);

})

//con resultado apuntar el DOM

resultado.forEach(student => {
    const studentHTML = document.createElement('p');
    studentHTML.innerHTML = `
    <p>${student.Name} ${student.lastName} ${student.subject} ${student.group}</p>`;

    contenedor.appendChild(studentHTML);
})


function noResultado() {

    cleanHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay resultados para su búsqueda'));
    document.querySelector('#resultado').appendChild(noResultado);
}



function filtrarEstudiante() {
    const resultado = list.filter(filtrarNombre).filter(filtrarApellidos).filter(filtrarEdad).filter(filtrarMateria).filter(filtrarGrupo);


    //console.log resultado

    if (resultado.length) {
        showlist(resultado);
    } else {
        noResultado();
    }


}


//Aplica los filtros

function filtrarNombre(student) {

    if(datosBusqueda.Name==''){
        return true //si todavia no hay un nombre en el filtro devuelve todos
    }

    return student.Name == datosBusqueda.Name;



}


function filtrarApellidos(student) {

    if(datosBusqueda.lastName==''){
        return true //si todavia no hay un nombre en el filtro devuelve todos
    }
    return student.lastName == datosBusqueda.lastName;
}



function filtrarEdad(student) {
    if(datosBusqueda.age==''){
        return true //si todavia no hay un nombre en el filtro devuelve todos
    }

    return student.age == datosBusqueda.age;


}

function filtrarMateria(student) {

    if(datosBusqueda.subject==''){
        return true //si todavia no hay un nombre en el filtro devuelve todos
    }

    return student.subject == datosBusqueda.subject;


}

function filtrarGrupo(student) {
    if(datosBusqueda.group==''){
        return true //si todavia no hay un nombre en el filtro devuelve todos
    }

    return student.group == datosBusqueda.group;


}
