import { Box, SimpleGrid, Text, Wrap} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Portrait from '../components/portrait'
import { search } from '../store'





const Home = () => {

  const recipeState = useSelector((state) => state.recipe)

  const recipeDispatch = useDispatch()

  useEffect(() => {
    recipeDispatch(search())
  }, [recipeDispatch])

  return (
    <Box bg={'green.100'}>
      <Text fontSize='xs'>Hola esta es el contenedor del index</Text>
      <Wrap>
        {
        recipeState.recipeList.map(({ id, title, image}) => 
          <Portrait key={id} id={id} title={title} image={image}/>
        )
}
      </Wrap>
    </Box>
    )
     
  
}

export default Home
