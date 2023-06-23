import React from "react" 

export default function BadgeForm(props) { 
    function handleChange(event) {
        const name = event.target.name 
        const value = event.target.value
        props.setFormData(prevData => {
            return ({...prevData,
                    [name] : value})
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.setBadges(prev => {
            return ([...prev, 
                      props.formData])
            })
        props.setFormData({
                firstname : "",
                lastname : "",
                email : "", 
                birthplace : "", 
                phone : "", 
                favoriteFood : "",
                about : ""
        })
    }

    return (
        <div className="badgeform">
           
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <input 
                        required
                        type="text"
                        className="textbox"
                        value={props.formData.firstname}
                        placeholder="First Name"
                        onChange={handleChange}
                        name="firstname"
                        />
                    <input 
                        required 
                        type="text"
                        className="textbox"
                        placeholder="Last Name"
                        value={props.formData.lastname}
                        onChange={handleChange}
                        name="lastname"
                    
                        />
                </div>
                
                <div className="row">
                    <input 
                        required
                        className="textbox"
                        placeholder="Email"
                        value={props.formData.email}
                        onChange={handleChange}
                        name="email"
                    
                        />
                    <input 
                        required
                        type="text"
                        className="textbox"
                        placeholder="Place of Birth"
                        value={props.formData.birthplace}
                        onChange={handleChange}
                        name="birthplace"
                    
                        />
                </div>
                <div className="row">
                    <input 
                        required 
                        type="text"
                        placeholder="Phone"
                        value={props.formData.phone}
                        className="textbox"
                        onChange={handleChange}
                        name="phone"
                        
                        />
                    <input 
                        required 
                        type="text"
                        placeholder="Favorite Food"
                        className="textbox"
                        value={props.formData.favoriteFood}
                        onChange={handleChange}
                        name="favoriteFood"
                    
                        />
                </div>
                <textarea 
                    required
                    placeholder="Tell us about yourself!"
                    name="about"
                    value={props.formData.about}
                    onChange={handleChange}
                    className="about"
                    />
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}