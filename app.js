//Selectors

const Name = document.querySelector ('#Name');
const lastName = document.querySelector('#lastName');
const age = document.querySelector('#age');
const subject = document.querySelector('#subject');
const group = document.querySelector('#group');

//Data for the searching

const searchingData = { //Valores true & false

    Name: '',
    lastName: '',
    age: '',
    subject: '',
    group: ''

}

document.addEventListener('DOMContentLoaded',()=>{
    showStudents(students);
});

//EventListener to form

Name.addEventListener('input', e=>{
    searchingData.Name = e.target.value;

    //To call the function to filter the data
    filterStudent();
});

lastName.addEventListener('input', e =>{
    searchingData.lastName = e.target.value;

    filterStudent();
});

age.addEventListener('input', e=>{
    searchingData.age = e.target.value;
    filterStudent();
});

subject.addEventListener('input', e=>{
    searchingData.subject = e.target.value;
    filterStudent();
});

group.addEventListener('input', e=>{
    searchingData.group = e.target.value;
    filterStudent();

});

//Functions

function clearHTML(){
    //to read the result
    const container = document.querySelector('#result');

    //to clear the previous results

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function showStudents(students){
    clearHTML();

    //To read the result
    const container = document.querySelector('#result');

    //To construct the students HTML

    students.forEach(student =>{
        const studentHTML = document.createElement('p');
        studentHTML.innerHTML = `
        <p>${student.Name} ${student.lastName} ${student.age} ${student.subject} ${student.group}</p>`;

        container.appendChild(studentHTML);
    })
}

function noResult(){
    clearHTML();

    const noResult = document.createElement('div');
    noResult.classList.add('alert', 'error');
    noResult.appendChild(document.createTextNode('No results found'));
    document.querySelector('#result').appendChild(noResult);
}

function filterStudent(){
    const result = students.filter(filterName).filter(filterLastName).filter(filterAge).filter(filterSubject).filter(filterGroup);

    if (result.length){
        showStudents(result);
    
    }else{
        noResult();
    }
}

//To apply filters

function filterName(student){
    if(searchingData.Name){
        return student.Name ==searchingData.Name;
    }return student;
}

function filterLastName(student){
    if(searchingData.lastName){
        return student.lastName ==searchingData.lastName;
    } return(student);
}

function filterAge(student){
    if(searchingData.age){
        return student.age == searchingData.age;
    } return(student);
}

function filterSubject(student){
    if(searchingData.subject){
        return student.subject ==searchingData.subject;

    } return (student);
}

function filterGroup(student){
    if (searchingData.group){
        return student.group == searchingData.group;
    }return(student);
}