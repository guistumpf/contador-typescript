let numero = 0;
function mais() {
    numero = numero + 1;
render()
}
function menos() {
    numero = numero - 1;
render()
}
function render() {
    const p = document.querySelector("p");
    p.innerText = numero.toString();
}
const mais1 = document.getElementById("btn-mais");
const menos1 = document.getElementById("btn-menos");
mais1.addEventListener("click", mais);
menos1.addEventListener("click", menos);
render();
export {};
//# sourceMappingURL=index.js.map