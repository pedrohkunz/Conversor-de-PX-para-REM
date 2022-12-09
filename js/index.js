//Variáveis
let input =  document.getElementById('input')
let output = document.getElementById('output')
var rem = "rem";
let theme = new Boolean(false);
let botao  = document.getElementById("btn");
var img = document.querySelector("#img-btn");

//Fazer o cálculo

document.getElementById('converter').addEventListener("click", () => {
    let resultado = input.value / 16
    document.getElementById("output").value = `${resultado}${rem}`
    //console.log(resultado)
})

document.getElementById('clear').addEventListener("click", () => {
    document.getElementById("output").value = ``
    document.getElementById("input").value = ``
})

//Alterar imagem do botão

function clickbtn() {
    theme = !theme
    changeimg()
}

function changeimg(){
    if(theme == false){
        img.setAttribute('src', 'img/moon-fill.svg');
    }else{
        img.setAttribute('src', 'img/sun.svg');
    }
}

