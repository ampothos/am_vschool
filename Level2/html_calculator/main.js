const addForm = document.addForm;
const subtractForm = document.subtractForm;
const multiplyForm = document.multiplyForm;

addForm.addEventListener("submit", e => {
    e.preventDefault()
    let num1 = addForm.num1.value;
    let num2 = addForm.num2.value;
    addForm.num1.value = "";
    addForm.num2.value = "";
    const result = num1 + num2;

    const resultElement = document.createElement("div");
    resultElement.textContent = result;
    resultElement.classList.add("result");

    addForm.parentElement.append(resultElement);
})


subtractForm.addEventListener("submit", e => {
    e.preventDefault()
    let num1 = subtractForm.num1.value;
    let num2 = subtractForm.num2.value;
    subtractForm.num1.value = "";
    subtractForm.num2.value = "";
    const result = num1 - num2;

    const resultElement = document.createElement("div");
    resultElement.textContent = result;
    resultElement.classList.add("result");

    subtractForm.parentElement.append(resultElement);
})


multiplyForm.addEventListener("submit", e => {
    e.preventDefault()
    let num1 = multiplyForm.num1.value;
    let num2 = multiplyForm.num2.value;
    multiplyForm.num1.value = "";
    multiplyForm.num2.value = "";
    const result = num1 * num2;

    const resultElement = document.createElement("div");
    resultElement.textContent = result;
    resultElement.classList.add("result");

    multiplyForm.parentElement.append(resultElement);
})