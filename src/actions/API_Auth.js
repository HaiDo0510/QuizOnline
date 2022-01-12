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

export const api_login = (loginDto) => {
    axios({
        method: 'POST',
        headers: Constant.HEADER_API,
        url: Constant.API_LOGIN,
        data: loginDto
    }).then(res => {
        const roles = res.data.roles[0].authority;
        const email = res.data.email;
        const accessToken = res.data.accessToken;
        localStorage.setItem("email", email);
        localStorage.setItem("roles", roles);
        localStorage.setItem("accessToken", accessToken);
        if (roles === "ROLE_ADMIN") { window.location.href = ("/admin"); }
        if (roles === "ROLE_USER") { window.location.href = ("/user"); }
    })
        .catch((error) => {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.status);
                // toast.warning(error.response.data.message);
                toast.warning('Email or password Invalid !');
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

