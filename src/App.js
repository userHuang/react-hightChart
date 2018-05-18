import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

import ABCHightChart from './components/ABCHightChart';


// <Switch>
//   <Route path="/chart" component={ABCHightChart} width={500} height={500}/>
// </Switch>
class App extends Component {
  render() {
    const data = {
      "title": "图2：公司盈利能力持续提升",
      "url": "http://abc-crawler.oss-cn-hangzhou.aliyuncs.com/charts/87c51c37326b38f0304ff20183e6d33fe0ad4806b52e6d4740311bd8e3a06b05/2_1.png",
      "id": "13010259_2_1",
      "data": {
        "AlgorithmCommitTime": {
          "text": "2018-05-07 11:00:00"
        },
        "credits": {
          "enabled": false
        },
        "title": {
          "text": "图2：公司盈利能力持续提升"
        },
        "xAxis": {
          "type": "category",
          "labels": {
            "textalign": "center"
          },
          "categories": ["FY2012", "FY2013", "FY2014", "FY2015", "FY2016", "FY2017"]
        },
        "yAxis": [{
          "labels": {
            "format": "{value}%",
            "style": []
          },
          "title": {
            "text": "",
            "style": []
          },
          "tickPositions": [0, 20, 40, 60, 80],
          "tickAmount": 5
        }],
        "legend": {
          "enabled": true
        },
        "series": [{
          "name": "毛利率(%)",
          "type": "spline",
          "color": "#2e75b6",
          "data": [
            ["FY2012", 46.4256],
            ["FY2013", 49.4852],
            ["FY2014", 50.3581],
            ["FY2015", 56.0366],
            ["FY2016", 59.2864],
            ["FY2017", 60.1506]
          ],
          "tooltip": {
            "pointFormat": "{series.name}: {point.y:,.2f}%"
          },
          "dataLabels": {
            "enabled": false,
            "format": "{point.y:,.f}%"
          },
          "marker": {
            "enabled": false
          }
        }, {
          "name": "净利率(%)",
          "type": "line",
          "color": "#b4c7e7",
          "data": [
            ["FY2012", 10.769],
            ["FY2013", 11.7029],
            ["FY2014", 13.5706],
            ["FY2015", 14.6082],
            ["FY2016", 14.4006],
            ["FY2017", 14.1931]
          ],
          "tooltip": {
            "pointFormat": "{series.name}: {point.y:,.2f}%"
          },
          "dataLabels": {
            "enabled": false,
            "format": "{point.y:,.f}%"
          },
          "marker": {
            "enabled": false
          }
        }]
      },
      "pageIndex": 2,
      "area": {
        "x": 309.07,
        "y": 420.88,
        "w": 222.17,
        "h": 132.29
      },
      "x": 309.07,
      "y": 420.88
    };
    /*
      isShare:         是否显示分享
      isChangeType:    是否显示切换类型
      isChangeColor:   是否显示切换颜色
      isExportData:    是否显示导出数据
      isExportChart:   是否显示导出图片
      注: 以下参数传true显示, false则不会显示, 不传默认展示，即1和2的效果一样:
        1. <ABCHightChart chartData={data} />
        2. <ABCHightChart 
            chartData={data} 
            isShare={true} 
            isChangeType={true} 
            isChangeColor={true} 
            isExportData={true} 
            isExportChart={true} 
          />
    */
    return (
      <div className="App">
        <ABCHightChart 
          chartData={data} 
          isShare={true} 
          isChangeType={true} 
          isChangeColor={true} 
          isExportData={true} 
          isExportChart={true} 
        />
      </div>
    );
  }
}

export default App;
