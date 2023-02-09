import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    SimpleGrid,
    Box,
    CardHeader,
    Heading,
    CardBody,
    Text,
    CardFooter,
    Card as CardChakra
} from '@chakra-ui/react'
import { principal } from '../../../constants'
import { useState } from "react"

export const Card = (props: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleOpenModalAndGetContent = () => {
        props.onClick && props.onClick()
        onOpen()
    }
    return (
        <Box maxW={280} >
            <Box >
                <SimpleGrid w="full" minH={340} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <CardChakra bgColor="none" color={principal.white} _hover={{ bgColor: principal.transparentBlue }}>
                        <CardHeader>
                            {props.card}
                            <Heading size='md' mt={7}>{props.title}</Heading>
                        </CardHeader>
                        <CardBody mt={-5}>
                            <Text>{props.description}</Text>
                        </CardBody>
                        <CardFooter>
                            <Text
                                color={principal.lightBlue}
                                cursor="pointer"
                                onClick={handleOpenModalAndGetContent}
                                _hover={{
                                    transform: "translateX(20px)",
                                    transition: "all .6s linear ",
                                    color: " white"
                                }}>{"View here"}</Text>
                        </CardFooter>
                    </CardChakra>
                </SimpleGrid>
            </Box>
            <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent background={principal.white}>
                    <DrawerBody>
                        {props.children}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}