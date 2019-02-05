import { Product } from './product-model';

const product = new Product();

Page({
  data: {
    id: 0,
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    productCount: 1,
    currentTabsIndex: 0
  },

  onLoad: function(options: any) {
    this.data.id = options.id;
    this._loadData();
  },

  _loadData: function() {
    product.getDetailInfo(this.data.id, (data: any) => {
      this.setData!({
        product: data
      });
    });
  },

  bindPickerChange: function(event: any) {
    const index = event.detail.value;
    const selectedCount = this.data.countsArray[index];
    this.setData!({
      productCount: selectedCount
    });
  },

  onTabsItemTap: function(event: any) {
    const index = product.getDataSet(event, 'index');
    this.setData!({
      currentTabsIndex: index
    });
  }
});
