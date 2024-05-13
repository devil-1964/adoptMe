import { useParams } from "react-router-dom"
import { useQuery } from "react-query";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  if (results.isLoading) {
    return (<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

    )
  }
  const pet = results.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
          <button>Adopt {pet.name}</button>
          <h2>{pet.description}</h2>
        
    </div>
  )
};
export default Details
