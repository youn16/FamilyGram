import React, { useState } from 'react';
import Sign_Styles from './sign.module.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_action'

function Sign_in(props) {   // 처음 대문자로 해야 에러 안남! 이유 모름!
    //const dispatch = useDispatch();

    const [Email, setEmail] = useState("")  // Email state = 서버에 보낼 값이 들어있음
    const [Password, setPassword] = useState("")    // Password state
    
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value) // Email의 state 바꿔주기
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value) // Password의 state 바꿔주기
    }
    const onSubmitHandler = (event) => {
        event.preventDefault(); // 아래 내용을 수행하기 위해 refresh하는 것을 방지

        console.log('Email', Email)
        let body = {
            email: Email,
            password: Password
        }
        /*
        dispatch(loginUser(body)) // dispatch를 이용해서 loginUser라는 action을 취함
            .then(response => {
                if(response.payload.loginSuccess) { // 로그인 성공 시
                    props.history.push('/')         // 루트 페이지로 이동
                } else {
                    alert('Error in sign_in.js')
                }
            })
            */
    }
    return (
        <div>
            <form className={Sign_Styles.header}
                onSubmit={onSubmitHandler}  // form도 submit event가 필요
            >
                <h1 className={Sign_Styles.like_seal}>LIKE SEAL</h1>
                <label className={Sign_Styles.label}>Email</label>
                <input className={Sign_Styles.input_box}
                    type="email"
                    value={Email} // value에 state을 넣어 줘야 함
                    onChange={onEmailHandler} />

                <label className={Sign_Styles.label}>Password</label>
                <input className={Sign_Styles.input_box}
                    type="password"
                    value={Password}
                    onChange={onPasswordHandler} />

                <div className={Sign_Styles.button_header}>
                    <button
                        className={Sign_Styles.Btn}
                        type="submit" > 로그인
                        </button>
                    <button
                        className={Sign_Styles.Btn}
                        type="submit" > 회원가입
                        </button>
                </div>
            </form>
        </div>
    )
}

export default Sign_in