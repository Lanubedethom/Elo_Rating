import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Text, Stack, Divider, ButtonGroup, Button
} from '@chakra-ui/react'

const PuppyCard = ({ puppy, onClick }) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={puppy.url}
                    alt={puppy.id}
                    borderRadius='lg'
                    objectFit='cover'
                    boxSize='344px'
                />
                <Stack mt='6' spacing='3'>
                    <Text>
                        {puppy.id}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        This
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Next
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default PuppyCard;
