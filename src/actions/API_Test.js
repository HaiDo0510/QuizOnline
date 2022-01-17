import axios from 'axios';
import * as Constant from '../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const api_listTest = async () => {
    const res = await axios({
        method: 'GET',
        headers: Constant.HEADER_API_TOKEN,
        url: Constant.API_LISTTEST
    });
    return res.data;
}

export const api_createTest = (TestDto) => {
    axios({
        method: 'POST',
        headers: Constant.HEADER_API_TOKEN,
        url: Constant.API_LISTTEST,
        data: TestDto
    }).then(res => {
        toast.success('Add Test Success !');
    }).catch((error) => {
        if (error.response) {
            toast.warning(error.response.data.message);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
}