import axios from 'axios';
import * as Constant from '../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const api_listSubject = async () => {
    const res = await axios({
        method: 'GET',
        headers: Constant.HEADER_API_TOKEN,
        url: Constant.API_LISTSUBJECT
    });
    return res.data;
}

export const api_createSubject = (SubjectDto) => {
    axios({
        method: 'POST',
        headers: Constant.HEADER_API_TOKEN,
        url: Constant.API_LISTSUBJECT,
        data: SubjectDto
    }).then(res => {
        toast.success('Add Subject Success !');
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