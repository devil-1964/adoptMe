import { useState } from "react";
import { useQuery } from "react-query";
import useBreedList from "./setBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParam = () => {
    const [requestParams, setRequestParams] = useState({ animal: "", location: "", breed: "" });
    const [animal, setAnimal] = useState("");
    const [BREEDS] = useBreedList(animal);

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];
    return (
        <div className="search-param">
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {
                    animal: formData.get("animal") ?? "",
                    breed: formData.get("breed") ?? "",
                    location: formData.get("location") ?? "",
                };
                setRequestParams(obj);
            }} >
                <div>
                    <label htmlFor="location">
                        Location
                        <input name="location" id="location" placeholder="Location" />
                    </label>
                </div>
                <div>
                    <label htmlFor="animal"> Animal
                        <select onChange={e => {
                            setAnimal(e.target.value);
                        }} id="animal" value={animal}>
                            <option />
                            {ANIMALS.map((animal) => (<option key={animal}> {animal}</option>))}
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="breeds"> Breeds
                        <select id="breeds" disabled={BREEDS.length === 0} name="breed">
                            <option />
                            {BREEDS.map((breed) => (<option key={breed}>{breed}</option>))}
                        </select>
                    </label>
                </div>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParam;