import React , { Component } from 'react';
import { connect } from 'dva'
import * as apis from '../services/example'

class IndexPage extends Component{

  componentDidMount(){
     apis.testCnode().then(res=>{
       // console.log(res)
     })
  }
  
  handleSetName =()=>{
     this.props.dispatch({ //派发action
       type:'indexTest/setName',
       data:{
         name:'lbj'
       }
     })
  }

  handleSetNameAsync=()=>{
    this.props.dispatch({ //派发异步action
      type:'indexTest/setNameAsync',
      data:{
        name:'wade'
      }
    })
  }

  testCnode=()=>{
    this.props.dispatch({ //派发异步action
      type:'indexTest/testCnode',
    })
  }

   render(){
     return(
       <div>
          IndexPage
          { this.props.name }
          <br/>
          <button onClick={this.handleSetName}>setName</button>
          <br/>
          <button onClick={this.handleSetNameAsync}>setName 异步</button>
          <br/>
          setCnodeTest : { this.props.cnodeList }
          <button onClick={this.testCnode}>接口</button>
       </div>
     )
   }
}

// 获取redux数据
const mapStateToProps = state =>{
  return {
    name:state.indexTest.name,
    cnodeList:state.indexTest.cnodeList,
  }
}

export default  connect(mapStateToProps)(IndexPage)
