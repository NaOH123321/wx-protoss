import { Config } from './config';
import { Token } from './token';

export class Base {
  baseRequestUrl: string;
  constructor() {
    this.baseRequestUrl = Config.restUrl;
  }

  request(params: Param, noRefetch = false) {
    const url = this.baseRequestUrl + params.url;
    if (!params.type) {
      params.type = 'GET';
    }

    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
        token: wx.getStorageSync('token')
      },
      success: res => {
        // 判断以2（2xx)开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        const code = res.statusCode.toString();
        const startChar = code.charAt(0);
        if (startChar == '2') {
          params.sCallBack && params.sCallBack(res.data);
        } else {
          if (code == '401') {
            if (!noRefetch) {
              this._refetch(params);
            }
          }
          this._processError(res);
          params.eCallBack && params.eCallBack(res.data);
        }
      },
      fail: err => {
        //wx.hideNavigationBarLoading();
        this._processError(err);
        // params.eCallback && params.eCallback(err);
      }
    });
  }

  getDataSet(event: any, key: string) {
    return event.currentTarget.dataset[key];
  }

  _processError(err: any) {
    console.log(err);
  }

  _refetch(param: Param) {
    const token = new Token();
    token.getTokenFromServer(() => {
      this.request(param, true);
    });
  }
}

export interface Param {
  url: string;
  type?: 'GET' | 'POST';
  data?: any;
  sCallBack: Function;
  eCallBack?: Function;
}
