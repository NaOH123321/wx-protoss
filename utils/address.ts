import { Base, Param } from './base';

export class Address extends Base {
  constructor() {
    super();
  }

  /*获得我自己的收货地址*/
  getAddress(callback: Function) {
    const param: Param = {
      url: 'address',
      sCallBack: (res: AddressItem) => {
        if (res != null) {
          res.totalDetail = this.setAddressInfo(res);
          callback!(res);
        }
      }
    };
    this.request(param);
  }

  /*更新保存地址*/
  submitAddress(data: AddressItem, callback: Function) {
    console.log(data);
    var param: Param = {
      url: 'address',
      type: 'POST',
      data: data,
      sCallBack: (res: any) => {
        callback!(true, res);
      },
      eCallBack: (res: any) => {
        callback!(false, res);
      }
    };
    this.request(param);
  }

  /*是否为直辖市*/
  isCenterCity(name: string) {
    const centerCitys = ['北京市', '天津市', '上海市', '重庆市'];
    const flag = centerCitys.indexOf(name) >= 0;
    return flag;
  }

  /*
   *根据省市县信息组装地址信息
   * provinceName , province 前者为 微信选择控件返回结果，后者为查询地址时，自己服务器后台返回结果
   */
  setAddressInfo(res: WxAddressItem | AddressItem): string {
    const province =
      (res as WxAddressItem).provinceName || (res as AddressItem).province;
    const city = (res as WxAddressItem).cityName || (res as AddressItem).city;
    const country =
      (res as WxAddressItem).countyName || (res as AddressItem).country;
    const detail =
      (res as WxAddressItem).detailInfo || (res as AddressItem).detail;
    let totalDetail = city + country + detail;

    // console.log(res);

    //直辖市，取出省部分
    if (!this.isCenterCity(province)) {
      totalDetail = province + totalDetail;
    }
    return totalDetail;
  }
}

export interface AddressItem {
  name: string;
  province: string;
  city: string;
  country: string;
  detail: string;
  mobile: string;
  totalDetail?: string;
}

export interface WxAddressItem {
  provinceName: string;
  cityName: string;
  countyName: string;
  detailInfo: string;
  userName: string;
  telNumber: string;
}
