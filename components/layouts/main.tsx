import { Box, Container} from "@chakra-ui/react"
import Head from "next/head"
import { Children } from "react"


interface MainProps {
    children: any;
    router: any;
}
const Main = ({ children, router }: MainProps) => {
    return (
        <Box>
            <Head>
                <title>Food and Meals - Homepage</title>
            </Head>
            <Container>
            {children}
            </Container>
        </Box>
    )
}
export default Main