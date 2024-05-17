import { useState } from "react";
import { useParams } from "react-router-dom"
import { useQuery } from "react-query";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
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
          <button onClick={()=>setShowModal(true)}> Adopt {pet.name}</button>
          <h2>{pet.description}</h2>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {pet.name}?</h1>
                  <div className="buttons">
                    <button onClick={()=> {
                      setShowModal(false);
                      console.log("You have adopted " + pet.name);
                    }}>Yes</button>
                    <button onClick={()=> setShowModal(false)}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null
          }
    </div>
  )
};
export default Details
