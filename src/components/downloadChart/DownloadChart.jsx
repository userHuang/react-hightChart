/*
  *导出图表
  *huangjian 2018-05-18
*/
// 引入资源
import React, { Component } from 'react';
import { Modal } from 'antd';

// 本地资源
import ChartImage from "./ChartImage";

class DownloadChart extends Component {
  state = {
    chartConf: this.props.config,
    showImageSetting: false
  }
  
  showDownloadImg = () => {
    this.setState({
      showImageSetting: true
    });
  }

  render() {
    const {showImageSetting, chartConf} = this.state;
    const isExportChart = this.props.isExportChart;
    return (
      <div className ={`xui-downloadChart xa-isExportChart-${isExportChart}`}>
        <a onClick = {this.showDownloadImg}>导出图表</a>
        <Modal title='导出图片' width={900} footer={null}
          visible={showImageSetting}
          onCancel={() => this.setState({showImageSetting: false})}>
          <ChartImage chartConf={chartConf}/>
        </Modal>
      </div>
    )
  }
}

export default DownloadChart;