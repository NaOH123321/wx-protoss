import { Config } from "./config";

export class Base {
  baseRequestUrl: string;
  constructor() {
    this.baseRequestUrl = Config.restUrl;
  }

  request(params: Param) {
    const url = this.baseRequestUrl + params.url;
    if (!params.type) {
      params.type = "GET";
    }

    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        "content-type": "application/json",
        token: wx.getStorageSync("token")
      },
      success: res => {
        params.sCallBack && params.sCallBack(res.data);
      }
    });
  }

  getDataSet(event: any, key: string) {
    return event.currentTarget.dataset[key];
  }
}

export interface Param {
  url: string;
  type?: "GET" | "POST";
  data?: any;
  sCallBack: Function;
}
