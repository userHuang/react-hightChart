/*
  *图表详情展示
  *huangjian 2018-05-18
*/
// 引入资源
import React, { Component } from 'react';
import { Popover,Button } from 'antd';
import ReactHighcharts from 'react-highcharts';//图表
// 本地资源
import ShareQrcode from './shareQrcode/ShareQrcode';//二维码
import ChartColorContent from './chartColor/ChartColorContent';//颜色类型
import ChartTypeContent from './chartType/ChartTypeContent';//图表类型
import DownloadData from './downloadData/DownloadData';//下载数据
import DownloadChart from './downloadChart/DownloadChart';//下载图表

import './hightChart.css'

class ABCHightChart extends Component {
  state = {
    chartData: this.props.chartData,
    config: this.props.chartData.data
  }
  
  //更新图表配置
  updateConfig = (obj)=>{
    this.setState(obj);
  }

  render() {
    const { isShare, isExportData, isExportChart, isChangeType, isChangeColor } = this.props;
    const { chartData } = this.state;
    const config = chartData.data;
    const width = this.props.width || null;
    const height = this.props.height || null;
    config["chart"] = {
      width: width,
      height: height
    }
    config["title"] = {
      text: ''
    }


    let isExport;
    if(!isExportData && !isExportChart && isExportData !== undefined && isExportChart !== undefined){
      isExport = false;
    }

    console.log(isShare, isExport, isChangeType, isChangeColor,"===isShare, isExport, isChangeType, isChangeColor===");

    const content = (
      <div>
        <DownloadData config={config} isExportData={isExportData}/>
        <DownloadChart config={config} isExportChart={isExportChart}/>
      </div>
    );
    return (
      <div className="ABC-HightChart">
        <div className="xui-chart-head">
          <div className="xi-chart-title">{chartData.title}</div>
          <div className="xi-chart-time">{config.AlgorithmCommitTime.text}</div>
          <div className={`xi-chart-share xa-chart-custom-compoent xa-isShare-${isShare}`}>
            <ShareQrcode />
          </div>
          <div className={`xi-chart-export xa-chart-custom-compoent xa-isExport-${isExport}`}>
            <Popover placement="bottom" content={content} trigger="click">
              <Button>导出</Button>
            </Popover>
          </div>
          <div className={`xi-chart-color xa-chart-custom-compoent xa-isChangeColor-${isChangeColor}`}>
            <ChartColorContent config={config} updateConfig={this.updateConfig}/>
          </div>
          <div className={`xi-chart-type xa-chart-custom-compoent xa-isChangeType-${isChangeType}`}>
            <ChartTypeContent config={config} updateConfig={this.updateConfig}/>
          </div>
        </div>
        <div className="xui-HightChart"><ReactHighcharts config={config}/></div>
      </div>
    );
  }
}

export default ABCHightChart;