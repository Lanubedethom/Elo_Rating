import {useEffect, useState} from "react";
import { getPuppy } from "../styles/dogApi.js";
import PuppyCard from "../components/PuppyCard.jsx";

const Home = () => {
    const [puppies, setPuppies] = useState([]);

    useEffect(() => {
        const fetchPuppies = async () => {
            const puppies = await getPuppy();
            setPuppies(puppies);
        }

        fetchPuppies

    }, []);


    return (
        <div>
            {puppies.map(puppy => (
                <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
        </div>
    )
}

export default Home;