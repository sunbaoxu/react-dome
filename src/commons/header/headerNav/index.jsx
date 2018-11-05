import  React from 'react';
import logo from '$img/logo.png';
import {Link} from 'react-router-dom';
import { Menu} from 'antd';
import  './headerNav.scss';
const SubMenu = Menu.SubMenu;




class NotFound extends React.Component{
    state = {
        key: '',
    }
    /**
     * 点击导航nav
     */
    handleClick = (e) => {
        this.setState({
          key: e.key
        });
      }

    render() {
        return (
            <div className="c-header-nav-wrap">
                <h1>这是头部组件</h1>
            </div>
        );
    }
}

export default NotFound;
