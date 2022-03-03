import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'


const config = { 
    initialColorMode: 'dark',
    useSystemColorMode: true
}
const styles = {
    global: (props: any) => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const components = {
}

const fonts = {
}

const colors = {
}

const theme = extendTheme({config, styles, components, fonts, colors})

export default theme