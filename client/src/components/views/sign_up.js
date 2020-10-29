import React, { useState } from 'react';
import Styles from './sign.module.css';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import CalendarToday from '@material-ui/icons/CalendarToday';

import MomentUtils from '@date-io/moment';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../_actions/user_action'

function Sign_up(props) {   // 처음 대문자로 해야 에러 안남! 이유 모름!
    //const dispatch = useDispatch();

    const [Email, setEmail] = useState("")  // Email state = 서버에 보낼 값이 들어있음
    const [Password, setPassword] = useState("")    // Password state
    const [ConfirmPassword, setConfirmPassword] = useState("") // 비밀번호 확인
    const [Name, setName] = useState("") // 이름 state
    const [Birth, setBirth] = useState("") // 생일 state
    const [Sex, setSex] = useState("") // 성별 state
    const [Phone, setPhone] = useState("") // 휴대폰 번호
    const [VerifyPhone, setVerifyPhone] = useState("") // 휴대폰 인증

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value) // Email의 state 바꿔주기
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value) // Password의 state 바꿔주기
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value) // Password의 state 바꿔주기
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value) // Password의 state 바꿔주기
    }
    const onBirthHandler = (event) => {
        setBirth(event.currentTarget.value) // Password의 state 바꿔주기
    }
    const onSexHandler = (event) => {
        setSex(event.currentTarget.value) // Password의 state 바꿔주기
    }
    const onPhoneHandler = (event) => {
        setPhone(event.currentTarget.value) // Password의 state 바꿔주기
    }
    const onVerifyPhoneHandler = (event) => {
        setVerifyPhone(event.currentTarget.value) // Password의 state 바꿔주기
    }
    //this.changeAppointment = this.changeAppointment.bind(this);

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 아래 내용을 수행하기 위해 refresh하는 것을 방지

        if (Password != ConfirmPassword) {
            return alert('비밀번호 일치 부탁!')
        }
        let body = {
            email: Email,
            password: Password,
            name: Name,
            birth: Birth,
            sex: Sex,
            phone: Phone
        }
        /*
        dispatch(registerUser(body)) // dispatch를 이용해서 loginUser라는 action을 취함
            .then(response => {
                if(response.payload.success) { // 로그인 성공 시
                    props.history.push('/sign_in')         // 루트 페이지로 이동
                } else {
                    alert('Error in sign_up.js')
                }
            })
            */

    }
    return (
        <div>
            <form className={Styles.header}
                onSubmit={onSubmitHandler}  // form도 submit event가 필요
            >
                <h1 className={Styles.like_seal}>LIKE SEAL</h1>
                <label className={Styles.label}>이메일</label>
                <input className={Styles.input_box}
                    type="email"
                    value={Email} // value에 state을 넣어 줘야 함
                    onChange={onEmailHandler} />

                <label className={Styles.label}>비밀번호</label>
                <input className={Styles.input_box}
                    type="password"
                    value={Password}
                    onChange={onPasswordHandler} />

                <label className={Styles.label}>비밀번호 확인</label>
                <input className={Styles.input_box}
                    type="passwordConfirm"
                    value={ConfirmPassword}
                    onChange={onConfirmPasswordHandler} />

                <label className={Styles.label}>이름</label>
                <input className={Styles.input_box}
                    type="name"
                    value={Name}
                    onChange={onNameHandler} />

                <label className={Styles.label}>생년월일</label>
                <input className={Styles.input_box}
                    type="birth"
                    value={Birth}
                    onChange={onBirthHandler} />

                <label className={Styles.label}>성별</label>
                <input className={Styles.input_box}
                    type="sex"
                    value={Sex}
                    onChange={onSexHandler} />

                <label className={Styles.label}>휴대전화</label>
                <input className={Styles.input_box}
                    type="phone"
                    value={Phone}
                    onChange={onPhoneHandler} />

                <label className={Styles.label}>인증번호</label>
                <input className={Styles.input_box}
                    type="verifyPhone"
                    value={VerifyPhone}
                    onChange={onVerifyPhoneHandler} />

                <div className={Styles.button_header}>
                    <button
                        className={Styles.Btn}
                        type="submit" > 회원가입
                        </button>
                </div>
            </form>
        </div>
    )
}

export default Sign_up;