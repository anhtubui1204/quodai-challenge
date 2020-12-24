import { getListURL } from '../constants/url';

export const getListApi = async (page) => {
    const query = `?page=${page}&per_page=5`
    const response = await fetch(getListURL + query);
    const json = await response.json();
    return json
}