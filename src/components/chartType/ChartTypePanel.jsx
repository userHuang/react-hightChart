// 引入资源
import React from 'react';
import { Button, Tabs,Col,Row} from 'antd';
// 本地资源
import { chartType } from '../../lib/util';

import './style.scss';
import '.././hightChart.css'
const TabPane = Tabs.TabPane;

class ChartTypePanel extends React.Component {
    state = {
      chartConf: this.props.chartConf,
      allFlag:false,
      allType :"",
      typeText:"",
    }
    
    //切换图表类型
    changeType = (type ,name, index) => {
      //index === undefined? 切换全部: 切换单个
      let { chartConf } = this.state;
      let typeTextArr = [];

      if(index === undefined){
        //切换所有图标类型
        for (let i in chartConf.series) {
          chartConf.series[i].type = type;
        }
      } else {
        //切换每项图标类型
        chartConf.series[index].type = type;
        for (let i in chartConf.series){
          let item = chartConf.series[i];
          typeTextArr.push(this.getTypeName(item.type));
        }
      }

      this.setState({
        chartConf:chartConf,
        allFlag: index === undefined? true: false,
        allType: index === undefined? type: "",
        typeText:index === undefined? name: typeTextArr.join("|")
      });
    }
    
    //获取图形名称
    getTypeName(type){
      let typeName = "";
      for (let i in chartType ) {
        if (chartType[i].type === type){
          typeName = chartType[i].name;
        }
      }
      return typeName;
    }
    
    //保存图表配置
    save = () => {
      let { chartConf, typeText } = this.state;
      let obj = {
        chartConf:chartConf,
        typeText:typeText,
        typeVisible:false
      };
      this.props.updateConfig(obj);
    }
    
    //取消图表配置
    cancel = () => {
      let obj = { typeVisible: false };
      this.props.updateConfig(obj);
    }
  
    //获取所有图标类型
    getAllTabPanel = () => {
      let { allType, allFlag } = this.state;
      let iconClassName = "none-chart";

      if (allFlag){
        iconClassName = `${allType}-chart`;
      }

      var result = chartType.map((item, i)=> {
        let selected = item.type === allType? 'selected': '';
        const className = `${item.icon} chart-img ${selected}`;
        return(
          <Col span={6}  key ={i}>
            <div className ={className} onClick={()=>this.changeType(item.type, item.name)} title ={item.name}/>
          </Col>
        )
      })

      return (
        <TabPane tab={<div title ={"全部指标"} className ={iconClassName}>全部指标</div>} key="all">
          <Row type="flex" justify="start">
            {result}
          </Row>
        </TabPane>
      );
    }
    
    //获取每个图标类型
    getTabPanel = (ele, index) => {
      let iconClassName = `${ele.type}-chart`;

      let result = chartType.map((item, i)=> {
        let selected = item.type === ele.type  ? ' selected': '';
        const className = `${item.icon} chart-img ${selected}`;
        return(
          <Col span={6}  key ={i}>
            <div className ={className} onClick={()=>this.changeType(item.type, item.name, index)} title ={item.name}/>
          </Col>
        )
      })

      return (
        <TabPane tab={<div title ={ele.name} className ={iconClassName} >{ele.name}</div>} key={index}>
          <Row type="flex" justify="start">
            {result}
          </Row>
        </TabPane>
      );
    }

    render() {
      const { chartConf } = this.state;
      const series =  chartConf.series || [];
      //获取所有图标类型
      const allPanel = this.getAllTabPanel();
      //获取每个图标类型
      const items = series.map((item, i) => {
        return this.getTabPanel(item, i);
      });

      return (
        <div className ="abc-chart-type">
          <Tabs tabPosition={'left'} className="abc-chart-typeselect">
            {allPanel}
            {items}
          </Tabs>
          <div className= "right">
            <Button className ="save-btn btn" onClick ={this.save}>确定</Button>
            <Button className ="cancel-btn" onClick ={this.cancel}>取消</Button>
          </div>
        </div>
      )
    }
}

export default ChartTypePanel;