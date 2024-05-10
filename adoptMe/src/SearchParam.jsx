import { useEffect, useState } from "react";
import useBreedList from "./setBreedList";
import Results from "./Results";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParam = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breeds, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [BREEDS] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breeds}`);
        const json = await res.json();
        console.log(json);
        setPets(json.pets);
    }
    return (
        <div className="search-param">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }} >
                <div>
                    <label htmlFor="location">
                        Location
                        <input onChange={e => setLocation(e.target.value)} id="location" value={location.toUpperCase()} placeholder="Location" />
                    </label>
                </div>
                <div>
                    <label htmlFor="animal"> Animal
                        <select onChange={e => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }} id="animal" value={animal}>
                            <option />
                            {ANIMALS.map((animal) => (<option key={animal}> {animal}</option>))}
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="breeds"> Breeds
                        <select onChange={e => setBreed(e.target.value)} id="breeds" disabled={BREEDS.length === 0} value={breeds}>
                            <option />
                            {BREEDS.map((breed) => (<option key={breed}>{breed}</option>))}
                        </select>
                    </label>
                </div>
                <button>Submit</button>
            </form>
            <Results  pets={pets}/>
        </div>
    );
};

export default SearchParam;