let celsius =  document.getElementById('inputcelsius')
let fahrenheit = document.getElementById('outputfahrenheit')


document.getElementById('converter').addEventListener("click", () => {
    let resultado = inputcelsius.value * 1.8 + 32
    console.log(resultado)

    document.getElementById("outputfahrenheit").value = `${resultado}`
})