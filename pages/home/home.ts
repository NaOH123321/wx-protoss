import { Home } from "./home-model";

const home = new Home();

Page({
  onLoad: function() {
    this._loadData();
  },

  _loadData: function() {
    const id = 1;
    home.getBannerData(id, (res: any) => {
      this.setData!({
        bannerArr: res
      });
    });

    home.getThemeData((data: any) => {
      this.setData!({
        themeArr: data
      });
    });

    home.getProductsData((data: any) => {
      this.setData!({
        productsArr: data
      });
    });
  },

  onProductsItemTap: function(event: any) {
    const id = home.getDataSet(event, "id");
    wx.navigateTo({
      url: `../product/product?id=${id}`
    });
  },

  onThemesItemTap: function(event: any) {
    const id = home.getDataSet(event, "id");
    const name = home.getDataSet(event, "name");
    wx.navigateTo({
      url: `../theme/theme?id=${id}&name=${name}`
    });
  }
});
