import { AddressItem, WxAddressItem, Address } from './../../utils/address';
import {
  Order,
  OrderResult,
  ProductStatus,
  OrderProduct
} from '../order/order-model';
import { Cart, CartItem } from '../cart/cart-model';

const order = new Order();
const cart = new Cart();
const address = new Address();

Page({
  data: {
    id: 0,
    productsArr: [] as CartItem[],
    account: 0,
    orderStatus: 0,
    fromCartFlag: true,
    addressInfo: null
  },

  /*
   * 订单数据来源包括两个：
   * 1.购物车下单
   * 2.旧的订单
   * */
  onLoad: function(options: any) {
    const flag = options.from === 'cart';
    this.data.fromCartFlag = flag;
    this.data.account = options.account;

    //来自于购物车
    if (flag) {
      this.setData!({
        productsArr: cart.getCartDataFromLocal(true),
        account: options.account,
        orderStatus: 0
      });

      /*显示收获地址*/
      address.getAddress((res: AddressItem) => {
        this._bindAddressInfo(res);
      });
    }

    //旧订单
    else {
      this.data.id = options.id;
    }
  },

  onShow: function() {
    if (this.data.id !== 0) {
      var that = this;
      //下单后，支付成功或者失败后，点左上角返回时能够更新订单状态 所以放在onshow中
      const id = this.data.id;
      order.getOrderInfoById(id, data => {
        that.setData!({
          orderStatus: data.status,
          productsArr: data.snap_items,
          account: data.total_price,
          basicInfo: {
            orderTime: data.create_time,
            orderNo: data.order_no
          }
        });

        // 快照地址
        const addressInfo = data.snap_address;
        addressInfo.totalDetail = address.setAddressInfo(addressInfo);
        that._bindAddressInfo(addressInfo);
      });
    }
  },

  /*修改或者添加地址信息*/
  editAddress: function() {
    wx.chooseAddress({
      success: (res: WxAddressItem) => {
        const addressInfo: AddressItem = {
          name: res.userName,
          mobile: res.telNumber,
          province: res.provinceName,
          city: res.cityName,
          country: res.countyName,
          detail: res.detailInfo,
          totalDetail: address.setAddressInfo(res)
        };
        this._bindAddressInfo(addressInfo);

        //保存地址
        address.submitAddress(addressInfo, (flag: boolean) => {
          if (!flag) {
            this.showTips('操作提示', '地址信息更新失败！', true);
          }
        });
      },
      fail: err => {
        console.log(err);
      }
    });
  },

  /*绑定地址信息*/
  _bindAddressInfo: function(addressInfo: AddressItem) {
    this.setData!({
      addressInfo: addressInfo
    });
  },

  /*
   * 提示窗口
   * params:
   * title - {string}标题
   * content - {string}内容
   * flag - {bool}是否跳转到 "我的页面"
   */
  showTips: function(title: string, content: string, flag: boolean) {
    wx.showModal({
      title: title,
      content: content,
      showCancel: false,
      success: () => {
        if (flag) {
          wx.switchTab({
            url: '/pages/my/my'
          });
        }
      }
    });
  },

  /*下单和付款*/
  pay: function() {
    if (!this.data.addressInfo) {
      this.showTips('下单提示', '请填写您的收货地址', false);
      return;
    }
    if (this.data.orderStatus === 0) {
      this._firstTimePay();
    } else {
      this._oneMoresTimePay();
    }
  },

  /*第一次支付*/
  _firstTimePay: function() {
    const orderInfo: OrderProduct[] = [];
    const productInfo = this.data.productsArr;
    // const order = new Order();
    for (let i = 0; i < productInfo.length; i++) {
      orderInfo.push({
        product_id: productInfo[i].id,
        count: productInfo[i].counts
      });
    }

    //支付分两步，第一步是生成订单号，然后根据订单号支付
    order.doOrder(orderInfo, (data: OrderResult) => {
      //订单生成成功
      if (data.pass) {
        //更新订单状态
        const id = data.order_id as number;
        this.data.id = id;
        this.data.fromCartFlag = false;

        //开始支付
        this._execPay(id);
      } else {
        this._orderFail(data); // 下单失败
      }
    });
  },

  /* 再次次支付*/
  _oneMoresTimePay: function() {
    this._execPay(this.data.id);
  },

  /*
   *下单失败
   * params:
   * data - {obj} 订单结果信息
   * */
  _orderFail: function(data: OrderResult) {
    const nameArr: string[] = [];
    let name = '';
    let str = '';
    const pArr = data.pStatusArray as ProductStatus[];
    for (let i = 0; i < pArr.length; i++) {
      if (!pArr[i].haveStock) {
        name = pArr[i].name;
        if (name.length > 15) {
          name = name.substr(0, 12) + '...';
        }
        nameArr.push(name);
        if (nameArr.length >= 2) {
          break;
        }
      }
    }
    str += nameArr.join('、');
    if (nameArr.length > 2) {
      str += ' 等';
    }
    str += ' 缺货';
    wx.showModal({
      title: '下单失败',
      content: str,
      showCancel: false
    });
  },

  /*
   *开始支付
   * params:
   * id - {int}订单id
   */
  _execPay: function(id: number) {
    if (!order.onPay) {
      this.showTips('支付提示', '本产品仅用于演示，支付系统已屏蔽', true); //屏蔽支付，提示
      this.deleteProducts(); //将已经下单的商品从购物车删除
      return;
    }

    order.execPay(id, (statusCode: number) => {
      if (statusCode != 0) {
        this.deleteProducts(); //将已经下单的商品从购物车删除   当状态为0时，表示

        const flag = statusCode === 2;
        wx.navigateTo({
          url:
            '../pay-result/pay-result?id=' +
            id +
            '&flag=' +
            flag +
            '&from=order'
        });
      }
    });
  },

  //将已经下单的商品从购物车删除
  deleteProducts: function() {
    const ids: number[] = [];
    const arr = this.data.productsArr;
    for (let i = 0; i < arr.length; i++) {
      ids.push(arr[i].id);
    }
    cart.delete(ids);
  }
});
