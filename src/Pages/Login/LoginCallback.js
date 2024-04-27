import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../api/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../Components/AxiosInstance';

const LoginCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const param = { ...location.state };
    const result = param.result;
    const id = param.id;
    const kakaoEmail = param.kakaoEmail;

    const { login } = useAuth();

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

    useEffect(() => {
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
    }, [])

};

export default LoginCallback;
