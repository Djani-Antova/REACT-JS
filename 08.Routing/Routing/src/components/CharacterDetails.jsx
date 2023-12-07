import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate} from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate()
    const [character, setCharacter] = useState({});
    const name = 'unknown';

    console.log(location.pathname);

    useEffect(() => {
        fetch (`https://swapi.dev/api/people/${id}`)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Not Found')
                }

                return res.json();
            })
            .then(setCharacter)
            .catch((err) => {
                navigate('/characters')
            })
    }, [id])

    return (
        <>
        <h1>{character.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex vel sequi, ducimus explicabo quam cumque doloribus eum aspernatur nostrum sed vitae placeat illo sapiente repudiandae atque natus, laudantium dolor!</p>
        </>
    );
}

export default CharacterDetails