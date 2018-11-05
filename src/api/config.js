const isDev = process.env.NODE_ENV === 'development';
// const protocol = window.location.protocol;

export default {
  ajaxBasePath: isDev ? '/api' : '',
  path: `https://txuedai.labifenqi.com/gateway2server/`
};



/* {
//微信分享接口
shareWeChat(params) {return fetch(`/vx/weixinAuth/shareWeChat`, params,'post')},
//获取code
getCode(params) {return fetch(`vx/weixinAuth/getCode`, params,'post')},
//获取OpenId
getOpenId(params) {return fetch(`vx/weixinAuth/getOpenId`, params,'post')},
//获取grantPuzzle
grantPuzzle(params,code) {return fetch(`vx/weixinAuth/grantPuzzle?code=${code}`, params,'get')},
//微信号是否绑定
isBind(params) {return fetch(`vx/weixinAuth/isBind`, params,'post')},
//微信登录
wLogin(params) {return fetch(`vx/login/wLogin`, params,'post')},
//微信号解绑
unBind(params) {return fetch(`vx/weixinAuth/unBind`, params,'post')},

//登录
login(params) {return fetch(`rulecheckController/login`, params,'post')},


//登录或注册
register(params) {return fetch(`vx/login/login`, params,'post')},
//获取短信验证码，蜡笔发送，不校验token
getNotValiSend(params) {return fetch(`vx/basic/notVali/send`, params,'post')},
//获取图片验证码
getImgSend(params,phone,num) {return fetch(`vx/basic/send/${phone}?${num}`, params,'',true)},



//保存地理位置
saveLocation(params) {return fetch(`common/saveLocation`, params,'post')},
//查询省市县
queryArea(params) {return fetch(`basicController/queryArea`, params,'post')},
//查询省市县文件最后修改时间
queryAreaLastTime(params) {return fetch(`basicController/queryAreaLastTime`, params,'post')},

//基本信息认证
queryAuthInfo(params) {return fetch(`vx/userInfo/queryAuthInfo`, params,'post')},
//保存联系人
saveLinkInfo(params) {return fetch(`basicFController/saveLinkInfo`, params,'post')},
//查询身份证信息
queryBasicByPhone(params) {return fetch(`tradeController/queryBasicByPhone`, params,'post')},

//查询资产信息接口
queryAssetInfo(params) {return fetch(`assetController/queryAssetInfo`, params,'post')},
//保存资产信息接口
saveAssetInfo(params) {return fetch(`assetController/saveAssetInfo`, params,'post')},


//根据类型上传文件
upload(params) {return fetch(`vx/file/base64/upload`, params,'post')},
//实名认证校验
saveRegiUserBase(params) {return fetch(`vx/userInfo/saveRegiUserBase`, params,'post')},

//保存个人信息
saveBasicInfo(params) {return fetch(`vx/userInfo/saveBasicInfo`, params,'post')},
//获取个人信息
getBasicInfo(params) {return fetch(`vx/userInfo/getBasicInfo`, params,'post')},


//校验联系人信息
vailLinkInfo(params) {return fetch(`vx/userInfo/vailLinkInfo`, params,'post')},
//保存联系人信息
saveLinkInfo(params) {return fetch(`vx/userInfo/saveLinkInfo`, params,'post')},
//获取联系人信息
getLinkInfo(params) {return fetch(`vx/userInfo/getLinkInfo`, params,'post')},



//运营商授权（贷后邦）
goOperatorNewPage(params,phone,token) {return fetch(`ruleController/goOperatorNewPage?loginPhone=${phone}&token=${token}`, params,``)},


// 校验个人信息、实名认证是否完成
queryBasicAuthInfo(params) {return fetch(`vx/operate/queryBasicAuthInfo`, params,`post`)},
// 运营商-运营商服务密码登录+令牌（token）获取
operatorAuthTokenAndLogin(params) {return fetch(`vx/operate/operatorAuthTokenAndLogin`, params,`post`)}, 
//运营商-短信验证码
operatorMsg(params) {return fetch(`vx/operate/operatorMsg`, params,`post`)},
//运营商--提交登录短信验证码  或者  提交查询详单短信验证码
referMsg(params) {return fetch(`vx/operate/referMsg`, params,`post`)},
//运营商--提交详单密码接口
referDetailPwd(params) {return fetch(`vx/operate/referDetailPwd`, params,`post`)},




//获取订单key
getOrderKey(params) {return fetch(`vx/order/getOrderKey`, params,'post')},

//根据订单ID查看详细信息
queryOrderByLoanId(params) {return fetch(`vx/order/queryOrderByLoanId`, params,'post')},
//获取还款详情
activePayRecord(params) {return fetch(`activePayController/activePayRecord`, params,'post')},
//主动还款列表
activePayDetail(params) {return fetch(`vx/order/activePayDetail`, params,'post')},


//学贷下订单
loanInstallOrderXf(params) {return fetch(`custodyController/loanInstallOrderXf`, params,'post')},

//上传确认函 -  改为上传照片
uploadConfirmation(params) {return fetch(`beforeOrder/uploadConfirmationNew`, params,'post')},
//保存借款人
saveBorrowers(params) {return fetch(`borrowerController/saveBorrowers`, params,'post')},

//还款方式查询接口
queryRepayMethod(params) {return fetch(`activePayController/queryRepayMethod`, params,'post')},
//查询银行卡（主卡）
queryUserBankByPhone(params) {return fetch(`tradeController/queryUserBankByPhone`, params,'post')},
//立即还款
doPay(params) {return fetch(`activePayController/doPay`, params,'post')},



//根据businessId查询还款状态
queryActivePay(params) {return fetch(`activePayController/queryActivePay`, params,'post')},
//订单中心列表
queryLoanInfoList(params) {return fetch(`vx/order/queryLoanInfoList`, params,'post')},
//主动还款记录
activePayRecord(params) {return fetch(`activePayController/activePayRecord`, params,'post')},
//已结清证明链接接口
settleCertify(params) {return fetch(`settleController/settleCertify`, params,'post')}, 

//已结清证明下载接口(新服务)
downloadFn(params) {return fetch(`http://101.201.77.80:9998/fileDown-service/settleController/download`, params,'get')},



//查询还款详情以及费用详情(两笔)
queryRepayDetails(params) {return fetch(`vx/order/queryRepayDetails`, params,'post')},
//下单前合同地址展示
bfContractLink(params) {return fetch(`custodyController/bfContractLink`, params,'post')},
//下单前合同地址展示
afContractLink(params) {return fetch(`vx/order/afContractLink`, params,'post')},
//一键支付 通过key回显
getLoanInfoByKey(params) {return fetch(`onePayController/getLoanInfoByKey`, params,'post')}, 
//一键支付 通过key回显
queryOnePayStatus(params) {return fetch(`onePayController/queryOnePayStatus`, params,'post',true)}, 




//根据机构推荐码查询商户信息及商品各个方案
queryBusinessInfoAndProgram(params) {return fetch(`basicFController/queryBusinessInfoAndProgram`, params,'post')},
//根据方案查低高额还款期
queriesProgramListNew(params) {return fetch(`borrowerController/queriesProgramListNew`, params,'post')},
//学贷检查是否可以下单
loanCheckInstall(params) {return fetch(`rulecheckController/loanCheckInstall`, params,'post')},
//查询共同借款人
queryBorrowers(params) {return fetch(`borrowerController/queryBorrowers`, params,'post')},








//个人银行卡
//查询归属银行列表接口
queryBankTypes(params) {return fetch(`bankCardController/queryBankTypes`, params,'post')},
//开户接口
openAcount(params) {return fetch(`userAcountController/openAcount`, params,'post')},
//是否开户
isOpenAcount(params) {return fetch(`userBackCardController/isOpenAcount`, params,'post')},
//查询银行卡
queryUserBankInfo(params) {return fetch(`custodyController/queryUserBankInfo`, params,'post')},
//银行卡列表
queryAcountCardList(params) {return fetch(`userAcountController/queryAcountCardList`, params,'post')},
//鉴权 -- 输入脱敏卡号
acountCertified(params) {return fetch(`userAcountController/acountCertified`, params,'post')},
//更换主卡
mainCardChange(params) {return fetch(`userBackCardController/mainCardChange`, params,'post')},
//添加银行卡
addBankCard(params) {return fetch(`userAcountController/addBankCard`, params,'post',true)},
//保存银行卡信息
saveUserBankcard(params) {return fetch(`tradeController/saveUserBankcard`, params,'post')},
//变更银行卡信息
changeUserBankCard(params) {return fetch(`vx/userInfo/changeUserBankCard`, params,'post')},
//获取签约验证码接口
getSignVerfiyCode(params) {return fetch(`tradeController/getSignVerfiyCode`, params,'post')},
//获取是否签约
querySignRelation(params) {return fetch(`tradeController/querySignRelation`, params,'post')},
//查看是否签约
vailSignRelation(params) {return fetch(`vx/userInfo/vailSignRelation`, params,'post')},




//查询存管账户信息接口
queryCustodyAccInfo(params) {return fetch(`userAcountController/queryCustodyAccInfo`, params,'post')},
//（新）确认授权接口
confirmAuth(params) {return fetch(`userBackCardController/confirmAuth`, params,'post',true)},
//（新）变更交易密码
changeAccountPwd(params) {return fetch(`userBackCardController/changeAccountPwd`, params,'post',true)},
//（新）忘记交易密码
resetAccountPwd(params) {return fetch(`userBackCardController/resetAccountPwd`, params,'post',true)},
//（新）变更手机号
changeDepositPhone(params) {return fetch(`userBackCardController/changeDepositPhone`, params,'post',true)},
//（新）注销存管号
accountCancle(params) {return fetch(`userBackCardController/accountCancle`, params,'post',true)},
//（新）银行卡解绑 
bankUnbind(params) {return fetch(`userBackCardController/bankUnbind`, params,'post',true)},


//是否第一次存管支付
isFirstPay(params) {return fetch(`depositPayController/isFirstPay`, params,'post',true)},
//存管支付
depositPay(params) {return fetch(`depositPayController/pay`, params,'post',true)},


//还款
//获取短信验证码
sendMessageCode(params) {return fetch(`onePayController/sendMessageCode`, params,'post')},
//确认支付
confirmPay(params) {return fetch(`onePayController/confirmPay`, params,'post')},

//存管支付
depositPayControllerPay(params) {return fetch(`depositPayController/pay`, params,'post',true)},
//消息通知
getMessList(params) {return fetch(`vx/order/getMessList`, params,'post',true)},
}

*/