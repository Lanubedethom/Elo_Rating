import { useEffect, useState } from "react";
import { getPuppy } from "../services/dogApi.js";
import PuppyCard from "../components/PuppyCard.jsx";
import { Box, Flex } from "@chakra-ui/react";

const Home = () => {
    const [puppies, setPuppies] = useState([]);

    const showPuppy = async () => {
        try {
            const response = await getPuppy();
            setPuppies(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        showPuppy()
    }, []);

    return (
        <Flex justify="center" align="center" mt={8}>
            <Box display="flex" justifyContent="center" gap={4}>
                {puppies.map(puppy => (
                    <PuppyCard key={puppy.id} puppy={puppy} />
                ))}
            </Box>
        </Flex>
    )
}

export default Home;
