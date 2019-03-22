import * as React from 'react';
import './index.scss';
import { DatePickerView } from 'antd-mobile';
 

class NotFound extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      h :'',
      value:''
    };

  }
  
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };
  onValueChange = (...args) => {
    console.log(args);
  };

  render() {
    // let num = this.state.num;
    return (
      <div className="react-wrap" >
        <DatePickerView
        value={this.state.value}
        onChange={this.onChange}
        onValueChange={this.onValueChange}
      />
        <h2>holle word</h2>
        <button onClick={()=>{
            this.props.history.push('/');
        }}>回到首页</button>
      </div>
    );
  }
}

export default NotFound;
