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
    wx.setStorageSync(this._storageKeyName, cartData);
  }
  /*
   * 从缓存中读取购物车数据
   */
  getCartDataFromLocal() {
    let res: CartItem[] = wx.getStorageSync(this._storageKeyName);
    if (!res) {
      res = [];
    }
    return res;
  }

  /*
   * 判断某个商品是否已经被添加到购物车中，并且返回这个商品的
   * 数据以及所在数组中的序号
   */
  _isHasThatOne(id: number, arr: CartItem[]) {
    let item;
    let result = { index: -1, data: {} };
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
}

export interface CartItem {
  id: number;
  name: string;
  main_img_url: string;
  price: number;
  counts: number;
  selectStatus: boolean;
}
