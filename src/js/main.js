'use strict'

// Variables
let coursesEl = document.getElementById('courses');
let addButton = document.getElementById('addButton');
let updateDiv = document.getElementById('updateDiv');
let code = document.getElementById('code');
let name = document.getElementById('name');
let prog = document.getElementById('prog');
let plan = document.getElementById('plan');



// Eventlisteners
window.addEventListener('load', getCourses);
addButton.addEventListener('click', addCourse);

function getCourses() {
    coursesEl.innerHTML = '';
    // Call
    fetch('http://localhost:8888/moment5/api/read.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(courses => {
                coursesEl.innerHTML +=
                    `<div class="course"><p class="one">${courses.code} </p>
            <p class="two"> ${courses.name} </p>
            <p class="three"> ${courses.progression} </p>
            <a class="four" href="${courses.coursesyllabus}" target="_blank">Länk till kurs</a>
            <button id="${courses.id}" onClick="deleteCourse(${courses.id})">Radera</button>
            <button id="${courses.id}" onClick="getOneToUpdate(${courses.id})">Uppdatera</button></div>`;
            });
        })
}

function deleteCourse(id) {
    fetch('http://localhost:8888/moment5/api/delete.php?id=' + id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}

function addCourse() {
    code = code.value;
    name = name.value;
    prog = prog.value;
    plan = plan.value;

    let courses = { 'code': code, 'name': name, 'progression': prog, 'coursesyllabus': plan };

    fetch('http://localhost:8888/moment5/api/create.php', {
            method: 'POST',
            body: JSON.stringify(courses)
        })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
        })

}


function getOneToUpdate(id) {
    // Call
    fetch('http://localhost:8888/moment5/api/read_one.php?id=' + id)
        .then(response => response.json())
        .then(updateDiv.style.display = 'block')
        .then(courses => {
            updateDiv.innerHTML +=
                `<form method="get">
            <label for="code">Kurskod</label>
            <input type="text" name="code" id="newcode" value="${courses.code}"> <br>
            <label for="name">Kursnamn</label>
            <input type="text" name="name" id="newname" value="${courses.name}"> <br>
            <label for="prog">Nivå</label>
            <input type="text" name="prog" id="newprog" value="${courses.progression}"> <br>
            <label for="plan">Kursplan</label>
            <input type="text" name="plan" id="newplan" value="${courses.coursesyllabus}"> <br>
            <input type="submit" id="updateButton" onClick="updateCourse(${courses.id})" value="Uppdatera kurs"> <br>      
            <input type="submit" id="closeButton" onClick="closeDiv()" value="Avbryt">
            </form>`
        })
}

//closeDiv = () => {updateDiv.style.display = 'none'};

function updateCourse(id) {

    let newcode = document.getElementById('newcode');
    let newname = document.getElementById('newname');
    let newprog = document.getElementById('newprog');
    let newplan = document.getElementById('newplan');

    newcode = newcode.value;
    newname = newname.value;
    newprog = newprog.value;
    newplan = newplan.value;

    let course = { 'id': id, 'code': newcode, 'c_name': newname, 'progression': newprog, 'coursesyllabus': newplan };

    fetch('http://localhost:8888/moment5/api/update.php?id=' + id, {
            method: 'PUT',
            body: JSON.stringify(courses)
        })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        .catch(error => {
            console.log('Error: ', error);
        })

}