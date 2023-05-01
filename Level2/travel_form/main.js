const form = document.travelForm;

form.addEventListener("submit", e => {
    e.preventDefault();

    let customer = {firstName: form.firstName.value,
                    lastName: form.lastName.value,
                    age: form.age.value,
                    gender: form.gender.value,
                    location: form.location.value,
                    diet: []};

    let checkedBoxes = document.querySelectorAll("input[name=dietary]:checked");

    for (var x of checkedBoxes) {
        customer.diet.push(' ' + x.value);
    }
    
    alert(`Roulette Airlines
            First Name: ${customer.firstName}
            Last Name: ${customer.lastName}
            Age: ${customer.age}
            Gender: ${customer.gender}
            Location: ${customer.location}
            Dietary Restrictions: ${customer.diet}
            Good luck!`);
})