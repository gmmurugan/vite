import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import StopWatch from './components/Stopwatch'

function App() {

  return (
    <ChakraProvider>
      <StopWatch/>
      </ChakraProvider>
  )
}

export default App
