import { Logo } from "../logo"
import { Button, Flex } from "@chakra-ui/react"
import { principal } from "../../../constants"

export const Header = () => {
    return (
        <Flex align={'center'} justifyContent="space-between" py="5" w="full">
            <Logo />
            <Button h="10" bgColor={principal.transparentBlue} color={principal.white} _hover={{ color: principal.transparentBlue, bgColor: principal.white }} onClick={() => window.location.href = "https://www.linkedin.com/in/caique-ramos-601782176/"}>CONTATE O CRIADOR</Button>
        </Flex>
    )
}