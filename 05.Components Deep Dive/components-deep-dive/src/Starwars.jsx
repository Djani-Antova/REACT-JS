import { useEffect, useState } from "react";

export default function Starwars() {
    const[characters, setCharacters] = useState([]);
    // console.log(characters);

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
        .then((response) => response.json())
        .then((data) => {
            setCharacters(data.results);

        })
        .catch((err) => console.log(err))
    }, [characters]);

  return (
    <div>
      <h1>SW Characters</h1>
      <ul>
            {characters.map(character => <li key={character.url}>{character.name}</li>)}
      </ul>

    </div>

  )
  
}
