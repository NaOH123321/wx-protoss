import { Base, Param } from '../../utils/base';

export class Order extends Base {
  _storageKeyName: string;

  constructor() {
    super();
    this._storageKeyName = 'newOrder';
  }

  /*下订单*/
  doOrder(param: OrderProduct[], callBack: Function) {
    const allParams: Param = {
      url: 'order',
      type: 'POST',
      data: { products: param },
      sCallBack: (res: any) => {
        // this.execSetStorageSync(true);
        callBack!(res);
      }
    };
    this.request(allParams);
  }

  /*
   * 拉起微信支付
   * params:
   * norderNumber - {int} 订单id
   * return：
   * callback - {obj} 回调方法 ，返回参数 可能值 0:商品缺货等原因导致订单不能支付;  1: 支付失败或者支付取消； 2:支付成功；
   * */
  execPay(orderNumber: number, callback: Function) {
    const allParams: Param = {
      url: 'pay/pre_order',
      type: 'POST',
      data: { id: orderNumber },
      sCallBack: function(data: PayInfo) {
        const timeStamp = data.timeStamp;
        if (timeStamp) {
          //可以支付
          wx.requestPayment({
            timeStamp: timeStamp.toString(),
            nonceStr: data.nonceStr,
            package: data.package,
            signType: data.signType,
            paySign: data.paySign,
            success: function() {
              callback!(2);
            },
            fail: function() {
              callback!(1);
            }
          });
        } else {
          callback!(0);
        }
      }
    };
    this.request(allParams);
  }

  /*获得所有订单,pageIndex 从1开始*/
  //   getOrders(pageIndex, callback) {
  //     var allParams = {
  //       url: 'order/by_user',
  //       data: { page: pageIndex },
  //       type: 'get',
  //       sCallback: function(data) {
  //         callback && callback(data); //1 未支付  2，已支付  3，已发货，4已支付，但库存不足
  //       }
  //     };
  //     this.request(allParams);
  //   }

  /*获得订单的具体内容*/
  getOrderInfoById(id: number, callback: Function) {
    var allParams: Param = {
      url: 'order/' + id,
      sCallBack: data => {
        callback!(data);
      }
    };
    this.request(allParams);
  }

  /*本地缓存 保存／更新*/
  execSetStorageSync(data: any) {
    wx.setStorageSync(this._storageKeyName, data);
  }

  /*是否有新的订单*/
  hasNewOrder() {
    var flag = wx.getStorageSync(this._storageKeyName);
    return flag == true;
  }
}

export interface OrderProduct {
  //order_id?: number;
  product_id: number;
  count: number;
}

export interface PayInfo {
  timeStamp: string;
  nonceStr: string;
  package: string;
  signType: 'MD5';
  paySign: string;
}

export interface OrderResult {
  pass: boolean;

  //失败
  totalCount?: number;
  orderPrice?: number;
  pStatusArray?: ProductStatus[];

  //成功
  order_no?: string;
  order_id?: number;
  create_time?: Date;
}

export interface ProductStatus {
  id: number;
  haveStock: boolean;
  count: number;
  name: string;
  totalPrice: number;
}
