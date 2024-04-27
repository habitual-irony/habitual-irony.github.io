import React from 'react-hook-form';
import styles from './Login.module.css';

const Login = () => {
  const kakaoLogin = (e) => {
    e.preventDefault();
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=28893c40e75d5ff4f79fe0cedabb2f2b"
        +"&redirect_uri=https://port-0-back-api-128y2k2llvhomk0i.sel5.cloudtype.app/login/kakaoLoginCallBack"
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
