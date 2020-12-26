import { getListURL } from '../constants/url';

//api for getting issues from given api
export const getListApi = async (page) => {
    const query = `?page=${page}&per_page=5` //query by page number and number of issues per page
    try{
        const response = await fetch(getListURL + query);
        const json = response.json();

        return json;

    } catch(err) {
        alert(err)
    }

}