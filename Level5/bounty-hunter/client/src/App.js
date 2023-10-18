import React from "react"
import axios from "axios"
import Bounty from "./components/Bounty"
import {v4 as uuidv4} from 'uuid'
import AddBountyForm from "./components/AddBountyForm"

export default function App() {
  const [bounties, setBounties] = React.useState([])

  function getBounties() {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    console.log(newBounty)
    axios.post("/bounties", newBounty)
      .then(res => {
        setBounties(prev => [...prev, res.data])
        getBounties()
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(_id) {
    axios.delete(`/bounties/${_id}`)
      .then(res => {
        console.log(res.data)
        setBounties(prev => prev.filter(bounty => bounty._id !== _id))
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, _id) {
    axios.put(`/bounties/${_id}`, updates)
      .then(res => {
        setBounties(prev => 
          prev.map(bounty => bounty._id !== _id ? bounty : res.data))
        getBounties()
      })
      .catch(err => console.log(err))
  }

  React.useEffect(() => { 
    getBounties()
  }, [])

  console.log(bounties)
  return (
    <div className="app">
      <h1>Bounties</h1>
      <AddBountyForm
        submit = {addBounty}
        buttonText = "Add Bounty"/>
      <div className="bounties-container">
        {bounties.map(bounty => <Bounty
                                  {...bounty}
                                  deleteBounty = {deleteBounty}
                                  editBounty = {editBounty}
                                  key = {uuidv4()}
                                  />)}
      </div>
    </div>
  );
}

