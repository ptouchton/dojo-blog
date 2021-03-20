import {useState} from 'react';

const Home = () => {

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);

    const handleClick = (name) => {
        setName('Luigi');
        setAge(30)
        // console.log(`Clicked: ${name}`);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{`${name} is ${age} years old`}</p>
            <button onClick={() => handleClick('mario')}>Click me</button>
        </div>
     );
}
 
export default Home;