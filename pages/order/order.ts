import { AddressItem, WxAddressItem, Address } from './../../utils/address';
import { Order } from '../order/order-model';
import { Cart, CartItem } from '../cart/cart-model.js';
// import {Address} from '../../utils/address.js';

const order = new Order();
const cart = new Cart();
const address = new Address();

Page({
  data: {
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
    // else {
    //   this.data.id = options.id;
    // }
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
      success: (res: any) => {
        if (flag) {
          wx.switchTab({
            url: '/pages/my/my'
          });
        }
      }
    });
  }
});
