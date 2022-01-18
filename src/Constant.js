
export const HEADER_API = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'authorization',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
}

export const HEADER_API_TOKEN = {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'authorization',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Authorization: 'Bearer '+localStorage.getItem('accessToken')
}

export const API_REGISTER = 'http://localhost:8080/auth/register';
export const API_LOGIN = 'http://localhost:8080/auth/login';
export const API_LISTUSER = 'http://localhost:8080/api/user';
export const API_LISTCOURSE = 'http://localhost:8080/api/course';
export const API_LISTSUBJECT = 'http://localhost:8080/api/subject';
export const API_LISTTEST = 'http://localhost:8080/api/test';
export const API_EXAM = 'http://localhost:8080/api/exam';