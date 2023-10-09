import React from "react" 

export default function AddBountyForm(props) {
    const initInputs = {firstName : props.firstName || "",
                        lastName : props.lastName || "",
                        living : props.living || false,
                        bounty : props.bounty || 0, 
                        type : props.type || ""}
    
    const [inputs, setInputs] = React.useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name] : value}))
    }

    function toggleCheck(e) {
        const {name, checked} = e.target
        setInputs(prev => ({...prev, [name] : checked}))
    }

    function handleSubmit(e) {
        e.preventDefault() 
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <input 
                    type = "text"
                    name = "firstName"
                    value = {inputs.firstName}
                    onChange = {handleChange}
                    placeholder = "First Name"/>               
                <input 
                    type = "text"
                    name = "lastName"
                    value = {inputs.lastName}
                    onChange = {handleChange}
                    placeholder = "Last Name"/>
                <label htmlFor="living">Living: </label>
                <input 
                    type = "checkbox"
                    name = "living"
                    checked = {inputs.living}
                    onChange = {toggleCheck}
                    />
                <input 
                    type = "text"
                    name = "type"
                    value = {inputs.type}
                    onChange = {handleChange}
                    placeholder = "Type (Sith or Jedi)"/>
                 <input 
                    type = "number"
                    name = "bounty"
                    value = {inputs.bounty}
                    onChange = {handleChange}
                    placeholder = "Bounty"/>
                <button className="form-submit">{props.buttonText}</button>
            </form>
        </div>
    )
}