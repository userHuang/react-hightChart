// 引入资源
import React from 'react';
import {Row, Col, Checkbox, Button, Radio } from 'antd';
import ReactHighcharts from 'react-highcharts';
import HighchartsExporting  from 'highcharts-exporting';
import OfflineExporting from  'highcharts-offline-exporting';
// 本地资源
import ChartColorContent from '.././chartColor/ChartColorContent';
import './style.scss';

OfflineExporting(ReactHighcharts.Highcharts);
HighchartsExporting(ReactHighcharts.Highcharts);

class ChartImage extends React.Component {
  state = {
    chartConf: this.props.chartConf,
    imgAdditions: [],
    imgScale: 1,
    title: "",
    chartType:"image/jpeg",
    chartWidth: 1200,
    chartHeight: 900
  }

  //更新图表配置
  updateConfig = (obj)=>{
    this.setState(obj);
  }
  
  // 导出尺寸
  changeImgScale = (event) => {
    let imgScale = event && event.target ? event.target.value : 1;
    let height = 900;
    if (imgScale ) {
      switch(imgScale) {
        case 2:
          height = 800;
          break;
        case 3:
          height = 600;
          break;
        case 4:
          height = 1200;
          break;
        default:
          height = 900;
          break;
      }
    }
    this.setState({
      imgScale: imgScale,
      chartHeight:height
    });
  }
  
  //图表设置
  changeImgAddition = (value) => {
    let { title, chartConf } = this.state;

    if (value.indexOf("1") !== -1){
      chartConf.title.text = title;
    }else{
      chartConf.title.text = "";
    }

    if (value.indexOf("2") !== -1){
      chartConf.legend.enabled = true;
    }else{
      chartConf.legend.enabled = false;
    }

    this.setState({
      imgAdditions: value,
      chartConf:chartConf
    });
  }
  
  //图片格式
  changeChartType = (event) => {
    let type = event && event.target? event.target.value: "image/jpeg";
    this.setState({chartType:type});
  }
  
  //导出图片
  exportImage = () => {
    const { title, chartType, chartWidth, chartHeight } = this.state;
    const options= {
      sourceWidth:chartWidth,
      sourceHeight:chartHeight,
      filename:title,
      type:chartType,
    }
    const charts = this.refs.charts;
    charts.chart.exportChartLocal(options);
  }

  render(){
    const { chartConf, imgAdditions, imgScale, chartType } = this.state;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <div className="abc-chart-img-con">
        <Row>
          <Col span={17}>
            <ReactHighcharts ref="charts" config={chartConf}/>
          </Col>
          <Col span={7}>
            <div className="abc-chart-setting">
              <div className="abc-chart-setting-item xa-export-chart" style ={{height:" 50px"}}>
                <ChartColorContent config={chartConf} updateConfig={this.updateConfig}/>
              </div>
              <div className="abc-chart-setting-item">
                <span style ={{marginRight:"10px"}} >图表设置</span>
                <Checkbox.Group value={imgAdditions} onChange={(value)=>{
                  this.changeImgAddition(value)
                }}>
                  <Checkbox value="1">图例</Checkbox>
                  <Checkbox value="2">标题</Checkbox>
                </Checkbox.Group>
              </div>
              <div className="abc-chart-setting-item">
                <span style ={{marginRight:"10px", float:"left",marginTop:"15px"}} >导出尺寸</span>
                <Radio.Group value={imgScale} style={{paddingTop: 10}}
                  onChange={(event)=>{this.changeImgScale(event)}}>
                  <Radio style={radioStyle} value={1}>4:3(1200 * 900 px)</Radio>
                  <Radio style={radioStyle} value={2}>3:2(1200 * 800 px)</Radio>
                  <Radio style={radioStyle} value={3}>2:1(1200 * 600 px)</Radio>
                  <Radio style={radioStyle} value={4}>1:1(1200 * 1200 px)</Radio>
                </Radio.Group>
              </div>
              <div className="abc-chart-setting-item">
                <span style ={{marginRight:"10px", float:"left",marginTop:"15px"}} > 图片格式</span>
                <Radio.Group value={chartType} style={{paddingTop: 10}} onChange={(event)=>{this.changeChartType(event)}}>
                  <Radio style={radioStyle} value={"image/jpeg"}>JPG</Radio>
                  <Radio style={radioStyle} value={"image/png"}>PNG</Radio>
                  <Radio style={radioStyle} value={"image/svg+xml"}>SVG(支持无限放大)</Radio>
                </Radio.Group>
              </div>
              <div className="abc-chart-setting-item noborder">
                <Button className="primary" onClick={this.exportImage}>
                  导出图片
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ChartImage;