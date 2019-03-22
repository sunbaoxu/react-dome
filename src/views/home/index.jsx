import * as React from 'react';
import './home.scss';
// import {Link} from 'react-router-dom';
// import * as  api from './api';
// import HeaderNav from '$com/header/headerNav';
import { Button } from 'antd-mobile'




class NotFound extends React.Component{
    /**
     * 登录
     */
    // async emailRule () {
    //     // const as= await  api.login();
    // }


    /*
    *  
    */
    render() {
        return (
            <div className="home-wrap">
                {/* 头部 */}
                {/* <HeaderNav /> */}
                {/* <Button type="ghost" size="small" inline>small</Button> */}
				<section className="home-main">
                  <h4>这是body</h4>
                  <Button onClick={()=>{
                      this.props.history.push('/react');
                  }}>跳转链接到下一页</Button>
                </section>
            </div>
        );
    }
}

export default NotFound;
