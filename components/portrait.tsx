import { Box, Image, Text } from "@chakra-ui/react"
import Recipe from "../types/recipe"



const Portrait = ({id, title, image}: {id: number, title: string, image: string}) => {
    return (<Box>
        <Image src={image}></Image>
        <Text>{title}</Text>
    </Box>)
}

export default Portrait