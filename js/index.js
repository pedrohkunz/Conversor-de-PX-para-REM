//Variáveis

let input =  document.getElementById('input')
let output = document.getElementById('output')
let theme = new Boolean(false);
let botao  = document.getElementById("btn");
var img = document.querySelector("#img-btn");
var rem = "rem";

//Realiza o Cálculo

document.getElementById('converter').addEventListener("click", () => {
    let resultado = input.value / 16
    document.getElementById("output").value = `${resultado}${rem}`
    
})

// Limpa o formulário

document.getElementById('clear').addEventListener("click", () => {
    document.getElementById("output").value = ``
    document.getElementById("input").value = ``
})


