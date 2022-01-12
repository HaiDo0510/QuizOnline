
export const HEADER_API = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'authorization',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
}

export const API_REGISTER = 'http://localhost:8080/auth/register';
export const API_LOGIN = 'http://localhost:8080/auth/login';