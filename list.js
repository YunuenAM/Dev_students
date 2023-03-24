const students =[
    {
        Name: 'Juan',
        lastName: 'Valderas' ,
        age: 23 ,
        subject: 'Español',
        group: '1-A'
    
    },
    
    {
        Name: 'Juana',
        lastName: 'Valencia' ,
        age: 30 ,
        subject: 'Programación',
        group: '2-A'
    
    },
    
    {
        Name: 'Yunuen',
        lastName: 'Acosta' ,
        age: 31 ,
        subject: 'Ciencias de la Computación',
        group: '3-B'
    
    },
    
    ]

function cambia_de_pagina(){
    location.href= "list.html"
}


const list=JSON.parse(localStorage.getItem("listStudents"));


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
let Name =  document.querySelector('#t2');
let lastName = document.querySelector('#t3');
let age = document.querySelector('#t4');
let subject = document.querySelector('#t5');
let group = document.querySelector('#t6');


///Datos de búsqueda

const datosBusqueda = {

    Name : '',
    lastName: '',
    age: '',
    subject: '',
    group: ''
}

document.addEventListener('DOMContentLoaded', () =>{
    showStudents(list);
});

//EventListener para formulario


Name.addEventListener('input', e=>{
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});

lastName.addEventListener('input', e=>{
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});

age.addEventListener('input', e=>{
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});


subject.addEventListener('input', e=>{
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});

group.addEventListener('input', e=>{
    datosBusqueda.Name = e.target.value;

    //Mando llamar a la función filtrar
    filtrarEstudiante();
});



function cleanHTML(){

    //leer el elemento resultado

    const contenedor = document.querySelector('#resultado');


}


//construir el componente de estudiante

    students.forEach(student => {
    const studentHTML = document.createElement('p');
    studentHTML.innerHTML = `
    <p>${student.Name} ${student.lastName} - ${student.age} ${student.subject} ${student.group}</p>`;

    contenedor.appendChild(studentHTML);

})


function noResultado(){
    
    cleanHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay resultados para su búsqueda'));
    document.querySelector('#resultado').appendChild(noResultado);
}



function filtrarEstudiante() {
    const resultado = students.filter(filtrarNombre).filter(filtrarApellidos).filter(filtrarEdad).filter(filtrarMateria).filter(filtrarGrupo);


    //console.log resultado

if(resultado.length){
    showStudents(resultado);
}else{
    noResultado();
}


}


//Aplica los filtros

function filtrarNombre(student){
    if(datosBusqueda.Name){
        return student.Name === datosBusqueda.Name;
    }
    return student;

}


function filtrarApellidos(student){
    if (datosBusqueda.lastName){
        return student.lastName === datosBusqueda.lastName;
    }
    return student;
}

function filtrarEdad(student){
    if(datosBusqueda.age){
        return student.age === datosBusqueda.age;
    }
    return student;
}

function filtrarMateria(student){
    if(datosBusqueda.subject){
        return student.subject === datosBusqueda.subject;
    }
    return student;
}

function filtrarGrupo(student){
    if(datosBusqueda.group){
        return student.group === datosBusqueda.group;
    }
    return student;
}
