import { getListURL } from '../constants/url';

export const getListApi = async (page) => {
    const query = `?page=${page}&per_page=5`
    try{
        const response = await fetch(getListURL + query);
        const json = response.json();

        return json;

    } catch(err) {
        alert(err)
    }

}