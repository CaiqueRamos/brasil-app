import { useState } from "react"
import { Box, Flex, Button, Input, Text } from "@chakra-ui/react"
import { TbTruckDelivery } from 'react-icons/tb';
import { Card } from "../card"
import { GetCep } from "../../../infra/fetchers";

export const CardCep = () => {
    const [cep, setCep] = useState({
        city: "",
        neighborhood: "",
        state: "",
        street: ""
    });
    const [inputCep, setInputCep] = useState('');

    const HandleGetCep = async () => {
        const response = await GetCep(inputCep).then((el) => {
            console.log(el.city)
            return el;
        });

        setCep(response)
    }
    return (
        <>
            <Card
                title="CEP"
                description="O CEP (Código de Endereçamento Postal) é um sistema de correspondências através da divisão do país em regiões postais.."
                onClick={HandleGetCep}
                card={<TbTruckDelivery color="white" fontSize={35} />}
            >
                <Box w="full" paddingBottom={50}>
                    <Text fontSize={30} mb="5" mr="10">Faça uma busca por um CEP especifico.</Text>
                    <Flex>
                        <Box mr="10">
                            <Input type="number" value={inputCep} onChange={(event) => { setInputCep(event.target.value) }} placeContent={'Digite um CEP'} border="none" borderBottom="solid  1px blue" _hover={{
                                "border-bottom": "solid  1px green"
                            }}></Input>
                        </Box>
                        <Button variant="solid" colorScheme='blue' border={'none'} onClick={HandleGetCep}>BUSCAR</Button>
                    </Flex>
                    {cep && <Box mt="5" fontWeight={"semibold"}>
                        <Text>Cidade: {cep.city}</Text>
                        <Text>Região: {cep.neighborhood}</Text>
                        <Text>Estado: {cep.state}</Text>
                        <Text>Rua: {cep.street}</Text>
                    </Box>}

                </Box>
            </Card>
        </>
    )
}