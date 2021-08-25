const Home = () => {

    const handleClick = () => {
        console.log("Handle click fired here");
    }


    const handClickAgain = (name) => {
        console.log('Hello ', name);
    }

    return (
        <div className="home">
            <h2>homepage test</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={ () => {
                handClickAgain('jack');
            }}>Click me again</button>
        </div>
    );
}
 
export default Home;