import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import recipeService from "../../services/recipeService";
import * as t from '../types'

function* search(query = ''){
    try{
        console.log('break point at saga search')
        const data = yield call(recipeService.search, '')
        yield put({
            type: t.RECIPE_SEARCH_SUCCEEDED,
            payload: data
        })
    }
    catch (error) {
        yield put({
            type: t.RECIPE_SEARCH_FAILED,
            payload: error.message
        })
    }
}

function* watchSearch() {
    yield takeLatest(t.RECIPE_SEARCH_REQUESTED, search)
}

export default function* rootSaga(){
    yield all([
        watchSearch()
    ])
}