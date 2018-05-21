/*
  *导出数据
  *huangjian 2018-05-18
*/

// 引入资源
import React, { Component } from 'react';

// 本地资源
import tableUtils from "../../lib/tableUtils";
import "./style.scss";

class DownloadChart extends Component {
    state = {
      chartConf: this.props.config
    }
    
    download = () => {
      const { chartConf } = this.state;
      const downloadData = tableUtils.getImageText(chartConf);
      tableUtils.downloadExcel(chartConf.chartTitle, downloadData);
    }

    render() {
      const isExportData = this.props.isExportData;
      return (
        <div className ={`xui-downloadData xa-isExportData-${isExportData}`}>
          <a onClick = {this.download}>导出数据</a>
        </div>
      )
    }
}

export default DownloadChart;