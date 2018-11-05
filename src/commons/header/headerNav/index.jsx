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
                <section className="lef-box g-cen-y">
                    <img src={logo} alt=""/>
                </section>
                <Menu 
                    className="rig-box g-cen-y"  
                    mode="horizontal" 
                    selectedKeys ={[this.state.key]}
                    onClick={this.handleClick}
                >
                    <Menu.Item key="html">
                        <a href="https://www.cnblogs.com/lcchuguo/p/4505752.html">html</a>
                    </Menu.Item>
                    <Menu.Item key="js" disabled>
                        <Link to="/">javascripts</Link>
                    </Menu.Item>
                    <Menu.Item key="vue">
                        <a href="https://cn.vuejs.org/v2/guide/">vue</a>
                    </Menu.Item>
                    <Menu.Item key="xiao">
                        <a href="http://10.15.198.18:8090/pages/viewpage.action?pageId=3933038">小程序</a>
                    </Menu.Item>
                    <Menu.Item key="react">
                        <Link to="/react">react</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="http://10.15.198.18:8090/pages/viewpage.action?pageId=3933495">react nactive</a>
                    </Menu.Item>
                    
                    
                    <SubMenu title="前端 tool">
                        <Menu.Item key="webpack">
                            <Link to="/">webpack</Link>
                        </Menu.Item>
                        <Menu.Item disabled>
                            <Link to="/">gulp</Link>
                        </Menu.Item>
                        <Menu.Item key="tool" disabled>
                            <Link to="/1">git</Link>
                        </Menu.Item>
                    </SubMenu>
                       
                </Menu>
            </div>
        );
    }
}

export default NotFound;
