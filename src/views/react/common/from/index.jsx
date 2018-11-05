import * as React from 'react';
import './from.scss';

function FromBox(props) {
  function chengFn(e) {
    let val = e.target.value,
        re = /^[0-9]$/; 
      if (!re.test(val)) {
        val = val.replace(/[^\d]/g,'');
      }
      // 接受父组件传递过来的函数，调用并传值
      props.onChengFn(val)
  }
  return (
    <p>
      <label htmlFor="tempInput">请输入钱数：</label>
        {/* onChange 事件调用函数*/}
      <input type="num" name="tempInput" value={props.num} onChange={chengFn} maxLength="14"/>
    </p>
  )
}

export default FromBox;