import React, {Component} from 'react';
import {withRouter} from 'dva/router'

 class AA extends Component {
  
  goIndex=()=>{
    this.props.history.push('/')
  }

  render(){
    return (
      <div>
          公共组建 AA
          <button onClick={this.goIndex}>首页</button>
      </div>
    );
  }

};


export default withRouter(AA);
