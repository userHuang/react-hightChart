/*
  *切换颜色
  *huangjian 2018-05-18
*/
// 引入资源
import React, { Component } from 'react';
import { Popover,Icon } from 'antd';
// 本地资源
import ChartColorPanel from './ChartColorPanel';
import { chartColor } from '../../lib/util';

import '.././hightChart.css'
import './color.scss'

class ChartColorContent extends Component {
  state = {
    config: this.props.config,
    colorVisible: false,
    colorType:chartColor[0].key,
  }

  changeColorVisible = ()=> {
    this.setState({ colorVisible: true});
  }
  
  //更新图表配置
  updateConfig = (obj)=>{
    if(obj.chartConf){
      this.props.updateConfig(obj);
    }
    this.setState({
      colorVisible: false
    })
  }
  
  //获取颜色类型
  getColorType = (key)=> {
    for (let i in chartColor){
      let item = chartColor[i];
      if (item.key ===key){
        return chartColor[i].icon;
      }
    }
    return chartColor[0].icon;
  }

  render() {
    const { colorVisible, colorType } = this.state;
    const chartColorPanel = (<ChartColorPanel chartConf = {this.state.config} updateConfig ={this.updateConfig}/>);
    const backgroundImg = `background-img color ${this.getColorType(colorType)}`;
    return (
      <div className="xui-ChartColorContent xui-item-content">
        <div className="right-text">切换颜色</div>
        <Popover className="xi-popover" placement="topRight" content={chartColorPanel} trigger="click" visible={colorVisible} onVisibleChange={this.changeColorVisible}>
          <div className="select" style ={{width:"100px"}}>
              <div className={backgroundImg}/>
              <Icon type="down" />
          </div>
        </Popover>
      </div>
    );
  }
}

export default ChartColorContent;
