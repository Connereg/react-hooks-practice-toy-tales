import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer(props) {
  const {toysList, updateToyinDB, deleteToyfromDB} = props;

  const organizedToyList = toysList.map((toy) => {
    return( 
      <ToyCard 
        key={toy.id}
        id={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
        updateToyinDB={updateToyinDB}
        deleteToyfromDB={deleteToyfromDB}
      />
    )
  })



  return (
    <div id="toy-collection">{organizedToyList}</div>
  );
}

export default ToyContainer;
