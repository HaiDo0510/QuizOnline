import axios from 'axios';
import * as Constant from '../../Constant.js'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const api_register = (registerDto) => {
    axios({
        method: 'POST',
        headers: Constant.HEADER_API,
        url: Constant.API_REGISTER,
        data: registerDto
    }).then(res => {
        window.location.replace("https://www.w3schools.com");
        toast.success("Đăng kí tài khoản thành công");
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

