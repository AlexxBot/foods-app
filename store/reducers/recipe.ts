import { HYDRATE } from 'next-redux-wrapper'//hydrate is use para repintar solo se que nos importa
import Recipe from '../../types/recipe'
import * as t from "../types"

interface RecipeState{
    recipeList: Recipe[]
}

const initialState: RecipeState = {
    recipeList: [],

}

const recipeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        case t.RECIPE_SEARCH_SUCCEEDED:
            return {...state, recipeList: action.payload}
        default:
            return state;
    }
}

export default recipeReducer