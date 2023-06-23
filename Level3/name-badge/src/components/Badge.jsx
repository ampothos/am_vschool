import React from "react" 

export default function Badge(props) {
    return (
        <div className="badge">
            <div className="badge-header">Badge</div>
            <div className="info">
                <div className="row">
                    <div className="name">Name: {props.firstname} {props.lastname}</div>
                    <div className="email">Email: {props.email}</div>
                </div>
                <div className="row">
                    <div className="birthplace">Place of birth: {props.birthplace}</div>
                    <div className="phone">Phone: {props.phone} </div>
                </div>
                <div className="favoriteFood">Favorite Food: {props.favoriteFood}</div>
            </div>
            <div className="about">{props.about}</div>
        </div>
    )
}