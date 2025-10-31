let numero: number = 0

function mais(){
    numero = numero + 1 
}
function menos(){
    numero = numero - 1 
}

function render(){
    const p: any = document.querySelector("p")
    p.innerText = numero 
}

const mais1: any = document.getElementById("btn-mais")
const menos1: any = document.getElementById("btn-menos")

mais1.addEventListener("click", mais)
menos1.addEventListener("click", menos)



render()