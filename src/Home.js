import { useState } from "react";

const Home = () => {
    //let name = 'Srijon';
    const [name, setName] = useState('mario'); // here name is not defined before
    const [age, setAge] = useState(25);

    const handleClick = () => {
        //console.log(name);
        setName('martin');
        //console.log(name);
        setAge(30);
    }

    const handClickAgain = (name, e) => {
        console.log('Hello ', name, e.target);
    }

    return (
        <div className="home">
            <h2>homepage test</h2>
            <p>{name} age is : {age}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={ (e) => {handClickAgain('jack', e);}}>Click me again</button>
        </div>
    );
}
 
export default Home;