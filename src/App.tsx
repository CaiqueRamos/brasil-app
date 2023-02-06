import { Home } from './data/presentation/pages';
import { Flex } from "@chakra-ui/react"
import { principal } from "./data/constants"
function App() {
  return (
    <Flex background={principal.darkBlue} px="60px">
      <Home />
    </Flex>
  );
}

export default App;
