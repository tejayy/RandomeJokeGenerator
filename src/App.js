import React, { useEffect, useState } from "react";

function App() {

  const [joke, setJoke] = useState('');
  const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

  let getJoke = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setJoke(data.joke);
    });
  }

  useEffect(() => {
    getJoke();
  }, [])
  
  const handleClick = () => {
    getJoke();
  };


  return (
    <div className="App">

      <div className="wrapper">
        <h1>AWSM JOKES</h1>
        <span>&#128514;</span>
        <p id=" ">{joke}</p>
        <button id="btn" onClick={handleClick}>
          Get Randome Joke
        </button>
      </div>
    </div>
  );
}

export default App;
