import React from "react"

const [color, setColor] = useState("pink")

setColor("blue")

setColor(prevState => {
    return (prevState === "blue" ? "pink" : "blue")
})

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prevState => {
    return (prevState.push({
            firstName: "David",
            lastName: "Shugars"
    }))
})

const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => [...prevColors, "green"]
)

const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState => {count: prevState.count + 1})

const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith"
})

setPerson(prevState => {
    return {...prevState,
            age : 30}
})

const [colors, setColors] = useState(["pink", "blue"])

setColors(prevState => prevState.push("green"))
