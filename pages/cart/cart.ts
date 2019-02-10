import { Cart } from './cart-model';

const cart = new Cart();

Page({
  data: {},
  onShow: function() {
    const cartData = cart.getCartDataFromLocal();
    const cal = this._calcTotalAccountAndCounts(cartData);

    this.setData!({
      selectedCounts: cal.selectedCounts,
      selectedTypeCounts: cal.selectedTypeCounts,
      account: cal.account,
      cartData: cartData
    });
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
  }
});
