class Student{
    constructor( Name,lastName,age,subject,group){
     
      this.Name = Name
      this.lastName = lastName
      this.age = age
      this.subject = subject
      this.group = group
     
    }

    calculateAverage() {

      this.average = (this.note1 + this.note2 + this.note3) /3;


    if(this.average >8){
     return("<span class='green'>Approved</span>" )
    }else{
      return ("<span class='red'>Not Approved</span>")
    }
    return(this.average >8);

  }


  componente(){
    return `
    <div style='background-color:${(this.average>7)?" #FFE521": "#FFE521"};border: 1px solid ${(this.average>7)?"#FFE521": "#FFE521"}'>
        <h4>${this.Name} </br> ${this.lastName} </br>  ${this.age}  </br>  ${this.subject} </br>  ${this.group} </h4>
        
     
        
      
    </div>
    `
  }
}





const list = [
    new Student("Yunuen", "Acosta",20,"Spanish 2", "Group 1-A"),
    new Student ("Carlos", "Peralta", 30, "Programming 3", "Group 2-B"),
    new Student ("Fátima", "Fernández",40, "Algebra",  "Group 3-C")
]





        let DB;
    
        const formulario = document.querySelector('#formulario');
    
        document.addEventListener('DOMContentLoaded', () => {
            formulario.addEventListener('submit', validarEstudiante);
    
            conectarDB();
        });
    
        function conectarDB() {
            // ABRIR CONEXIÓN EN LA BD:
    
            let abrirConexion = window.indexedDB.open('crm', 1);
    
            // si hay un error, lanzarlo
            abrirConexion.onerror = function() {
                console.log('Hubo un error');
            };
        
            // si todo esta bien, asignar a database el resultado
            abrirConexion.onsuccess = function() {
                // guardamos el resultado
                DB = abrirConexion.result;
            };
        }
    
    function validarEstudiante(e){
        e.preventDefault();
    
    
        const Name = document.querySelector("#t2").value;
        const lastName = document.querySelector("#t3").value;
        const age = document. querySelector("#t4").value;
        const subject = document.querySelector("#t5").value;
        const group = document.querySelector("#t6").value;
    
         if (Name ===" " || lastName === "" || age === ""||subject===""|| group==="" ){
            return;
         }
    
    
        const Student = {
    
            Name,
            lastName,
            age,
            subject,
            group
    
        };
    
        //Generar un ID único
    
        Student.id = Date.now();
    
           crearNuevoEstudiante(Student);
    }
    
    function crearNuevoEstudiante(Student){
        //nuevo
    
        const transaction = DB.transaction(["crm"], "readwrite");
        const objectStore = transaction.objectStore("crm");
        
        objectStore.add(Student);
    
        transaction.oncomplete = () =>{
            console.log("estudiante agregado");
    
            //Mostrar mensaje que todo está bien
            imprimirAlerta ("Se agregó correctamente");
    
            setTimeout(() =>{
                window.location.href ="index.html";
            }, 3000);
        };
    
        transaction.onerror = ()=> {
            console.log("Hubo un error!");
            imprimirAlerta("Hubo un error");
        };
    }
    
    function imprimirAlerta(mensaje,tipo){
    
        //Crear div
    
        const divMensaje = document.createElement('div');
        divMensaje.classList.add( "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center" );
    
        if(tipo === 'error') {
           divMensaje.classList.add('bg-red-100', "border-red-400", "text-red-700");
        } else {
            divMensaje.classList.add('bg-green-100', "border-green-400", "text-green-700");
        }
        
        // Mensaje de error
        divMensaje.textContent = mensaje;
    
        // Insertar en el DOM
       formulario.appendChild(divMensaje);
    
        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
    }
    
  
    
    

//////////////////////////////////////////

// //Send button
//Por cada botón agregar addEventListener
const sendButton = document.getElementById("#send-note");
let button = document.querySelectorAll(".button-check")
button.forEach((button)=>{
  button.addEventListener ("click",()=>{
    let students = " "
    let componente = ""
    // alert("Hola");

    try{
      prevRes =  parseInt(document.querySelector(`#` + button.dataset.id).value);
       {
         
        }

    
            students =  ( prevRes  >=8 ) ? "<span class='green'>Approved</span>" :"<span class='red'> Not Approved</span>"
           }catch(e) {
              result = "Enter a valid number";
             info = "Please enter a valid number"
             console.log(e)
         }

        let Name = document.querySelector("#t2").value;
        let lastName = document.querySelector("#t3").value;
        let age = document.querySelector("#t4").value;
        let subject = document.querySelector("#t5").value;
        let group = document.querySelector("#t6").value;


         openModal (students,componente);
         let divisionStudents =document.querySelector("#globalList");

         let student = new Student (Name,lastName,age, subject, group);
         student.calculateAverage();
         list.push(student)
         divisionStudents.innerHTML+=student.componente();
         localStorage.setItem("listStudents",JSON.stringify(list));
    

        })
         
})




const openModal = (ap,i)=>{
document.querySelector(".global-list").innerHTML = ap




}

        







