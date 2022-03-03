import * as t from '../types'

export const search = () => {
    console.log('search action launched')
    return {
        type: t.RECIPE_SEARCH_REQUESTED
    }
}