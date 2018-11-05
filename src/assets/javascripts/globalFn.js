import md5 from 'js-md5';
//md5加密
function getmd5(str) {
   return  md5(str); 
}
//转译  时间
function getFormateDate(type){
  let date = new Date(),
      year = date.getFullYear(),
      month = (date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1),
      day = date.getDate()<10?'0'+date.getDate():date.getDate(),
      hours = date.getHours()<10?'0'+date.getHours():date.getHours(),
      min = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes(),
      sec = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();


    if(type ==='1'){
      return year+'-'+month+'-'+day+' '+hours+':'+min+':'+sec;
    } else if(type ==='2'){
      return year+'-'+month+'-'+day;
    }
}

let Gfn = {
  loginObj(res){
    let loginPhone = res.loginPhone ;
    // let password   =  getmd5(res.passWord) ;
    let reqTime    = getFormateDate('1'),
        sign       = getmd5(loginPhone+reqTime);
    let obj = {
      "chanName":"M-site",
      "chanType":"M-site",
      "entranceID":"50",
      // loginPhone,
      reqTime,
      sign,
      // passWord :password,
      udid  : ''
    }
  
    Object.assign(obj,res);
    return obj;
  }
}

export default Gfn;