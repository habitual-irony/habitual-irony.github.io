import React from 'react-hook-form';
import styles from './Login.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "../../Components/AxiosInstance";

const Login = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const navigate = useNavigate();

    const kakaoLoginCallBack = () => {
        const Data = {
            code
        };

        axios
            .post('/login/kakaoLoginCallBack', Data)
            .then((response) => {
                navigate('/login/callBack', {state : {result : response.data.result, kakaoEmail : response.data.kakaoEmail, id : response.data.id}});
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        if(code?.length > 1) {
            kakaoLoginCallBack();
        }
    }, [])

    const kakaoLogin = (e) => {
    e.preventDefault();
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=" + process.env.REACT_APP_KAKAO_KEY
        +"&redirect_uri=" + process.env.REACT_APP_URL
        +"&response_type=code";
    }

    return (
    <div className={styles.Login}>
      <div className={styles.title}>레테's 놀이터</div>
      <form className={styles.form}>
        <button className={styles.loginBtn_kakao} onClick={(e) => kakaoLogin(e)}>
          KaKao Login
        </button>
      </form>
    </div>
    );
};

export default Login;
