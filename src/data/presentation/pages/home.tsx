import { useState, useEffect } from "react"
import {
    Box,
    Stack,
    Img,
    Flex,
    Text,
    Input,
    useFocusEffect,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react"
import { principal } from "../../constants"
import { Header, Card } from "../components"
import { GetAllBanks } from "../../infra/fetchers/banks/get-all-banks"


export const Home = () => {
    const [searchCep, setSearchCep] = useState([]);
    const [banks, setBanks] = useState([]);

    const GetBanks = async () => {
        const banks = await GetAllBanks()
        setBanks(banks)
        console.log(banks)
    }

    return (
        <Box w="full" px="40px" borderX={`2px  dotted ${principal.transparentBlue}`} py="40px">
            <Header />
            <Stack mt="70px">
                <Text fontWeight={"bold"} color={principal.lightBlue} mb="-8">Bem-vindo ao brasil</Text>
                <Text fontWeight={"bold"} color={principal.white} fontSize="90px">Meu Brasil</Text>
                <Text fontWeight={"bold"} color={principal.grey} mt="-8px !important" mb="70px !important">Aplicação feita para auxilio de informações sobre o brasil, <br />dados retirados de uma API pública chamada brasilapi</Text>
                <Flex w="full" mt="60px" paddingBottom={10}>
                    <Card
                        title="Bancos"
                        description="Faça uma busca e vizualize todos os bancos no brasil, com algumas informações"
                        onClick={GetBanks}
                    >
                        <Box w="full">
                            <Text fontSize={30} mb="5">Bancos atuantes no Brasil: {banks && Object.keys(banks).length}</Text>
                            <TableContainer
                                display="flex"
                                flexDirection="column"
                                w="full"
                                fontFamily={"monospace"}
                                maxHeight={400}
                                overflowY="scroll">
                                <Table variant='striped' colorScheme='blackAlpha'>
                                    <TableCaption>Bancos residêntes no teritório nacional</TableCaption>
                                    <Thead>
                                        <Tr>
                                            <Th>Nome social da Instituição</Th>
                                            <Th>ISBP</Th>
                                            <Th>Nome Completo</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {
                                            banks?.map(function (response: any) {
                                                return (
                                                    <Tr>
                                                        <Td>{response.name}</Td>
                                                        <Td>{response.ispb}</Td>
                                                        <Td>{response.fullName}</Td>
                                                    </Tr>
                                                )
                                            })
                                        }
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Card>
                   
                </Flex>

                <Flex borderY={`2px  dotted ${principal.transparentBlue}`} py={20} justifyContent={"space-around"}>
                    <Box w="40%" mr="40" mt="20">
                        <Text color={principal.grey}>País na América do Sul</Text>
                        <Text color={principal.white} fontSize={90} fontWeight={"bold"}>Sobre o Brasil</Text>
                        <Text color={principal.grey}>O Brasil, um vasto país sul-americano, estende-se da Bacia Amazônica, no norte, até os vinhedos e as gigantescas Cataratas do Iguaçu, no sul. O Rio de Janeiro, simbolizado pela sua estátua de 38 metros de altura do Cristo Redentor, situada no topo do Corcovado, é famoso pelas movimentadas praias de Copacabana e Ipanema, bem como pelo imenso e animado Carnaval, com desfiles de carros alegóricos, fantasias extravagantes e samba.</Text>
                    </Box>
                    <Box background={"linear-gradient(90deg, rgba(15,21,39,0.908000700280112) 42%, rgba(19,24,42,1) 100%);"} p="10" rounded={20}>
                        <Img src={require('../assets/img/mapa-brasil.png')} alt="field brazil" w="900px" />
                    </Box>
                </Flex>
            </Stack>
        </Box >
    )
}