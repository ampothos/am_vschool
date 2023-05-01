const prices = {goombas: 5,
                bobombs: 7,
                cheepcheeps: 11};

const form = document.pestForm;
form.addEventListener("submit", e => {
    e.preventDefault();
    let results = {goombas: form.goombas.value * prices.goombas,
                bobombs: form.bobombs.value * prices.bobombs,
                cheepcheeps: form.cheepcheeps.value * prices.cheepcheeps};
    
    const total = results.goombas + results.bobombs + results.cheepcheeps;

    let wrapper = document.createElement("div");
    wrapper.classList.add("invoice");

    let invoiceTitle = document.createElement("h3");
    invoiceTitle.textContent = "Invoice for Princess Pea";

    let goombasItem = document.createElement("div");
    goombasItem.textContent = `${form.goombas.value} Goombas: ${results.goombas} coins`;

    let bobombsItem = document.createElement("div");
    bobombsItem.textContent = `${form.bobombs.value} Bob-ombs: ${results.bobombs} coins`;

    let cheepcheepsItem = document.createElement("div");
    cheepcheepsItem.textContent = `${form.cheepcheeps.value} Cheep-cheeps: ${results.cheepcheeps} coins`;

    let finalTotal = document.createElement("div");
    finalTotal.textContent = `Total owed: ${total} coins`;
    finalTotal.classList.add("total");

    //create header element "invoice for princess pea"
    //Itemized bill of divs
    //resulting total 
    //datetime? 
    //encapsulated in a box (border on div wrapper)
    form.goombas.value = "";
    form.bobombs.value = "";
    form.cheepcheeps.value = "";

    wrapper.append(invoiceTitle);
    wrapper.append(goombasItem);
    wrapper.append(bobombsItem);
    wrapper.append(cheepcheepsItem);
    wrapper.append(finalTotal);
    
    document.getElementById("grid").append(wrapper);
})  