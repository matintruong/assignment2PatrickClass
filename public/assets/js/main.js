
const toggle = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".container");

toggle.addEventListener("click", function(){
  console.log("show menu");
  menu.classList.toggle("active");
});

/* const xhr = new XMLHttpRequest();
xhr.addEventListener('load', function () {
    try {
        console.log(JSON.parse(this.responseText));
    } catch (error) {
        console.log(`Broken ;( ${error}`)
    }
});
xhr.open('GET', 'assets/data/data.json');
xhr.send(); */

/* fetch('assets/data/data.json')
    .then(response => response.json())
    .then(data => console.log(data))
    // .catch(error => console.log('Broken ;( ' + error));
    .catch(error => console.log(`Broken ;( ${error}`)); */


// fetch ('assets/data/data.json')
//     .then(response => response.json())
//     .then(data => {console.log(data)
//         document.querySelector('#demo').innerText = data.name
//     })
    
const button = document.querySelector('#btn');
const btn = document.querySelector('#button');

var demo = document.querySelector('.demo');
var test = document.querySelector('.test');

// first button
button.addEventListener('click', function(){

    if (demo.classList.contains('show')) {
        demo.classList.remove('show');
    } else {
        demo.classList.add('show');
    }
    
    fetch('assets/data/data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            var str = '<ul>';

            data.forEach(item => {
                console.log(item);
                str += '<li>' + "Name:" + item.name +"<br>" + "Age: " + item.Age + '</li>'
            });

            str += '</ul>';

            document.querySelector('.demo').innerHTML = str;
        })
        .catch(error => console.log(error));
})
