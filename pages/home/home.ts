import { Home } from "./home-model";

var home = new Home();

Page({
  onLoad: function() {
    this._loadData();
  },

  _loadData: function() {
    var id = 1;
    home.getBannerData(id, (res: any) => {
      // console.log(res);
      this.setData({
        bannerArr: res
      });
    });

    home.getThemeData((data: any) => {
      // console.log(data);
      this.setData({
        themeArr: data
      });
    });
  }
});
