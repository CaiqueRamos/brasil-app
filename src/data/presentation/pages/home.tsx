import { Logo } from "../components/logo"
import { Box, Stack, HStack, Button, Flex, VStack, Text, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading } from "@chakra-ui/react"
import { principal } from "../../constants"

export const Home = () => {
    return (
        <Box w="full" px="40px" borderX={`2px  dotted ${principal.transparentBlue}`} py="40px">
            <Flex align={'center'} justifyContent="space-between" py="5" w="full">
                <Logo />
                <Button h="10" bgColor={principal.transparentBlue} color={principal.white} _hover={{ color: principal.transparentBlue, bgColor: principal.white }}>CONTATE O CRIADOR</Button>
            </Flex>

            <Stack mt="70px">
                <Text fontWeight={"bold"} color={principal.lightBlue} mb="-8">Bem-vindo ao brasil</Text>
                <Text fontWeight={"bold"} color={principal.white} fontSize="90px">Meu Brasil</Text>
                <Text fontWeight={"bold"} color={principal.grey} mt="-8px !important" mb="70px !important">Aplicação feita para auxilio de informações sobre o brasil, <br />dados retirados de uma API pública chamada brasilapi</Text>
                <Flex w="full" mt="60px">
                    <SimpleGrid w="full" spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                        <Card bgColor="none" color={principal.white} _hover={{ bgColor: principal.transparentBlue }}>
                            <CardHeader>
                                <Heading size='md'> Customer dashboard</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Text color={principal.lightBlue} cursor="pointer" _hover={{
                                    transform: "translateX(20px)",
                                    transition: "all .6s linear ",
                                    color: " white"
                                }}>{"View here ->"}</Text>
                            </CardFooter>
                        </Card>
                        <Card bgColor="none" color={principal.white} _hover={{ bgColor: principal.transparentBlue }}>
                            <CardHeader>
                                <Heading size='md'> Customer dashboard</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Text color={principal.lightBlue} cursor="pointer" _hover={{
                                    transform: "translateX(20px)",
                                    transition: "all .6s linear ",
                                    color: " white"
                                }}>{"View here ->"}</Text>
                            </CardFooter>
                        </Card>
                        <Card bgColor="none" color={principal.white} _hover={{ bgColor: principal.transparentBlue }}>
                            <CardHeader>
                                <Heading size='md'> Customer dashboard</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Text color={principal.lightBlue} cursor="pointer" _hover={{
                                    transform: "translateX(20px)",
                                    transition: "all .6s linear ",
                                    color: " white"
                                }}>{"View here ->"}</Text>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </Flex>
            </Stack>
            <footer></footer>
        </Box >
    )
}