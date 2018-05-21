/*
  *图表详情展示
  *huangjian 2018-05-18
*/
// 引入资源
import React, { Component } from 'react';
import { Popover, Button, Divider } from 'antd';
import ReactHighcharts from 'react-highcharts';//图表
// 本地资源
import ShareQrcode from '../shareQrcode/ShareQrcode';//二维码
import ChartColorContent from '../chartColor/ChartColorContent';//颜色类型
import ChartTypeContent from '../chartType/ChartTypeContent';//图表类型
import DownloadData from '../downloadData/DownloadData';//下载数据
import DownloadChart from '../downloadChart/DownloadChart';//下载图表

import './hightChart.css'

class ABCHightChart extends Component {
  state = {
    config: this.props.chartData.data,
    acticleInfo: this.props.acticleInfo
  }
  
  //更新图表配置
  updateConfig = (obj)=>{
    this.setState(obj);
  }

  render() {
    const { isShare, isExportData, isExportChart, isChangeType, isChangeColor } = this.props;
    const { config, acticleInfo } = this.state;
    const width = this.props.width || null;
    const height = this.props.height || null;
    //设置图表大小
    config["chart"] = {
      width: width,
      height: height
    }
    //导出数据标题
    config['chartTitle'] = acticleInfo.image_title;
    //不展示默认标题
    config["title"] = {
      text: ''
    }

    let isExport;
    if(!isExportData && !isExportChart && isExportData !== undefined && isExportChart !== undefined){
      isExport = false;
    }

    const content = (
      <div>
        <DownloadData config={config} isExportData={isExportData}/>
        <DownloadChart config={config} isExportChart={isExportChart}/>
      </div>
    );

    return (
      <div className="ABC-HightChart">
        <div className="xui-chart-head">
          <div className="xi-chart-title">{acticleInfo.image_title}</div>
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
          <div className="xi-chart-time">{acticleInfo.time}</div>
          <div className="meta-info">
            <span>类别：<font className="JS-finful-type">{acticleInfo.type}</font></span><Divider type="vertical" />
            <span>作者：<span className="JS-finful-author">{acticleInfo.author}</span></span><Divider type="vertical" />
            <span>来源：<a className="JS-finful-source" target="_blank" href={acticleInfo.source_url}><span dangerouslySetInnerHTML={{__html:acticleInfo.source_title}}></span></a></span>
          </div>
        </div>
        <div className="xui-HightChart"><ReactHighcharts config={config}/></div>
      </div>
    );
  }
}

export default ABCHightChart;