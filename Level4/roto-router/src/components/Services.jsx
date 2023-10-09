import React from "react"

export default function Services() {
    return (
        <div className="services-container">
           <h1 className="title">Services Menu</h1>
            <ul className="services">
                <li>
                    <div className="type">Simple Repair</div>
                    <div className="description">Plumbing repair that does not involve demolition</div>
                    <div className="price">$30 per hour + Cost of Parts</div>
                </li>
                <li>
                    <div className="type">Demolition Repair</div>
                    <div className="description">Plumbing repair that DOES involve demolition - we love these ones! </div>
                    <div className="price">$40 per hour + Cost of Parts</div>
                </li>
                <li>
                    <div className="type">The Full Overhaul</div>
                    <div className="description">For the ambitious customer - we redo your old plumbing!</div>
                    <div className="price">$50 per hour + Cost of Parts</div>
                </li>
                <li>
                    <div className="type">New House Services</div>
                    <div className="description">We will build plumbing into your new house that will stand the test of time!</div>
                    <div className="price">$60 per hour + Cost of Parts</div>
                </li>
            </ul>
        </div>
    )
}