import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import copy from 'copy-to-clipboard';
import { message, Icon } from 'antd';

import './share.css'

class ShareQrcode extends Component {
  state = {
    isShowShare: false,
    url: window.location.href
  }

  //分享是否展示
  showOrShare = () => {
    this.setState({
      isShowShare: !this.state.isShowShare
    })
  }

  //复制链接
  copyUrl = () => {
    copy(window.location.href);
    message.success('复制成功!');
  }

  render() {
    const isShowShare = this.state.isShowShare;
    const isShowShareStyle = isShowShare? {display: 'block'}: {display: 'none'};
    return (
      <div className={isShowShare? 'ui-share-container pa active': 'ui-share-container pa'}>
        <div className="share-button" onClick={this.showOrShare}>分享<Icon type="share-alt"/></div>
        <div className="share-popover" style={isShowShareStyle}>
          <div className="share-content">
            <div className="share-title">分享链接</div>
            <input className="share-url-box" type="url" readOnly value={this.state.url} title={this.state.url} />
            <div id="share-copy-button" className="share-copy-button" onClick={this.copyUrl}>复制链接</div>
          </div>
          <div className="share-qrcode">
            <div className="qrcode-box">
              <div title="http://www.analyst.ai/share/?6XrdO1">
                <QRCode size={100} value={this.state.url}/>
              </div>
            </div>
            <p className="qrcode-description">扫描二维码 分享到微信</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShareQrcode;
