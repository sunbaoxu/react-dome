import * as React from 'react';
import logo from '$img/logo-icon.png';
import { message } from 'antd';
import * as  api from './api';
import './index.scss'

class Login extends React.Component{
     constructor(props) {
        super(props);
        this.state = {
            phone     : '',
            imgVcode  : '',
            valiCode  : '',
            imgUrl    : '',
            imgAsync  : false,
            passAsync : false,
            applyAsync: false, //申请后 弹框
            userAsync  : true, //用户 -- 新老
            redAsync   : true,
            timer : null ,
            passText : '获取验证码'
        };
    }
    
    /**
     * 点击发送验证码
     */
     passBtnFn =() =>{
        if(!this.state.phone){
            return false;
          }else if(!(/^1[0-9]{10}$/.test(this.state.phone)) ){ 
            message.info('手机号输入不正确');
            return false;
          } else if(this.state.imgAsync && !this.state.imgVcode){
            message.info('请输入图片验证码');
            return false;
          }
          //获取短信验证码，蜡笔发送，不校验token
          this.setState({passAsync:true});
          this.getNotValiSend();
    }
    /**
     * 调用验证码验证码
     */
    async getNotValiSend () {

        const data= await  api.getNotValiSend({
            imgVcode : this.state.imgVcode,
            phone    : this.state.phone
        });

        if(data.code === 1){
            this.setTimeFn()
        }
        else if(data.code === -200){
            this.setState({
                imgAsync : true
            });
            this.getImgSend();
            this.setState({passAsync:false});
        } else{
            message.info(data.message);
            this.getImgSend();
            this.setState({
                imgVcode :''
            });
            this.setState({passAsync:false});
        }

        
    }
    /*
    *倒计时
    */
     setTimeFn (){
         let num =60;
        let timer = setInterval(()=>{
            num--;
            if(num<=0){
                this.setState({
                    passAsync:false,
                    passText :'获取验证码'
                });
                clearInterval(this.state.timer)
            } else{
                this.setState({
                    passText :`${num}s`
                });
            }
            

        },100);

        this.setState({timer})

    }
    /**
     * 获取图片
     */
    async getImgSend () {
        const url= await  api.getImgSend({
            phone :this.state.phone,
            num :Math.random()
        });
        this.setState({
            imgUrl:url
        });
    }

    /*
    *登录
    */
    async register () {
        const data= await  api.login({
            loginPhone : this.state.phone,
            dnyCode    : this.state.valiCode,
            udid       : 'oz8TVwjyQDB5V2EDTarQ3gMWHa0Q',
            openId     : 'oz8TVwjyQDB5V2EDTarQ3gMWHa0Q'
        });
        if(data.respCode === '045' || data.respCode === '041'){
            localStorage.setItem('m-xuedai-request-obj',JSON.stringify({
            loginPhone : this.state.phone,
            token : data.token
            }));
            this.props.history.push('/')
        } else{
            message.info(data.message);
        }
    }



    render() {
        return (
            <div className="login-wrap">
                <section className="icon-box">
                    <img src={logo} alt="" />
                    <span>蜡笔分期</span>
                </section>
                <section className="form-box">
                <p className="phone-box g-border">
                    <input 
                        type="tel" 
                        placeholder="请输入手机号" 
                        value={this.state.phone} 
                        maxLength ="11" 
                        onChange={(e)=>{
                            this.setState({
                                phone :e.target.value,
                                imgAsync : false
                            })
                        }}
                    />
                    </p>
                    {
                    //条件渲染
                    this.state.imgAsync?
                        (<p className="img-box g-border g-cen-y">
                            <input type="text" 
                                placeholder="请输入图片验证码" 
                                value={this.state.imgVcode} 
                                maxLength ="4" 
                                onChange={(e)=>{
                                    this.setState({imgVcode :e.target.value})
                                }}/>
                            
                            <img src={this.state.imgUrl}  alt="" onClick={
                                ()=>{
                                    this.getImgSend()
                                }}/>
                        </p>):''
                    }
                    
                    <p className="pass-box g-border ">
                        <input type="tel" 
                            placeholder="请输入验证码" 
                            maxLength ="6" 
                            value={this.state.valiCode} 
                            onChange={(e)=>{
                                this.setState({valiCode :e.target.value})
                            }}/>
                        <button className="btn" onClick={()=>{
                            this.passBtnFn()
                        }} disabled={this.state.passAsync}>{this.state.passText}</button>
                    </p>
                </section>
                <section className="g-btns-box btn-box">
                    <button 
                        disabled={this.state.phone.length !== 11 || !this.state.valiCode || (!this.state.imgAsync ?false:!this.state.imgVcode)}
                        className={`${this.state.phone.length === 11 && this.state.valiCode!=='' && (!this.state.imgAsync ?true:this.state.imgVcode!=='') ? 'on':''}`}
                        onClick={()=>{
                            this.register()
                        }}>登录</button>
                </section>
            </div>
        );
    }
}

export default Login;
