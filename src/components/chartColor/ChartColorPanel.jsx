// 引入资源
import React from 'react';
import { Input, Button, Select, Tabs } from 'antd';
import { CirclePicker } from 'react-color';
// 本地资源
import { chartColor } from '../../lib/util';

const TabPane = Tabs.TabPane;
const Option = Select.Option;

class ChartColorPanel extends React.Component {
    state = {
      colorSet: chartColor[0].colors,
      selectedColor: chartColor[0].colors[0],
      chartConf: this.props.chartConf,
      defaultValue: chartColor[0].key,
      colorType:chartColor[0].key,
    }
    
    //下拉配色方案
    handleColorGroupChange = (colorGroupCode) => {
      chartColor.map((color) => {
        if (color.key === colorGroupCode){
          this.setState({
            colorSet: color.colors,
            colorType: colorGroupCode
          });
        }
      })
    }
    
    //选择方案默认颜色
    changeChartColor = (colorCode, i) => {
      let {chartConf} = this.state;
      chartConf.series[i].color = colorCode.hex;
      this.setState({
        chartConf:chartConf,
        selectedColor: colorCode.hex
      });
    }

    //自定义颜色
    handleInputChange = (e,i) => {
      let { chartConf } = this.state;
      chartConf.series[i].color = e.target.value;
      this.setState({
        chartConf:chartConf,
        selectedColor: e.target.value
      });
    }

    //确认
    save= () => {
      let {chartConf, colorType} = this.state;
      let obj = {
          chartConf:chartConf,
          colorVisible:false,
          colorType:colorType
      };
      this.props.updateConfig(obj);
    }

    //取消
    cancel = () => {
      let obj = { colorVisible: false };
      this.props.updateConfig(obj);
    }

    render() {
        let {chartConf, defaultValue, colorSet} = this.state ;
        let series =  chartConf.series || [];
        const colorOptions = chartColor.map((color, index)=>{
          return(
            <Option value={color.key} key ={index}>
              <span><div className ={"color " + color.icon}/>{color.name}</span>
            </Option>
          )
        });

        return (
          <div className="abc-chart-colorselect-con">
            <div className= "select-input">

              <Select defaultValue= {defaultValue} style={{float:"right"}} onChange={this.handleColorGroupChange}>
                {colorOptions}
              </Select>
            </div>
            <Tabs  tabPosition={'left'} className="abc-chart-colorselect">
              {series.map((item, i) => (
                <TabPane tab={<div title={item.name}><div className="tab-color" style={{backgroundColor:item.color||"#26C6DA"}}/>{item.name}</div>} key={i}>
                  配色方案：
                  <CirclePicker colors={colorSet} onChange={(colorCode) => {this.changeChartColor(colorCode, i)}}/>
                  自定义颜色：
                  <Input value={this.state.selectedColor} onChange={(e) => {this.handleInputChange(e, i)}} />
                </TabPane>))
              }
            </Tabs>
            <div className= "right">
              <Button className ="save-btn btn" onClick = {this.save}> 确定</Button>
              <Button className ="cancel-btn" onClick = {this.cancel}> 取消</Button>
              </div>
          </div>
        );
    }
}

export default ChartColorPanel;