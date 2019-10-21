// 引用使用es6的module引入和定义
// 全局变量以g_开头
// 私有函数以_开头

import { Config } from './config';

export class Token {
  verifyUrl: string;
  tokenUrl: string;

  constructor() {
    this.verifyUrl = Config.restUrl + 'token/verify';
    this.tokenUrl = Config.restUrl + 'token/user';
  }

  verify() {
    const token = wx.getStorageSync('token');
    if (!token) {
      this.getTokenFromServer();
    } else {
      this._veirfyFromServer(token);
    }
  }

  _veirfyFromServer(token: string) {
    wx.request({
      url: this.verifyUrl,
      method: 'POST',
      data: {
        token: token
      },
      success: res => {
        const data = res.data as Record<string, any>;
        const valid = data.isValid;
        if (!valid) {
          this.getTokenFromServer();
        }
      }
    });
  }

  getTokenFromServer(callBack?: Function) {
    wx.login({
      success: res => {
        wx.request({
          url: this.tokenUrl,
          method: 'POST',
          data: {
            code: res.code
          },
          success: res => {
            const data = res.data as Record<string, any>;
            wx.setStorageSync('token', data.token);
            callBack && callBack(data.token);
          }
        });
      }
    });
  }
}
