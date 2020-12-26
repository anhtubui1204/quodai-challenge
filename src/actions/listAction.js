import { GET_LIST } from './type'
import { getListApi } from '../api/listApi'

//action for getting list from api
export const getListAction = (page) => async dispatch => {
    const list = await getListApi(page)
    dispatch({
        type: GET_LIST,
        payload: list
    })
}
