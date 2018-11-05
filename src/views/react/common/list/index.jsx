import * as React from 'react';

class ListBox extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
        obj: props.val || ''
    };
}
     render() {
        // const { location } = this.props;
        // console.log(location)
        return (
            <div className="not-found">
                <h3>{this.state.obj.id} 、{this.state.obj.val}</h3>
            </div>
        );
    }
}

export default ListBox;

