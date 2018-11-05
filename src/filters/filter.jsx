

export default {
  // 手机脱敏
  phoneHid (val) {
    if(val){
      let str = `${val.substring(0,4)}****${val.substring(7,11)}`;
      return str;
    }
    return val;
  },
  //千分符
  moneyFn (val){
    if(val){
      let re = /^[0-9]+.?[0-9]*$/; 
      if (!re.test(val)) {
        val = val.replace(/[^\d]/g,'');
      }
      return val.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    }
    return val;
  }
}