import React from "react"
import { Context } from "../context"

export default function UglyForm(props) {
    const context = React.useContext(Context)
    
    return (
        <div className="form-container">
            <h2 className="form-title">Submit Ugly Things Here</h2>
            <form className="ugly-form" 
                    name="ugly-form"
                    onSubmit={context.onSubmit}>
                <div className="input-container">
                    <input className="input-title" 
                            name="title" 
                            type="text"
                            placeholder="Title"
                            onChange={context.changePost}
                            value={context.post.title}
                            required
                           />
                    <input className="input-url"
                            name="imgUrl"
                            type="text"
                            placeholder="URL"
                            onChange={context.changePost}
                            value={context.post.imgUrl}
                            required/>
                    <input className="input-description"
                            name="description"
                            type="text"
                            placeholder="Description"
                            onChange={context.changePost}
                            value={context.post.description}
                            required/>
                </div>
                <button className="submit"
                        name="submit">
                            Submit
                </button>
        </form>
        </div>
    )
}