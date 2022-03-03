import axios from "axios"
import {URL, APIKEY } from "../constants"
import Recipe from "../types/recipe"

class RecipeService {
    URL_RECIPES : string

    constructor(){
        this.URL_RECIPES = `${URL}/recipes`
    }

    search = async (query: string) : Promise<Recipe[]> => {
        try{
            console.log('this is the request:', `${this.URL_RECIPES}/complexSearch?query=${query}&apiKey=${APIKEY}`)
            const response = await axios.get(`${this.URL_RECIPES}/complexSearch?query=${query}&apiKey=${APIKEY}`)
            console.log('this is the complex search response', response.data)
            if(response.status === 200){
                return response.data.results
            } else {
                return []
            }
        }
        catch(e){
            console.log(e)
            return []
        }
    }
}

const recipeService = new RecipeService()
export default recipeService