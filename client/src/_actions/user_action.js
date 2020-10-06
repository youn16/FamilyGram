import Axios from 'axios';
import {
    LOGIN_USER
} from './types'

export function loginUser(dataToSubmit) {

    const request = Axios.post('/api/users/login', dataToSubmit)    // Email, Password를 서버로 보냄 
        .then(response => response.data )   // 서버로부터 로그인 결과를 받아 request에 저장

    return {    // reducer로 보냄
        type: LOGIN_USER,
        payload: request
    }
}