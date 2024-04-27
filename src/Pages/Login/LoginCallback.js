import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../api/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../Components/AxiosInstance';

const LoginCallback = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const result = searchParams.get('result');
    const id = searchParams.get('id');
    const kakaoEmail = searchParams.get('kakaoEmail');

    /* 로그인 & 유저 정보 전역관리 */
    const { login } = useAuth();

    /* 로그인 성공 시 라우팅 내비게이터 */
    const navigate = useNavigate();

    /* 로그인 함수 */
    const onLogin = () => {
        const Data = {
            kakaoEmail
            , id
        };

        axios
            .post('/login/doLogin', Data)
            .then((response) => {
                localStorage.setItem("key", response.data.accessToken);
                login();
                navigate('/lethe/main');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    if (result === 'Y') {
        return (
            onLogin()
        )
    } else {
        alert("관리자의 승인이 필요합니다.");
        return (
            <div>
                {<Navigate to="/" replace={true} />}
            </div>
        )
    }
};

export default LoginCallback;
