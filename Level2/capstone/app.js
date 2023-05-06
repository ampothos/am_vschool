function createCheckbox(item) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", e => {
        e.preventDefault()
        let axiosJson;
        if (checkBox.checked) {
            axiosJson = {'completed' : true};
        }
        else {
            axiosJson = {'completed' : false};
        }
        axios.put(`https://api.vschool.io/alainna/todo/${item._id}`, axiosJson).then(res => getTodos()).catch(error => console.log(error));
    });
    return checkBox;
}

function createDelete(item) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete')
    deleteButton.addEventListener('click', e => {
        e.preventDefault();
        axios.delete(`https://api.vschool.io/alainna/todo/${item._id}`).then(res => getTodos()).catch(err => console.log(err));
    });
    return deleteButton;
}

function createEdit(item) {
    const edit = document.createElement('button');
    edit.textContent = 'Edit';
    edit.classList.add('edit');
    edit.addEventListener('click', e => {
        e.preventDefault();
        const li = edit.parentElement
        console.log(li)
        while(li.firstChild) {
            li.removeChild(li.firstChild);
        }
        const form = document.createElement('form');
        form.classList.add('editForm');

        const title = document.createElement('input');
        title.type = 'text';
        title.name = 'title';
        title.value = item.title;
        title.classList.add('inputs');
        
        const price = document.createElement('input');
        price.type = 'number';
        price.name = 'price';
        price.placeholder = 'Price'
        price.value = item.price;
        price.classList.add('inputs');

        const description  = document.createElement('textarea');
        description.name = 'description';
        description.value = item.description;
        description.placeholder = 'Description'
        description.classList.add('inputs');
        
        const imgUrl = document.createElement('input');
        imgUrl.type = 'text';
        imgUrl.name = 'imgUrl';
        imgUrl.placeholder = 'Image URL';
        imgUrl.value = item.imgUrl;
        imgUrl.classList.add('inputs');

        const submit = document.createElement('button');
        submit.type = 'submit';
        submit.name = 'submit';
        submit.classList.add('inputs');
        submit.textContent = 'Save'

        form.append(title, price, description, imgUrl, submit);

        li.append(form);

        form.addEventListener("submit", e => {
            e.preventDefault();
            const putObject = {title : title.value,
                            price : price.value,
                            description: description.value,
                            imgUrl: imgUrl.value}

            axios.put(`https://api.vschool.io/alainna/todo/${item._id}`, putObject).then(res => getTodos()).catch(err => console.log(err));
        })
    })
    return edit;
}

function clearTodos() {
    const parent = document.getElementById("todos");

    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//in: (any type) part of todo object, string HTML element type, parent object
//creates specified element and appends to the parent element
function createAndAppend(component, elementType, parent) {
    const newElem = document.createElement(elementType);
    if (elementType == 'img') {
        newElem.src = component;
    }
    else {
        newElem.textContent = component;
    }
    parent.append(newElem);
}

//in: array of todo objects
//loops through objects, creates element for each, appends to list item, strikethrough if completed, adds list item to dom
function displayTodos(todoArray) {
    clearTodos();
    for(let item of todoArray) {
        const listItem = document.createElement('li');
        listItem.classList.add('listItem');

        const checkBox = createCheckbox(item);
        listItem.append(checkBox);

        createAndAppend(item.title, 'h4', listItem);
        if (item.description) {
            createAndAppend(item.description, 'div', listItem);
        }
        if (item.price) {
            createAndAppend(`$${item.price}`, 'div', listItem);
        }
        if (item.imgUrl) {
            createAndAppend(item.imgUrl, 'img', listItem);
        }
        if (item.completed) {
            listItem.classList.add('strikethrough');
            checkBox.checked = true;
        }
        else {
            listItem.classList.remove('strikethrough');
            checkBox.checked = false;
        }
        const deleteButton = createDelete(item);
        listItem.append(deleteButton);

        const editButton = createEdit(item);
        listItem.append(editButton);

        document.getElementById("todos").append(listItem);  
    }
}

//axios query, retrieves and displays todos on the dom
function getTodos() {
    axios.get('https://api.vschool.io/alainna/todo').then(response => {displayTodos(response.data)}).catch(error => {console.log(error)});
}

const addForm = document.addForm;

addForm.addEventListener("submit", e => {
    e.preventDefault();
    
    const todoObject = {'title' : addForm.title.value,
                        'price' : addForm.price.value,
                        'description' : addForm.description.value,
                        'imgUrl' : addForm.img.value}

    for (let element of addForm) {
        element.value = "";
    }
    
    axios.post('https://api.vschool.io/alainna/todo', todoObject).then(response => getTodos()).catch(error => console.log(error));
});



getTodos();