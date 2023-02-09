import { useState } from "react"
import {
    Box,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react"
import { Card } from "../card"
import { GiFamilyHouse } from 'react-icons/gi';
import { useInterest } from "../../hooks/use-interest";


export const CardIbge = () => {
    const [interest, setInterest] = useState([{
        nome: "",
        valor: ""
    }]);

    const GetInterest = () => {
        useInterest().then((response: any) => {
            setInterest(response);
            console.log(response)
        })
    }

    return (
        <Card
            title="IBGE"
            description="Informações sobre estados Provenientes do IBGE"
            onClick={GetInterest}
            card={<GiFamilyHouse color="white" fontSize={35} />}
        >
            <Box w="full">
                <Text fontSize={30} mb="5">Taxas disponiveis para vizualização </Text>
                <TableContainer
                    display="flex"
                    flexDirection="column"
                    w="full"
                    fontFamily={"monospace"}
                    maxHeight={400}
                    overflowY="scroll">
                    <Table variant='striped' colorScheme='blackAlpha'>
                        <TableCaption >
                            <Text>
                                Taxas residêntes no teritório nacional
                            </Text>
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th fontWeight={"bold"} fontFamily={"mono"} fontSize="20">Nome </Th>
                                <Th fontWeight={"bold"} fontFamily={"mono"} fontSize="20">Valor</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                interest?.map(function (response: any) {
                                    return (
                                        <Tr key={response.ispb}>
                                            <Td fontWeight={"semibold"} fontFamily={"mono"}>{response.nome}</Td>
                                            <Td fontWeight={"semibold"} fontFamily={"mono"}>{response.valor}</Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Card>
    )
}