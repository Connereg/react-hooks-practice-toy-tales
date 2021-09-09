import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysList, setToysList] = useState([])

  const [fetchSwitch, setFetchSwitch] = useState(false)

  useEffect(() => {
    console.log("Fetching Data")
    fetchToyData()
  }, [fetchSwitch])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function fetchToyData(){
    fetch("http://localhost:3001/toys")
    .then((resp) => resp.json())
    .then(toyData => {
      console.log("Data Fetched!")
      setToysList(toyData)
    })
  }

  function addToytoDB(newToy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    }).then(
      console.log("New Toy Posted!"),
      setFetchSwitch(!fetchSwitch)
    )
  }

  function updateToyinDB(id, newLikes) {
    fetch(`http://localhost:3001/toys/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "applications/json"
    },
    body: JSON.stringify({
      likes: newLikes
    })
    }).then(
      console.log(newLikes),
      console.log("Toy Likes Updated!"),
      setFetchSwitch(!fetchSwitch)
    )
  }

  function deleteToyfromDB(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    }).then(
      console.log(`Toy ${id} Deleted`),
      setFetchSwitch(!fetchSwitch)
    )
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm addToytoDB={addToytoDB} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysList={toysList} updateToyinDB={updateToyinDB} deleteToyfromDB={deleteToyfromDB}/>
    </>
  );
}

export default App;
