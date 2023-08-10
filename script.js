let change = document.querySelector('#btn-change');
let upper = document.querySelector("#Upper");
let lower = document.querySelector("#kamay")

let text = document.querySelector("#text")
let yozuv = ''

change.addEventListener('click', function() {
    let idk = prompt("Yangi yozuvni kiriting");
    document.getElementById('text').innerHTML = idk;
});

upper.addEventListener('click', function() {    
    yozuv = text.innerHTML
    text.innerHTML = yozuv.toUpperCase()
});

lower.addEventListener('click', function() {
    yozuv = text.innerHTML
    text.innerHTML = yozuv.toLowerCase()
})