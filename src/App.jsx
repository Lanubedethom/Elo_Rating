import PuppyCard from './components/PuppyCard'
import {
    ChakraProvider,
} from '@chakra-ui/react'



function App() {


  return (
      <ChakraProvider>
          <PuppyCard />
      </ChakraProvider>
  )
}

export default App
