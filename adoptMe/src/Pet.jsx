import App from "./App";
const Pet = (props) => {
    return (
        <div className="pet">
            <h1 >{props.name}</h1>
            <h1>{props.animal}</h1>
            <h1>{props.breed}</h1>
        </div>
    );

};

export default Pet;