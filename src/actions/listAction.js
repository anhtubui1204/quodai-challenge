import { GET_LIST } from './type'
import { getListApi } from '../api/listApi'

export const getListAction = async () => async dispatch => {
    const list = await getListApi()
    dispatch({
        type: GET_LIST,
        payload: list
    })
}
