import { getListURL } from '../constants/url';

export const getListApi = async () => {
    const response = await fetch(getListURL);
    const json = await response.json();
    return json
}