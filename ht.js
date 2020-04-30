const table = document.querySelector('table');
const trArr = table.rows;

let data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
 ];
 for (let i=0; i<data.length; i++) {
    let tdArr = trArr[i+1].cells;
    tdArr[data.length-3].innerHTML=data[i].firstName;
    tdArr[data.length-2].innerHTML=data[i].lastName;
    tdArr[data.length-1].innerHTML=data[i].age;
 }
