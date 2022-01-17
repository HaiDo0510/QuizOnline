import axios from 'axios';
import * as Constant from '../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const api_listUser = async () => {
    const res = await axios({
        method: 'GET',
        headers: Constant.HEADER_API_TOKEN,
        url: Constant.API_LISTUSER
    });
    return res.data;
}

export const api_createUser = (UserDto) => {
    axios({
        method: 'POST',
        headers: Constant.HEADER_API_TOKEN,
        url: Constant.API_LISTUSER,
        data: UserDto
    }).then(res => {
        toast.success('Add User Success !');
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