import React,{Component} from 'react';
import {Link} from 'dva/router'
import AA from '../components/AA'

class UserPage extends Component{

  goIndex=()=>{
    this.props.history.push('/')
  }

   render(){
     return (
       <>
         <div>user</div>
         <Link to='/'>首页</Link>
         <button onClick={this.goIndex}>首页</button>
         <AA /> 
       </>
     )
   }

}

export default UserPage
