import api from '$api';
// import { message } from 'antd';


/**
 * 验证邮箱是否使用过
 * @returns {boolean} true未使用  false已使用
 */
export const checkMail = (email) =>
    api.get(`/nologon/user/checkemail?email=${email}`).then(res => {
        // console.log('邮箱校验 ===> ', res.data);
        return res.data.code === 1 ? true : false;
    });



export const   login = () => 
    api.post('/rulecheckController/login',{
        loginPhone : '15531645453',
        dnyCode    : 'this.valiCode',
        udid       : 'this.$route.query.openId',
        openId     : 'this.$route.query.openId',
    }).then(res => {
        console.log(res)

        return res.data

    });

