import { Base } from '../../utils/base';

export class Cart extends Base {
  _storageKeyName: string;

  constructor() {
    super();
    this._storageKeyName = 'cart';
  }

  /*
   * 加入到购物车
   * 如果之前没有这样的商品，则直接添加一条新的记录，数量为 counts
   * 如果有，则只将相应数量 + counts
   * @params:
   * item - {obj} 商品对象,
   * counts - {int} 商品数目,
   * */
  add(item: CartItem, counts: number) {
    const cartData: CartItem[] = this.getCartDataFromLocal();

    const isHasInfo = this._isHasThatOne(item.id, cartData);
    if (isHasInfo.index == -1) {
      item.counts = counts;
      item.selectStatus = true; //设置选中状态
      cartData.push(item);
    } else {
      cartData[isHasInfo.index].counts += counts;
    }
    this.execSetStorageSync(cartData);
  }

  /*本地缓存 保存／更新*/
  execSetStorageSync(data: CartItem[]) {
    wx.setStorageSync(this._storageKeyName, data);
  }

  /*
   * 从缓存中读取购物车数据
   */
  getCartDataFromLocal(flag: boolean = false) {
    let res: CartItem[] = wx.getStorageSync(this._storageKeyName);
    if (!res) {
      res = [];
    }
    //在下单的时候过滤不下单的商品，
    if (flag) {
      var newRes = [];
      for (let i = 0; i < res.length; i++) {
        if (res[i].selectStatus) {
          newRes.push(res[i]);
        }
      }
      res = newRes;
    }
    return res;
  }

  /*
   * 判断某个商品是否已经被添加到购物车中，并且返回这个商品的
   * 数据以及所在数组中的序号
   */
  _isHasThatOne(id: number, arr: CartItem[]) {
    let item: CartItem;
    const cartItem: CartItem = { id: 0, counts: 0 };
    let result = { index: -1, data: cartItem };
    for (let i = 0; i < arr.length; i++) {
      item = arr[i];
      if (item.id == id) {
        result = {
          index: i,
          data: item
        };
        break;
      }
    }
    return result;
  }

  getCartTotalCounts() {
    const data = this.getCartDataFromLocal();
    let counts = 0;
    for (let i = 0; i < data.length; i++) {
      counts += data[i].counts;
    }
    return counts;
  }

  /*
   * 修改商品数目
   * params:
   * id - {int} 商品id
   * counts -{int} 数目
   * */
  _changeCounts(id: number, counts: number) {
    const cartData = this.getCartDataFromLocal();
    const isHasInfo = this._isHasThatOne(id, cartData);
    if (isHasInfo.index != -1) {
      if (isHasInfo.data.counts > 1) {
        cartData[isHasInfo.index].counts += counts;
      }
    }
    this.execSetStorageSync(cartData);
  }

  /*
   * 增加商品数目
   * */
  addCounts(id: number) {
    this._changeCounts(id, 1);
  }

  /*
   * 减少商品数目
   * */
  cutCounts(id: number) {
    this._changeCounts(id, -1);
  }

  /*
   * 删除某些商品
   */
  delete(ids: number[]) {
    if (!(ids instanceof Array)) {
      ids = [ids];
    }
    var cartData = this.getCartDataFromLocal();
    for (let i = 0; i < ids.length; i++) {
      var hasInfo = this._isHasThatOne(ids[i], cartData);
      if (hasInfo.index != -1) {
        cartData.splice(hasInfo.index, 1); //删除数组某一项
      }
    }
    this.execSetStorageSync(cartData);
  }
}

export interface CartItem {
  id: number;
  name?: string;
  main_img_url?: string;
  price?: number;
  counts: number;
  selectStatus?: boolean;
}
