document.addEventListener('DOMContentLoaded', function (){
    sumar();

    restar();

    multiplicar();

    dividir();
});

function sumar() {
    const suma = document.querySelector(".sumar");

    suma.addEventListener("click", function() {
        document.getElementById("signo").innerHTML = "+"

        const n1 = document.getElementById("n1");
        const n2 = document.getElementById("n2");        

        const resultado = parseInt(n1.value) +  parseInt(n2.value);

        document.getElementById("resultado").value = resultado;

    });
}

function restar() {
    const resta = document.querySelector(".restar");

    resta.addEventListener('click', function() {
        document.getElementById("signo").innerHTML = "-"

        const n1 = document.getElementById("n1");
        const n2 = document.getElementById("n2");        

        const resultado = parseInt(n1.value) -  parseInt(n2.value);

        document.getElementById("resultado").value = resultado;        
    });
}

function multiplicar() {
    const multi = document.querySelector(".multiplicar");

    multi.addEventListener('click', function() {
        document.getElementById("signo").innerHTML = "*"

        const n1 = document.getElementById("n1");
        const n2 = document.getElementById("n2");        

        const resultado = parseInt(n1.value) *  parseInt(n2.value);

        document.getElementById("resultado").value = resultado;          
    });
}

function dividir() {
    const div = document.querySelector(".dividir");

    div.addEventListener('click', function() {
        document.getElementById("signo").innerHTML = "/"

        const n1 = document.getElementById("n1");
        const n2 = document.getElementById("n2");        

        const resultado = parseInt(n1.value) /  parseInt(n2.value);

        document.getElementById("resultado").value = resultado;           
    });
}
