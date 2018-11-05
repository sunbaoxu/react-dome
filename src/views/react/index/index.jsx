import * as React from 'react';
import './index.scss';

 

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
      <div className="react-wrap" >
        <h2>holle word</h2>
        <button onClick={()=>{
            this.props.history.push('/');
        }}>回到首页</button>
      </div>
    );
  }
}

export default NotFound;
