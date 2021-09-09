import React from "react";


function ToyCard(props) {
  const {id, name, image, likes, updateToyinDB, deleteToyfromDB} = props;

  function handleNewLikes() {
    const newLikes = likes + 1
    updateToyinDB(id, newLikes)
  }


  function handleToyDeletion(event){
    deleteToyfromDB(id)
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleNewLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleToyDeletion}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
