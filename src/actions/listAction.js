import { GET_LIST } from './type'
import { getListApi } from '../api/listApi'

export const getListAction = (page) => async dispatch => {
    const list = await getListApi(page)
    dispatch({
        type: GET_LIST,
        payload: list
    })
}
