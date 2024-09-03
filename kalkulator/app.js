const txtTall1 = document.querySelector("#Tall1")
const txtTall2 = document.querySelector("#Tall2")
const btnPluss = document.querySelector("#Pluss")
const btnMinus = document.querySelector("#Minus")
const btnGange = document.querySelector("#Gange")
const btnDele = document.querySelector("#Dele")
const svarDiv = document.querySelector("#Div")

btnPluss.onclick = () => {
    let Tall1 = Number(txtTall1.value);
    let Tall2 = Number(txtTall2.value);

    let sum = Tall1 + Tall2

    svarDiv.innerHTML = sum;
}

btnMinus.onclick = () => {
    let Tall1 = Number(txtTall1.value);
    let Tall2 = Number(txtTall2.value);

    let sum = Tall1 - Tall2

    svarDiv.innerHTML = sum;
}

btnGange.onclick = () => {
    let Tall1 = Number(txtTall1.value);
    let Tall2 = Number(txtTall2.value);

    let sum = Tall1 * Tall2

    svarDiv.innerHTML = sum;
}

btnDele.onclick = () => {
    let Tall1 = Number(txtTall1.value);
    let Tall2 = Number(txtTall2.value);

    let sum = Tall1 / Tall2

    svarDiv.innerHTML = sum;
}