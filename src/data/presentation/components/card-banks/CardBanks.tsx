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
import { GiBank } from 'react-icons/gi';
import { useBanks } from "../../hooks"


export const CardBanks = () => {
    const [banks, setBanks] = useState([]);

    const GetBanks = () => {
        useBanks().then((response: any) => {
            setBanks(response);
        })
    }

    return (
        <Card
            title="Bancos"
            description="Faça uma busca e vizualize todos os bancos no brasil, com algumas informações"
            onClick={GetBanks}
            card={<GiBank color="white" fontSize={35} />}
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
                        <TableCaption >
                            <Text>
                                Bancos residêntes no teritório nacional
                            </Text>
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th fontWeight={"bold"} fontFamily={"mono"} fontSize="20">Nome social da Instituição</Th>
                                <Th fontWeight={"bold"} fontFamily={"mono"} fontSize="20">ISBP</Th>
                                <Th fontWeight={"bold"} fontFamily={"mono"} fontSize="20">Nome Completo</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                banks?.map(function (response: any) {
                                    return (
                                        <Tr key={response.ispb}>
                                            <Td fontWeight={"semibold"} fontFamily={"mono"}>{response.name}</Td>
                                            <Td fontWeight={"semibold"} fontFamily={"mono"}>{response.ispb}</Td>
                                            <Td fontWeight={"semibold"} fontFamily={"mono"}>{response.fullName}</Td>
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