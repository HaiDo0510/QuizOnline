import axios from 'axios';
import * as Constant from '../Constant'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const api_register = (registerDto) => {
    axios({
        method: 'POST',
        headers: Constant.HEADER_API,
        url: Constant.API_REGISTER,
        data: registerDto
    }).then(res => {
        toast.success("Please check email to active !");
    })
        .catch((error) => {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.status);
                toast.warning(error.response.data.message);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                // alert(error.message);
                console.log('Error', error.message);
            }
        });
}

export const api_login = (loginDto) => {
    return axios({
        method: 'POST',
        headers: Constant.HEADER_API,
        url: Constant.API_LOGIN,
        data: loginDto
    });
}

