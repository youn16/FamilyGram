import {
    LOGIN_USER
} from '../_actions/types'

export default function (state={}, action) {    // 이전 state와 action object를 받은 후에 next state를 return
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }   // ... : spread 연산자, 인자의 state상태를 그대로 가져옴

        default:
            return state;
    }
}