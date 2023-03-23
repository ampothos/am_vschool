const addForm = document.addItem 
const shoppingList = document.getElementById("list")

function createNewListItem(itemName) {
    const listItem = document.createElement("li")
    const name = document.createElement("div")
    name.textContent = itemName

    const edit = document.createElement("button")
    edit.textContent = "Edit"
    edit.addEventListener("click", e => {
        const item = e.target.parentNode
        const uneditedItem = item.querySelector("div").textContent 

        const form = document.createElement("form")
        form.name = "editItem"

        const label = document.createElement("label")
        label.textContent = "Edit your item here:"
        label.for = "itemInput"

        const input = document. createElement("input")
        input.name = "itemInput"
        input.value = uneditedItem

        const submit = document.createElement("button")
        submit.textContent = "submit"

        form.appendChild(label)
        form.appendChild(input)
        form.appendChild(submit)
        form.addEventListener("submit", e => {
            e.preventDefault()
            const newItem = createNewListItem(e.target.itemInput.value)

            item.innerHTML = ""
            item.appendChild(newItem)
        })

        item.innerHTML = ""
        item.appendChild(form)
        console.log(form)
    })

    const x = document.createElement("button")
    x.textContent = "X"
    x.addEventListener("click", e => {
        e.target.parentNode.innerHTML = ""
    })

    listItem.appendChild(name)
    listItem.appendChild(edit)
    listItem.appendChild(x)

    return listItem
}

addForm.addEventListener("submit", e => {
    e.preventDefault()
    const itemName = e.target.title.value
    e.target.title.value = ""
    const newItem = createNewListItem(itemName)
    shoppingList.appendChild(newItem)
})

