import './App.css'
import img from './assets/kennel64.png'

const Logo = () => {
    return (
        <div className="flex">
            <img className="kennelImg" src={img} alt="none" />
            <h1 className="text-1">Adopt Me!</h1>
        </div>
    );
};

export default Logo;