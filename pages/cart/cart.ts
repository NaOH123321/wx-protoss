import { Cart, CartItem } from './cart-model';

const cart = new Cart();

Page({
  data: {
    loadingHidden: false,
    selectedCounts: 0, //总的商品数
    selectedTypeCounts: 0, //总的商品类型数
    account: 0,
    cartData: [] as CartItem[]
  },
  onShow: function() {
    const cartData = cart.getCartDataFromLocal();
    const cal = this._calcTotalAccountAndCounts(cartData);

    this.setData!({
      selectedCounts: cal.selectedCounts,
      selectedTypeCounts: cal.selectedTypeCounts,
      loadingHidden: true,
      account: cal.account,
      cartData: cartData
    });
  },

  /*离开页面时，更新本地缓存*/
  onHide: function() {
    cart.execSetStorageSync(this.data.cartData);
  },

  _calcTotalAccountAndCounts: function(data: any) {
    // 所需要计算的总价格，但是要注意排除掉未选中的商品
    let account = 0;
    // 购买商品的总个数
    let selectedCounts = 0;
    // 购买商品种类的总数
    let selectedTypeCounts = 0;

    let multiple = 100;

    for (let i = 0; i < data.length; i++) {
      //避免 0.05 + 0.01 = 0.060 000 000 000 000 005 的问题，乘以 100 *100
      if (data[i].selectStatus) {
        account += data[i].counts * Number(data[i].price) * multiple;
        selectedCounts += data[i].counts;
        selectedTypeCounts++;
      }
    }

    return {
      selectedCounts: selectedCounts,
      selectedTypeCounts: selectedTypeCounts,
      account: account / multiple
    };
  },

  /*更新购物车商品数据*/
  _resetCartData: function() {
    var newData = this._calcTotalAccountAndCounts(
      this.data.cartData
    ); /*重新计算总金额和商品总数*/
    this.setData!({
      account: newData.account,
      selectedCounts: newData.selectedCounts,
      selectedTypeCounts: newData.selectedTypeCounts,
      cartData: this.data.cartData
    });
  },

  /*根据商品id得到 商品所在下标*/
  _getProductIndexById: function(id: number) {
    const data = this.data.cartData;
    const len = data.length;
    for (let i = 0; i < len; i++) {
      if (data[i].id == id) {
        return i;
      }
    }
    return 0;
  },

  /*调整商品数目*/
  changeCounts: function(event: any) {
    const id = cart.getDataSet(event, 'id');
    const type = cart.getDataSet(event, 'type');
    const index = this._getProductIndexById(id);
    let counts = 1;
    if (type == 'add') {
      cart.addCounts(id);
    } else {
      counts = -1;
      cart.cutCounts(id);
    }
    //更新商品页面
    this.data.cartData[index].counts += counts;
    this._resetCartData();
  },

  /*删除商品*/
  delete: function(event: any) {
    const id = cart.getDataSet(event, 'id');
    const index = this._getProductIndexById(id);
    this.data.cartData.splice(index, 1); //删除某一项商品

    this._resetCartData();
    //this.toggleSelectAll();

    cart.delete(id); //内存中删除该商品
  },

  /*选择商品*/
  toggleSelect: function(event: any) {
    const id = cart.getDataSet(event, 'id');
    const status = cart.getDataSet(event, 'status');
    const index = this._getProductIndexById(id);
    this.data.cartData[index].selectStatus = !status;
    this._resetCartData();
  },

  /*全选*/
  toggleSelectAll: function(event: any) {
    const status = cart.getDataSet(event, 'status') == 'true';
    const data = this.data.cartData;
    const len = data.length;
    for (let i = 0; i < len; i++) {
      data[i].selectStatus = !status;
    }
    this._resetCartData();
  },

  /*提交订单*/
  submitOrder: function() {
    wx.navigateTo({
      url: '../order/order?account=' + this.data.account + '&from=cart'
    });
  }
});
