const txtTall1 = document.querySelector("#Tall1")
const txtTall2 = document.querySelector("#Tall2")
const btnPluss = document.querySelector("#Pluss")
const svarDiv = document.querySelector("#Div")

btnPluss.onclick = () => {
    let Tall1 = Number(txtTall1.value);
    let Tall2 = Number(txtTall2.value);

    let sum = Tall1 + Tall2

    svarDiv.innerHTML = sum;
}

