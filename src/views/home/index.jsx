import * as React from 'react';
import './home.scss';
// import {Link} from 'react-router-dom';
import logo from '$img/back/hezuo.png';
import logo1 from '$img/back/tips.jpg';
// import * as  api from './api';
import HeaderNav from '$com/header/headerNav';





class NotFound extends React.Component{
    /**
     * 登录
     */
    async emailRule () {
        // const as= await  api.login();
    }


    /*
    *  
    */
    render() {
        return (
            <div className="home-wrap">
                {/* 头部 */}
                <HeaderNav />
				<section className="home-main">
                    <section className="home-box">
                        <img src={logo1} alt="" className="tips"/>
                    </section>
                    <section className="home-box text-box">
                        <p className="text1">蜡笔美好未来</p>
                        <p className="text2">我们携手共同努力</p>
                        <img src={logo} alt=""/>
                    </section>
                </section>
            </div>
        );
    }
}

export default NotFound;
