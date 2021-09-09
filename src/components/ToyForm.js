import React, { useState } from "react";

function ToyForm(props) {
  const {addToytoDB} = props;

  const [addToyName, setToyName] = useState("")
  const [addToyImage, setToyImage] = useState("")

  function handleAddToyName(event) {
    setToyName(event.target.value)
  }
  function handleAddToyImage(event) {
    setToyImage(event.target.value)
  }

  function handleSubmitNewToy(event) {
    event.preventDefault();
    addToytoDB({

      name: (addToyName),
      image: (addToyImage)

    })
    setToyName("")
    setToyImage("")
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmitNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleAddToyName}
          value={addToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleAddToyImage}
          value={addToyImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
