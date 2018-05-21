/*
  *切换类型
  *huangjian 2018-05-18
*/
// 引入资源
import React, { Component } from 'react';
import { Popover,Icon } from 'antd';
// 本地资源
import ChartTypePanel from './ChartTypePanel';

import './style.scss';
// import '.././hightChart.css'

class ChartTypeContent extends Component {
  state = {
    config: this.props.config,
    typeVisible:false,
    typeText:"请选择图表类型",
  }

  changeTypeVisible = ()=> {
    this.setState({ typeVisible:true});
  }
  
  //更新图表配置
  updateConfig = (obj)=>{
    if(obj.chartConf){
      this.props.updateConfig(obj);
    }
    this.setState({
      typeVisible: false
    })
  }

  render() {
    const { typeVisible, typeText } = this.state;
    const chartTypePanel = (<ChartTypePanel chartConf ={this.state.config} updateConfig ={this.updateConfig}/>);
    return (
      <div className="xui-ChartTypeContent xui-item-content">
        <div className = "right-text">切换类型</div>
          <Popover placement="topRight" content={chartTypePanel} trigger="click" visible={typeVisible} onVisibleChange={this.changeTypeVisible}>
            <div className = "select" style ={{width:"120px"}}>
              <div className = "select-text" title ={typeText}>{typeText}</div>
              <Icon type="down" />
            </div>
          </Popover>
      </div>
    );
  }
}

export default ChartTypeContent;
