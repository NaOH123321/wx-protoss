import { Theme } from './theme-model';

const theme = new Theme();

Page({
  data: {
    id: 0,
    name: ''
  },

  onLoad: function(options: any) {
    this.data.id = options.id;
    this.data.name = options.name;
    this._loadData();
  },

  onReady: function() {
    wx.setNavigationBarTitle({
      title: this.data.name
    });
  },

  _loadData: function() {
    theme.getThemeData(this.data.id, (data: any) => {
      this.setData!({
        themeInfo: data
      });
    });
  },

  onProductsItemTap: function(event: any) {
    const id = theme.getDataSet(event, 'id');
    wx.navigateTo({
      url: `../product/product?id=${id}`
    });
  }
});
