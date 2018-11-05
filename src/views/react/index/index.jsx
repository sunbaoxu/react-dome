import * as React from 'react';
import './index.scss';
import filter from '$filter';
import ListBox from '../common/list';
import FromBox from '../common/from';
const obj = {
  book1: `url(${require("$img/back/book1.jpg")})`,
  book2: `url(${require("$img/back/book2.jpg")})`
};

const arr = [
  {id:'1',val:'苹果'},
  {id:'2',val:'橘子'},
  {id:'3',val:'香蕉'},
  {id:'4',val:'榴莲'}
]

 

class NotFound extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      h :''
    };

  }
 
  render() {
    let num = this.state.num;
    return (
      <div className="react-wrap g-col" >
        {/* 右侧 悬浮图片 */}
        <section className="fixed-box">
          <img src={require("$img/back/timg.jpg")} alt="" onClick={()=>{
            this.props.history.push('/');
          }} />
        </section>
        <section className="react-header" style={{'backgroundImage':obj.book1}}>
          <h4 className="title">react学习简介</h4>
          <p> 脚手架 create-react-app 学习以及运用</p>
        </section>
        <section className="react-main" style={{'backgroundImage':obj.book2}}>
          <section className="list-box">
            <h4 className="title">一、过滤器封装</h4>
            <p className="text">react里没有类似vue中过滤器filter的东西，所以需要些公共函数代替</p>
            <div className="box">
              <p>这是对手机号15531734345进行过滤后的效果：{filter.phoneHid('15531734345')}</p>
            </div>
          </section>
          <section className="list-box">
            <h4 className="title">二、组件</h4>
            <div className="box">
              <h5 className="text">1、引用组件，并循环</h5>
              <ul>
                {/* 引用组件 */}
                {arr.map((m,i)=>{
                  return <ListBox key={i} val={m} />
                })}
              </ul>
            </div>
            <div className="box">
              <h5 className="text">2、组件通信</h5>
              {/* 组件通信 */}
              <FromBox  num={num} onChengFn={(res)=>{
                this.setState({num:res})
              }}/>
              <p>
                <span>显示千分符：</span>
                <span>{filter.moneyFn(this.state.num)}</span>
              </p>
            </div>
          </section>
          <section className="list-box">
            <h4 className="title">三、请求数据</h4>
            <div className="box" onClick={()=>{
              this.props.history.push('/login')
            }}>
              去往登录页，登录
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default NotFound;
