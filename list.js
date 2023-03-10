function cambia_de_pagina(){
    location.href= "list.html"
}


const list=JSON.parse(localStorage.getItem("listStudents"));


function filtrado(){
    let datosFiltrados = list.filter(function(Alumno){
        return Alumno.Name=="Yunuen"
    })
    console.log(datosFiltrados);
}

