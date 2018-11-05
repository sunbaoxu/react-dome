import api from '$api';
import Gfn from '$js/globalFn';


/**
 * 验证邮箱是否使用过
 * @returns {boolean} true未使用  false已使用
 */
export const checkMail = (email) =>
    api.get(`/nologon/user/checkemail?email=${email}`).then(res => {
        // console.log('邮箱校验 ===> ', res.data);
        return res.data.code === 1 ? true : false;
    });



export const   login = (data) => 
    api.post('vx/login/login',Gfn.loginObj(data)).then(res => {
        
        return res.data

    });

// 获取验证码
export const   getNotValiSend = (data) => 
    api.post('vx/basic/notVali/send',data).then(res => {
        return res.data;
    });

// 获取图片
export const   getImgSend = (data) =>  `${api.defaults.baseURL}vx/basic/send/${data.phone}?${data.num}`

